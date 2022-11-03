const inerview = {};

inerview.CS = [
  {
    importance: "5",
    question: "객체 지향 프로그래밍에 대해 설명해주세요.",
    answer: `객체지향프로그래밍(OOP, Object Oriented Programming)은 컴퓨터 프로그래밍 패러다임 중 하나로, 데이터를 추상화 시켜 상태(attribute)와 행위(Method)를 가진 객체로 만들고 그 객체들 간의 상호작용을 통해 로직을 구성하는 프로그래밍 방법입니다.
    
    장점 : 코드 재사용 및 유지보수 용이, 대형 프로젝트에 적합
    단점 : 처리속도 느림, 설계시 많은 시간이 필요, 객체가 많을 시 용량이 커짐

    - 객체지향의 특성 
    1. 캡슐화 : 변수와 함수를 하나의 단위로 묶는 것, 정보 은닉
    2. 상속화 : 이미 정의된 상위 클래스의 모든 속성과 연산을 하위 클래스가 물려받는 것
    3. 추상화 : 객체들의 공통적인 특징을 도출하는 것
    4. 다형성 : 하나의 변수 또는 함수가 상황에 따라 다른 의미로 해석될 수 있는 것`,
  },
  {
    importance: "5",
    question: "프로세스와 스레드의 차이에 대해 설명해주세요.",
    answer: `Process : 운영체제로부터 자원을 할당받은 작업의 단위
    Thread : 프로세스가 할당받은 자원을 이용하는 실행 흐름의 단위
    
    하나의 프로세스에서 스레드들은 각각 stack영역만 따로 할당받고 code, data, heap영역은 공유합니다.`,
  },
  {
    importance: "5",
    question: "멀티 프로세스와 멀티 스레드의 차이에 대해 설명해주세요.",
    answer: `Multi-Process : 하나의 프로그램을 여러개의 프로세스로 구성하여 각 프로세스가 하나의 작업(task)를 처리하는 것
    - 장점 : 하나의 자식 프로세스에서 문제가 발생해도 영향이 전파되지 않음
    - 단점 : 잦은 Context Switching으로 인한 오버헤드가 발생할 수 있고, 프로세스 사이 통신이 어려움(IPC)

    Multi-Thread : 프로그램을 여러개의 스레드로 구성하고 각 스레드가 하나의 작업(task)를 처리하는 것
    - 장점 : 시스템 자원 효율성 증가, 처리 비용 감소, 자원 공유
    - 단점 : 하나의 스레드에 문제가 생기면 전체 프로세스에 영향이 감, 자원 공유로 인한 동기화 문제, 디버깅이 까다로움`,
  },
  {
    importance: "5",
    question: "Stack과 Queue의 차이에 대해 설명해주세요.",
    answer: `[Stack]
    - 후입선출(LIFO, Last In First Out)
    - 삽입 연산은 Push, 삭제연산은 Pop
    예시 : 접시, 브라우저 뒤로가기, 실행취소(ctrl+z)

    [Queue]
    - 선입선출(FIFO, First In First Out)
    - 삽입 연산은 Enqueue, 삭제연산은 Dequeue
    예시 : 은행업무, 놀이기구 대기줄`,
  },
  {
    importance: "5",
    question: "List, Map, Set의 차이점을 설명해주세요.",
    answer: `[List]
    - 순서와 중복이 있는 자료구조
    - 인덱스로 원소에 접근이 가능
    - 크기가 가변적

    [Map]
    - key와 value를 같이 저장할 수 있는 자료구조
    - key에 대한 중복이 없으며 순서를 보장하지 않음
    - value의 중복은 허용됨
    - 검색 속도 빠름
    
    [Set]
    - 순서가 없고, 중복된 데이터를 허용하지 않는 자료구조
    - 검색 속도 빠름
    - 중복되지 않은 데이터를 구할 때 유용`,
  },
  {
    importance: "5",
    question: "라이브러리와 프레임워크의 차이점을 설명해주세요.",
    answer: `라이브러리와 프레임워크의 차이는 제어 흐름에 대한 주도권이 누구 또는 어디에 있는가에 있습니다.
    
    프레임워크는 전체적인 흐름을 자체적으로 가지고 있으며, 프로그래머는 그 안에 필요한 코드를 작성합니다.(제어의 역전, IOC) 
    
    반면, 라이브러리는 프로그래머가 흐름에 대해 제어를 하며 필요한 상황에 가져다 쓸 수 있습니다.`,
  },
];

inerview.JavaScript = [
  {
    importance: "5",
    question: "Sync와 Async의 차이점을 설명해주세요.",
    answer: `동기와 비동기는 특정 작업을 수행할 때 해당 작업의 완료 여부를 신경쓰는지에 따라 구분됩니다.

    [Sync]
    - 요청을 보낸 후 응답을 기다림
    - 직렬적 task 수행

    [Async]
    - 요청의 응답을 기다리지 않고 다음 동작 실행
    - 병렬적 task 수행`,
  },
  {
    importance: "5",
    question: "Blocking과 Non-Blocking의 차이를 설명해주세요.",
    answer: `블로킹과 논블로킹은 작업을 수행할 때 제어권이 누구한테 있는지에 따라 구분됩니다.
    
    [Blocking]
    - 해당 작업이 완료될 때까지 다른 작업 수행 불가

    [Non-Blocking]
    - 해당 작업이 완료되기 전까지 다른 작업 수행 가능`,
  },
  {
    importance: "5",
    question: "콜백함수에 대해 설명해주세요.",
    answer: `[콜백함수]
    - 다른 함수의 인자로써 이용되는 함수
    - 어떤 이벤트에 의해 호출되어지는 함수
    
    콜백함수는 다른 함수에 매개변수로 넘겨준 함수를 뜻합니다.`,
  },
  {
    importance: "5",
    question: "콜백지옥의 의미와 콜백지옥을 해결하는 방법을 설명해주세요.",
    answer: `콜백지옥(Callback Hell)이란 콜백함수를 익명함수로 전달하는 과정에서 또 다시 콜백 안에 함수 호출이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상을 뜻합니다. 
    주로 이벤트 처리나 서버 통신과 같은 비동기 작업을 제어하기 위해 사용되는데 이러한 방식은 가독성이 떨어지게 되고 유지보수를 어렵게 만듭니다.
    
    - 해결 방법
    1. 코딩 패턴으로 콜백 익명 함수를 각각의 함수로 분리
    2. Promise 사용
    3. Async + Await 사용`,
  },
  {
    importance: "5",
    question: "Promise와 Async, Await의 차이를 설명해주세요.",
    answer: `Async, Await 문법은 Promise를 더욱 쉽게 사용할 수 있도록 하는 ES8에서 도입된 비동기 처리 방식 문법입니다.
    
    Async, Await을 사용할 경우 코드가 Promise를 사용한 코드보다 간결해지며 동기적인 코드흐름으로 개발이 가능하지만, 에러처리를 위해 try/catch문을 사용해야 합니다.`,
  },
  {
    importance: "5",
    question: "map과 forEach의 차이를 설명해주세요.",
    answer: `두 함수 모두 반복문의 역할을 하기위해 사용되는 함수입니다. 
    차이점은 forEach의 경우 반환값이 undefined이지만, map의 경우 반환값이 있어 새로운 배열을 생성할 수 있습니다.`,
  },
  {
    importance: "5",
    question: "var, let, const의 차이를 설명해주세요.",
    answer: `[var]
    - 중복 선언 가능
    - 함수레벨 스코프
    [let] 
    - 중복 선언 불가능
    - 재할당 가능
    - 블록레벨 스코프
    [const] 
    - 중복 선언 불가능
    - 재할당 불가능
    - 블록레벨 스코프`,
  },
  {
    importance: "5",
    question: "함수 선언형과 함수 표현식의 차이를 설명해주세요.",
    answer: `[함수 선언식]
    function 함수명() {코드}
    - 코드가 실행되기전 로드
    - 호이스팅 됨

    [함수 표현식]
    var 함수명 = function () {코드}
    - 인터프리터가 해당 코드줄을 읽을 때 로드
    - 호이스팅되지않고 정의된 범위에서 로컬 변수의 복사본을 유지할 수 있음
    - 클로져나 콜백으로 사용 가능
    `,
  },
  {
    importance: "5",
    question: "호이스팅에 대해 설명해주세요.",
    answer: `자바스크립트에서는 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당해줍니다.
    이로인해 변수 및 함수 선언이 스코프의 최상단으로 끌어 올려진 것 같은 현상이 발생하는데, 이를 호이스팅(Hoisting)이라고 합니다.
    
    주의할 점 : 함수 선언식은 호이스팅 되지만, 함수 표현식은 호이스팅 되지 않는다.`,
  },
  {
    importance: "5",
    question: "이벤트 버블링과 이벤트 캡처링에 대해 설명해주세요.",
    answer: `[이벤트 버블링]
    특정 화면 요소에서 이벤트가 발생했을 때, 해당 이벤트가 상위의 화면 요소들로 전달되는 특성입니다.

    [이벤트 캡쳐링]
    이벤트 버블링과 반대로 상위요소에서 하위요소를 탐색하여 이벤트를 탐색하여 이벤트를 전파하는 방식입니다.`,
  },
  {
    importance: "5",
    question: "이벤트 전파와 이벤트 위임에 대해 설명해주세요.",
    answer: `[이벤트 전파]
    DOM 트리 상에 존재하는 DOM 요소 노드에서 이벤트가 발생하면 이벤트 객체가 DOM 트리를 통해 다른 DOM 요소 노드로 전파되는 것을 의미합니다.

    이벤트 전파는 3단계로 구분됩니다.
    1. 캡쳐링 단계 : 이벤트가 상위 요소에서 하위 요소 방향으로 전파
    2. 타깃 단계 : 이벤트가 이벤트 타깃에 도달
    3. 버블링 단계 : 이벤트가 하위 요소에서 상위 요소 방향으로 전파되는 것 

    [이벤트 위임]
    하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식입니다.`,
  },

  {
    importance: "5",
    question: "클로져에 대해 설명해주세요.",
    answer: `클로져란, 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때도 그 스코프에 접근할 수 있는 것을 의미합니다. 
    
    - 사용하는 이유
    현재 상태를 기억하고, 변경된 최신 상태 유지
    전역 변수 사용 억제
    정보 은닉`,
  },
  {
    importance: "5",
    question: "렉시컬 스코프에 대해 설명해주세요.",
    answer: `렉시컬 스코프란 함수가 선언되는 위치에 따라서 상위 스코프가 결정되는 스코프입니다. 
    다른 말로, 정적 스코프(Static scope)라고도 부릅니다.`,
  },
  {
    importance: "5",
    question: "스코프와 스코프체인에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "실행 컨텍스트에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "프로토 타입에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "깊은복사와 얕은복사의 차이점을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "this의 의미를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "ES6에서 생긴 큰 변화들에 대해 설명해주세요.",
    answer: ``,
  },

  {
    importance: "5",
    question: "import와 require의 차이점에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "package.json의 역할에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "typescript를 쓰는 이유에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "null, undefined, undeclared, NaN에 대해 설명해주세요.",
    answer: ``,
  },
];

inerview.React = [
  {
    importance: "5",
    question: "Virtual DOM에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "React의 장점과 단점을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "State와 Props의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "React lifecycle에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question:
      "state를 직접변경하지 않고 useState를 사용하는 이유를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "useEffect에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "useCallback과 useMemo의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "React rendering 성능을 향상시키기 위한 방법들을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "전역 상태 관리 방법에 대해 설명해주세요.",
    answer: ``,
  },
];

inerview.Frontend = [
  {
    importance: "5",
    question: "브라우저 주소창에 google을 입력하면 발생하는 일을 설명해주세요.",
    answer: ``,
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

    장점 : 검색엔진 최적화(SEO) 및 웹 접근성에 유리, div, span으로만 이루어진 구조보다 가독성이 좋음
    `,
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

inerview.기타 = [
  {
    importance: "5",
    question: "자기소개 부탁드립니다.",
    answer: ``,
  },
  {
    importance: "5",
    question: "회사 지원 동기가 어떻게 되시나요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "프론트엔드 포지션을 선택한 이유가 어떻게 되시나요?",
    answer: ``,
  },
  {
    importance: "5",
    question: "최근에 경험했던 기억에 남는 에러에 대해 말씀해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "요즘 공부중이시는 것에대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "새로운 기술을 습득하기 위해 어떠한 방식으로 연구하시나요?",
    answer: ``,
  },
  {
    importance: "5",
    question: "협업을 하면서 갈등이 생겼던 경험이 있으신가요?",
    answer: ``,
  },
  {
    importance: "5",
    question: "개발 도중에 발생하는 에러에대해 보통 어떻게 대처하시나요?",
    answer: ``,
  },
];

export default inerview;
