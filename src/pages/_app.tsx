import { type AppType } from "next/dist/shared/lib/utils";
import Head from 'next/head';
import "~/styles/globals.css";
import { ThemeProvider } from 'next-themes';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
