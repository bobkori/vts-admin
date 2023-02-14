import Layout from "@/layout";
import "@/styles/globals.scss";
import CTXProvider from "@/context";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function App({ Component, pageProps }: AppProps) {
  return (
    <CTXProvider>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </CTXProvider>
  );
}
export default App;
