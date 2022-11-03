import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="google-site-verification"
          content="0ATr3A6QdCZG5gVNu2lZep3W5w7d3aKLynPPdcKH370"
        />
        <link rel="icon" href="/public/favicon.ico" />
        {/* 다크모드 시 화면 깜빡임 제거 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem("theme");
              document.documentElement.setAttribute("data-theme", theme); 
            `,
          }}
        ></script>
      </Head>
      <body>
        <div id="alert-modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
