import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Styles from "@/styles/header.module.scss";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <main>
        <Header />
        <div className={Styles.vtslayoutwrapper}>
          <Sidebar />
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
