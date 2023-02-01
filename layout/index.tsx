import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <main>
        {/* <Header />
        <Sidebar /> */}
      </main>
      {children}
    </React.Fragment>
  );
};

export default Layout;
