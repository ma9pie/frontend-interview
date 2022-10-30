import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
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
