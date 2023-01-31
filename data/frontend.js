const list = [
  {
    importance: "5",
    question: "DNS에 대해 설명해주세요.",
    answer: `도메인 이름 시스템 서버(Domain Name System Servers)는 URL들의 이름과 IP주소를 저장하고 있는 데이터베이스로, 웹사이트를 위한 주소록입니다.
    
    숫자로 된 IP주소 대신 사용자가 사용하기 편리하도록 주소를 매핑해주는 역할을 합니다.`,
  },
  {
    importance: "5",
    question:
      "브라우저 주소창에 www.google.com을 입력하면 발생하는 일을 설명해주세요.",
    answer: `1. 사용자가 웹브라우저 검색창에 www.google.com 입력
    2. 웹브라우저는 캐싱된 DNS 기록들을 통해 해당 도메인 주소와 대응하는 IP주소를 확인
    3. 웹브라우저가 HTTP를 사용하여 DNS에게 입력된 도메인 주소를 요청
    4. DNS가 웹브라우저에게 찾는 사이트의 IP주소를 응답
    5. 웹브라우저가 웹서버에게 IP주소를 이용하여 HTML문서 요청
    6. 웹 어플리케이션 서버(WAS)와 데이터베이스에서 우선 웹페이지 작업을 처리
    7. 작업처리 결과를 웹서버로 전송
    8. 웹서버는 웹브라우저에게 HTML 문서 결과를 응답
    9. 웹브라우저는 화면에 웹페이지 내용물 출력`,
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
