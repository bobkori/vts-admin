import Layout from "@/layout";
import "@/styles/globals.css";
import CTXProvider from "@/context";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <CTXProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CTXProvider>
  );
}
export default App;
