import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const getServerSideProps = (async (context: any) => {

  console.log(context)
  // Fetch data from external API
  // Pass data to the page via props
  return { props: { } }
})
