import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>REST Countries App</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
