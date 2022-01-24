import type { NextPage } from "next";
import Head from "next/head";
import React, { ReactText, useEffect, useState } from "react";
import Layout from "../components/Layout";

const textToValueTable = (s: string) => {
  const split = s.split("\n");
  const valueTable = split.map((tsv) => tsv.split("\t"));
  for (let i = 0; i < valueTable.length - 1; i++) {
    if (valueTable[i].length !== valueTable[i + 1].length) {
      return false;
    }
  }
  return valueTable;
};

const Home: NextPage = () => {
  const [tsvText, setTsvText] = useState("Foo\tBar\nBaz\tQux");
  const [sqlText, setSqlText] = useState("");
  const [treatFirstLineAsColumns, setTreatFirstLineAsColumns] = useState(false);
  const [treatNullAsNull, setNullAsNull] = useState(true);
  const onTsvTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTsvText(e.target.value);
  };

  useEffect(() => {
    const valueTable = textToValueTable(tsvText);
    if (!valueTable || valueTable.length === 0) {
      return;
    }
    let columns = "";
    if (treatFirstLineAsColumns) {
      const first = valueTable.shift();
      columns = "(" + first?.map((value) => "`" + value + "`").join(", ") + ")";
    }
    const insertStatement =
      `INSERT INTO YOUR_TABLE ${columns} \nVALUES\n` +
      valueTable
        .map((values: string[]) => {
          return (
            "(" +
            values
              .map((v) => {
                const canBeNaN = Number(v);
                if (
                  Number.isNaN(canBeNaN) ||
                  v.trim() === "" // Number('') is 0, not NaN
                ) {
                  if (treatNullAsNull && v === "null") {
                    return "null";
                  }
                  return "`" + v + "`";
                }
                return v;
              })
              .join(", ") +
            ")"
          );
        })
        .join(",\n") +
      ";";
    setSqlText(insertStatement);
  }, [tsvText, treatFirstLineAsColumns, treatNullAsNull]);
  const checkBoxClass =
    "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
  return (
    <div>
      <Head>
        <title>TSV To SQL | Haruki Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div>
            <label>
              <input
                type="checkbox"
                className={checkBoxClass}
                onChange={() => {
                  setTreatFirstLineAsColumns((current) => !current);
                }}
                checked={treatFirstLineAsColumns}
              ></input>{" "}
              Treat first row as column names
            </label>{" "}
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                className={checkBoxClass}
                onChange={() => {
                  setNullAsNull((current) => !current);
                }}
                checked={treatNullAsNull}
              ></input>{" "}
              Treat "null" as null
            </label>
          </div>
          <div className="flex justify-center items-center">
            <textarea
              className="resize-none rounded-md grow h-96"
              value={tsvText}
              onChange={onTsvTextChange}
            />
            {"⇒"}
            <textarea
              className="resize-none rounded-md grow h-96"
              value={sqlText}
            />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
