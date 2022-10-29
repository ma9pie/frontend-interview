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
    4. 다형성 : 하나의 변수 또는 함수가 상황에 따라 다른 의미로 해석될 수 있는 것
    `,
  },
  {
    importance: "5",
    question: "프로세스와 스레드의 차이에 대해 설명해주세요.",
    answer: `Process : 운영체제로부터 자원을 할당받은 작업의 단위
    Thread : 프로세스가 할당받은 자원을 이용하는 실행 흐름의 단위
    
    하나의 프로세스에서 스레드들은 각각 stack영역만 따로 할당받고 code, data, heap영역은 공유합니다.
    `,
  },
  {
    importance: "5",
    question: "멀티 프로세스와 멀티 스레드의 차이에 대해 설명해주세요.",
    answer: `Multi-Process : 하나의 프로그램을 여러개의 프로세스로 구성하여 각 프로세스가 하나의 작업(task)를 처리하는 것
    - 장점 : 하나의 자식 프로세스에서 문제가 발생해도 영향이 전파되지 않음
    - 단점 : 잦은 Context Switching으로 인한 오버헤드가 발생할 수 있고, 프로세스 사이 통신이 어려움(IPC)

    Multi-Thread : 프로그램을 여러개의 스레드로 구성하고 각 스레드가 하나의 작업(task)를 처리하는 것
    - 장점 : 시스템 자원 효율성 증가, 처리 비용 감소, 자원 공유
    - 단점 : 하나의 스레드에 문제가 생기면 전체 프로세스에 영향이 감, 자원 공유로 인한 동기화 문제, 디버깅이 까다로움
    `,
  },
  {
    importance: "5",
    question: "Stack과 Queue의 차이에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "Map과 Set의 차이점을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "라이브러리와 프레임워크의 차이점을 설명해주세요.",
    answer: ``,
  },
];

inerview.JavaScript = [
  {
    importance: "5",
    question: "sync와 async의 차이점을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "blocking과 non-blocking의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "콜백 함수에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "콜백 지옥을 해결하는 방법을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "promise와 async, await의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "map과 foreach의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "var, let, const의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "함수 선언형과 함수 표현식의 차이를 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "호이스팅에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "이벤트 버블링과 이벤트 캡처링에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "이벤트 전파와 이벤트 위임에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "클로져에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "렉시컬 환경에 대해 설명해주세요.",
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
    question: "스코프와 스코프체인에 대해 설명해주세요.",
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
    answer: ``,
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

inerview.etc = [
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
