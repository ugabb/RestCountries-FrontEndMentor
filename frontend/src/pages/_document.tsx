import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
 

  return (
    <Html lang="en" >
      <Head>
      <title>Countries</title>
      <link rel="shortcut icon" href="../favicon.png" />
      </Head>
      <body className="bg-[#202c37]" >
        <Navbar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
