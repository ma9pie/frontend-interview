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
  5. 뷰포트 기반으로 렌더트리의 각 노드가 가지는 정확한 위치와 크기 계산
  6. 계산한 위치, 크기 기반으로 화면에 그림`,
  },
  {
    importance: "5",
    question: "URI과 URL의 차이",
    answer: `[URI] : 통합 자원 식별자(Uniform Resource Identifier)
    URI는 인터넷상의 리소스(자원) 자체를 식별하는 고유한 문자열 시퀀스입니다.

    [URL] : 통합 자원 위치(Uniform Resource Location)
    URL은 네트워크상의 리소스(자원)의 위치를 나타내기 위한 규약입니다.
    
    [예시]
    URI=식별자, URL=식별자+위치

   - https://www.example.com/index.html?page=123
   위의 링크에서 index.html의 위치를 표기한 https://www.example.com/index.html까지는 URL입니다.
   여기서 query string으로 식별자가 포함된 https://www.example.com/index.html?page=123은 URI입니다.`,
  },
  {
    importance: "5",
    question: "RESTful API에 대해 설명해주세요.",
    answer: `REST(Representational State Transfer API)란 HTTP URI를 통해서 자원(resource)을 명시하고, HTTP Method(GET, POST, PUT, DELETE, PATCH 등등)을 통해서 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미합니다. 
    이러한 REST 원리를 따르는 API를 RESTful API라고 합니다.
    
    [설계 규칙]
    - 슬래시(/)는 계층 관계를 나타내는데 사용한다.
    - URI 마지막 문자로 슬래시를 포함하지 않는다.
    - 불가피하게 긴 URI 사용 시 하이픈(-)을 사용하여 가독성을 높인다.
    - 밑줄(_)은 사용하지 않는다.
    - 파일확장자는 URI에 포함하지 않는다.
    - 자원은 동사보다 명사로, 대문자보다는 소문자로 표현한다.`,
  },
  {
    importance: "5",
    question: "Webpack, Babel, Polyfill에 대해 설명해주세요.",
    answer: `- Webpack
    웹팩은 Javascript, CSS, Img 등등을 브라우저에서 실행할 수 있는 번들 파일로 변환하는 모듈 번들러입니다. 
    
    - Babel
    바벨은 최신 자바스크립트 코드를 구형 브라우저에서도 실행할 수 있는 코드로 변환하는 자바스크립트 컴파일러입니다. 또한 Typescript와 같은 다른 언어를 Javascript로 컴파일 하는데 사용됩니다.
    
    - Pollyfill
    폴리필은 브라우저가 지원하지 않는 자바스크립트 코드를 지원 가능하도록 변환한 코드 조각을 의미합니다. "충전솜"이라는 의미 그대로 최신 문법과 오래된 브라우저 사이의 간격을 메꾸는 역할을 합니다.`,
  },
  {
    importance: "5",
    question: "SPA, CSR, SSR의 차이를 설명해주세요.",
    answer: `- SPA(Single Page Application)
    전체 페이지를 다시 로드할 필요 없이 변경된 부분만 동적으로 업데이트하는 어플리케이션을 의미합니다. 새로고침이 발생하지 않기 때문에 네이티브 앱과 유사하게 매끄럽고 응답성이 뛰어난 서비스를 제공할 수 있습니다.
    
    - CSR(Client Side Rendering)
    사용자의 웹브라우저에서 Javascript를 사용하여 서버에서 필요한 데이터를 가져오고, 클라이언트측에서 웹 어플리케이션을 동적으로 렌더링하는 것을 의미합니다. 초기 로드 시간이 빠르고 응답성이 뛰어난 사용자 경험을 제공합니다.

    - SSR(Server Side Rendering)
    HTML을 클라이언트에 보내기 전에 서버측에서 웹 어플리케이션을 렌더링하는 것을 의미합니다. 서버는 클라이언트에게 요청을 받으면 미리 렌더링 된 페이지를 제공하고, 이러한 방식은 페이지가 처음 로드될 때 컨텐츠가 검색 엔진에 표시되므로 더 빠른 초기 로드 시관과 더 나은 SEO(검색 엔진 최적화)를 제공합니다.`,
  },
  {
    importance: "5",
    question: "CORS가 무엇이며, 해결하기 위한 방법에 대해 설명해주세요.",
    answer: `CORS(Cross Origin Resource Sharing)란 교차 출처 리소스 공유란 뜻이며, 웹 페이지가 제공하는 도메인이 아닌 다른 도메인에서 리소스를 요청하는 것을 의미합니다. 브라우저는 CORS 에러를 발생시켜 악의적인 스크립트가 중요한 데이터에 접근하거나 무단 요청하지 못하도록 방지합니다.
    
    [해결 방법]
    - 프록시 서버 설정
    - 서버에서 CORS 헤더를 추가하여 특정 도메인의 요청을 허용
      ㆍAccess-Control-Allow-Origin: *
      ㆍAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
      ㆍAccess-Control-Allow-Headers: Content-Type, Authorization
      ㆍAccess-Control-Max-Age: 86400
    - Chrome 확장 프로그램 "Allow CORS" 사용`,
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
    answer: `- localStorage
    로컬 스토리지는 브라우저 내에서 로컬로 데이터를 저장할 수 있는 저장소입니다. 로컬 스토리지에 저장된 데이터는 사용자가 브라우저를 닫거나 컴퓨터를 재시작한 후에도 그대로 유지됩니다. 
    
    - Session Storage
    세션 스토리지는 로컬 스토리지와 비슷하지만 사용자가 브라우저 탭을 닫으면 저장된 데이터가 삭제됩니다. 일회성 로그인, 입력 폼 저장, 비회원 장바구니와 같은 임시 데이터를 저장하는데 유용합니다.
    
    - Cookie 
    쿠키는 클라이언트 로컬에 저장되는 키와 값이 있는 작은 텍스트 파일입니다.
    4KB의 크기 제한이 있으며 일정 시간이 지나면 만료되도록 설정할 수 있고 만료 후에는 사용자의 컴퓨터에서 삭제됩니다.`,
  },
  {
    importance: "5",
    question: "Event loop에 대해 설명해주세요.",
    answer: `이벤트 루프는 콜 스택과 테스크 큐를 주시하고 콜 스택이 비어있다면 테스트 큐에 있던 작업을 콜 스택으로 보내주는 역할을 합니다.`,
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
