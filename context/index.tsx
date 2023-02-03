import React from "react";
import CreateSeriesProvider from "./create-series";

const CTXProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return <CreateSeriesProvider>{children}</CreateSeriesProvider>;
};
export default CTXProvider;
