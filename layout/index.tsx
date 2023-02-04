import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import inter from "@/fonts/inter";
import styles from "@/styles/header.module.scss";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <main className={inter.className}>
        <Header />
        <div className={styles.vtslayoutwrapper}>
          <Sidebar />
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
