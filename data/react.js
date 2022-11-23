const list = [
  {
    importance: "5",
    question: "DOM에 대해 설명해주세요.",
    answer: `DOM이란 Document Object Model의 약자로, HTML 문서를 구조화하여 나타낸 것을 의미합니다. 
    또한 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 문서 구조, 스타일, 내용들을 변경할 수 있게 도와주는 인터페이스 역할을 합니다.`,
  },
  {
    importance: "5",
    question: "Virtual DOM에 대해 설명해주세요.",
    answer: `Virtual DOM이란, DOM과 유사한 객체를 메모리에 올려놓고, 변경 사항이 생기면 변경된 부분만 업데이트를 해서 반응성이 빠른 웹을 구현할 수 있게 해주는 추상화된 DOM을 뜻합니다.

    결론적으로 DOM을 반복적으로 직접조작하게 되면 그 만큼 브라우저가 렌더링을 자주하게 되고 PC자원을 많이 소모하게 되는 문제를 해결하기 위한 기술입니다.`,
  },
  {
    importance: "5",
    question: "클래스형 컴포넌트와 함수형 컴포넌트의 차이를 설명해주세요.",
    answer: `[클래스형 컴포넌트]
    - LifeCycle API와 state 기능 사용 가능
    - 임의의 메서드 정의 가능
    
    [함수형 컴포넌트]
    - React v16.8 이후 hook을 통해 LifeCycle API와 state 기능 사용 가능
    - 클래스형 컴포넌트보다 선언하기 간편
    - 클래스형 컴포넌트보다 메모리 자원을 덜 사용
    - 빌드 파일의 크기가 클래스형 컴포넌트보다 더 작음
    
    이외에도 기본 구조, state사용법, props 전달받는법, LifeCycle method 등등 여러가지 차이점이 있습니다.`,
  },
  {
    importance: "5",
    question: "React의 장점과 단점을 설명해주세요.",
    answer: `[장점]
    - Virtual DOM 사용으로 빠른 렌더링 가능
    - UI 수정과 재사용성이 높으며, 유지보수 용이
    - 공식문서 및 자료가 많으며 생태계가 넓음
    - 뛰어난 Garbage Collection, 메모리 관리, 성능을 가짐
    - CSR, SSR 둘다 지원
    - 단방향 데이터 바인딩을 통한 디버깅이 용이하고 안정성이 높음
    - 리액트는 라이브러리이기 때문에 다른 프레임워크나 라이브러리와 혼용 가능
    
    [단점]
    - IE8 이하 버전은 지원하지 않음
    - 진입장벽이 낮지는 않음
    - view만 담당하기 때문에 라우팅, ajax처리, 상태관리 등등은 직접 구현해야 함`,
  },
  {
    importance: "5",
    question: "JSX에 대해 설명해주세요.",
    answer: `JSX는 JavaScript XML(eXtensible Markup Language)의 약자로, HTML에 요소에 유효한 자바스크립트 객체를 내장할 수 있는 자바스크립트 확장입니다.`,
  },
  {
    importance: "5",
    question: "브라우저는 JSX 파일을 읽을 수 있나요?",
    answer: `브라우저는 JSX 파일을 직접 읽을 수는 없습니다. 
    JSX 파일을 읽기 위해서는 JSX를 자바스크립트 객체로 변환해야 하며, 그 변환 작업은 바벨과 같은 컴파일러를 통해 이루어 집니다.
    
    TMI) 과거에는 JSX 파일 내에서 React를 import를 해야 했는데, 그 이유는 컴파일러를 통해 JSX 코드가 자바스크립트 코드로 변환이 되면 React.createElement()를 호출해야했고, 정상적인 호출을 위해 React가 스코프 내에 존재 해야 했었기 때문입니다.
    
    하지만 2020년 10월 20일에 릴리즈된 React 17부터는 컴파일 시 React.createElement()로 변환하는 방식이 아닌 컴파일러가 JSX 변환에 필요한 특수한 함수를 자동적으로 import 해오는 방식을 도입했기 떄문에 React를 import하지 않아도 되게 되었습니다.`,
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
    question: "useState에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "useEffect에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "useCallback에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "useMemo에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "useRef에 대해 설명해주세요.",
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
    question: "React rendering 성능을 향상시키기 위한 방법들을 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "전역 상태 관리 방법에 대해 설명해주세요.",
    answer: ``,
  },
];

export default list;
