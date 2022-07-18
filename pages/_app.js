import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>My task App</title>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
