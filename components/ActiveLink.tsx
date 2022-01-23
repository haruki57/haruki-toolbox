import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children, ReactElement, ReactNode } from "react";

interface ActiveLinkProps {
  children: ReactNode;
  activeClassName: string;
  href?: string;
  as?: string;
}

const ActiveLink = ({
  children,
  activeClassName,
  href,
  as,
  ...props
}: ActiveLinkProps): JSX.Element => {
  const { asPath } = useRouter();

  const child = Children.only(children);
  const childClassName = (child as any)?.props?.className || "";

  // pages/index.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link href={href || ""} {...props}>
      {React.cloneElement(child as React.ReactElement<any>, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
