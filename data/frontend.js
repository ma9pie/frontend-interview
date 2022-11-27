const list = [
  {
    importance: "5",
    question: "브라우저 주소창에 google을 입력하면 발생하는 일을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "브라우저 렌더링 과정을 설명해주세요.",
    answer: `1. HTML 파싱 후 DOM(Document Object Model) 트리 구축
  2. CSS 파싱 후 CSSOM(CSS Object Model) 트리 구축
  3. script 태그를 만나면 HTML 파싱을 중단하고 Javascript 코드를 파싱
  4. DOM과 CSSOM을 조합하여 렌더트리(Render Tree) 구축
  5. 뷰포트 기반으로 렌더트리의 각 노드가 가지는 정확한 위치와 크기 계산(Layout/Reflow 단계)
  6. 계산한 위치, 크기 기반으로 화면에 그림(Paint 단계)`,
  },
  {
    importance: "5",
    question: "DNS에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "REST API에 대해 설명해주세요.",
    answer: ``,
  },

  {
    importance: "5",
    question: "Webpack, Babel, Polyfill에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "SPA, CSR, SSR의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "CORS가 무엇인지, 해결해 본 경험이 있으신지 말씀해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "Sementic Markup에 대해 설명해주세요.",
    answer: `시멘틱(Sementic)이란 "의미론적인" 이라는 의미를 가지며 마크업(Markup)은 HTML 태그로 문서를 작성하는 것을 뜻합니다.
  따라서 시멘틱 마크업이란 의미가 잘 전달되도록 문서를 작성하는 것을 말하는데, 아래와 같이 각 태그가 그 용도에 맞게 사용되어야 합니다.

  - 헤더/푸터에 <header>와 <footer> 사용
  - 메인 컨텐츠에 <main>과 <section> 사용
  - 독립적인 컨텐츠에 <article> 사용
  - 최상위 제목으로 <h1> 사용
  - 순서가 없는 목록으로 <ul>과 <li> 사용
  - 네비게이션에 <nav> 사용

  장점 : 검색엔진 최적화(SEO) 및 웹 접근성에 유리, div, span으로만 이루어진 구조보다 가독성이 좋음`,
  },
  {
    importance: "5",
    question: "로컬 스토리지, 세션 스토리지, 쿠키에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "Event loop와 Task queue에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "MVC, MVVM 패턴에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "HTTP와 HTTPS의 차이점을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "페이지 로드 시간을 줄이는 방법들에 대해서 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "테스트 코드를 작성하신 경험이 있으신가요?",
    answer: ``,
  },
  {
    importance: "5",
    question: "웹 서비스 배포 시스템 구축 경험이 있으신가요?",
    answer: ``,
  },
  {
    importance: "5",
    question: "HTML에서의 attributes와 properties의 차이점을 설명해주세요.",
    answer: ``,
  },
];

export default list;
