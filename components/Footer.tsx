import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="h-0.5 bg-slate-50"></div>
      <footer className="flex items-center justify-center p-4">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-1 h-4">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Footer;
