import styles from "../styles/Layout.module.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => <div>{children}</div>;

export default Layout;
