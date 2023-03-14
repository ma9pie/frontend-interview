import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 메타 태그 설정 */}
        <meta
          name="description"
          content="구글, 티스토리, 깃헙 등등 프론트엔드(Frontend) 기술 면접에서 자주 물어보는 질문 자료들을 정리하여 만든 사이트입니다."
        />
        <meta charSet="utf-8" />
        <meta name="author" content="ma9pie" />
        <meta name="image" content="/images/logo.svg" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Frontend, Interview, web, 프론트엔드, 웹개발, 리액트, 프론트엔드 면접, 프론트엔드 기술 면접, 인터뷰, 면접"
        />

        {/* Naver 블로그, 카카오톡 미리보기 설정 */}
        <meta
          property="og:url"
          content="https://frontend-interview-question.vercel.app"
        />
        <meta property="og:site_name" content="프론트엔드 기술 면접 질문" />
        <meta property="og:title" content="프론트엔드 기술 면접 질문" />
        <meta property="og:image" content="/images/logo.svg" />
        <meta
          property="og:description"
          content="구글, 티스토리, 깃헙 등등 프론트엔드(Frontend) 기술 면접에서 자주 물어보는 질문 자료들을 정리하여 만든 사이트입니다."
        />
        <meta property="og:type" content="website" />

        {/* 트위터 미리보기 설정 */}
        <meta name="twitter:card" content="프론트엔드 기술 면접 질문" />
        <meta
          name="twitter:url"
          content="https://frontend-interview-question.vercel.app"
        />
        <meta name="twitter:site_name" content="프론트엔드 기술 면접 질문" />
        <meta name="twitter:title" content="프론트엔드 기술 면접 질문" />
        <meta name="twitter:image" content="/images/logo.svg" />
        <meta
          name="twitter:description"
          content="구글, 티스토리, 깃헙 등등 프론트엔드(Frontend) 기술 면접에서 자주 물어보는 질문 자료들을 정리하여 만든 사이트입니다."
        />
        <meta name="twitter:type" content="website" />

        {/* 구글 서치 콘솔 */}
        <meta
          name="google-site-verification"
          content="0ATr3A6QdCZG5gVNu2lZep3W5w7d3aKLynPPdcKH370"
        />

        {/* 아이콘 생성 사이트 - https://favicomatic.com */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="프론트엔드 면접질문" />
        <meta name="application-name" content="프론트엔드 면접질문" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="icons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="icons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="icons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="icons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="icons/mstile-310x310.png"
        />
        <link rel="manifest" href="manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-128.png"
          sizes="128x128"
        />

        {/* 구글 애널리틱스 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* 구글 애드센스 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4808054974810104"
          crossOrigin="anonymous"
        ></script>

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
