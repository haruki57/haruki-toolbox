import { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="px-8 my-4">
        <Nav />
        <div className="px-4 my-4">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
