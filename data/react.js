const list = [
  {
    importance: "5",
    question: "DOM에 대해 설명해 주세요.",
    answer: `DOM이란 Document Object Model의 약자로, HTML 문서를 구조화하여 나타낸 것을 의미합니다.
    또한 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 문서 구조, 스타일, 내용들을 변경할 수 있게 도와주는 인터페이스 역할을 합니다.`,
  },
  {
    importance: "5",
    question: "Virtual DOM에 대해 설명해 주세요.",
    answer: `Virtual DOM이란, DOM과 유사한 객체를 메모리에 올려놓고, 변경 사항이 생기면 변경된 부분만 업데이트를 해서 반응성이 빠른 웹을 구현할 수 있게 해주는 추상화된 DOM을 뜻합니다.

    결론적으로 DOM을 반복적으로 직접 조작하게 되면 그만큼 브라우저가 렌더링을 자주 하게 되고 PC자원을 많이 소모하게 되는 문제를 해결하기 위한 기술입니다.`,
  },
  {
    importance: "5",
    question: "클래스형 컴포넌트와 함수형 컴포넌트의 차이를 설명해 주세요.",
    answer: `[클래스형 컴포넌트]
    - LifeCycle API와 state 기능 사용 가능
    - 임의의 메서드 정의 가능
   
    [함수형 컴포넌트]
    - React v16.8 이후 hook을 통해 LifeCycle API와 state 기능 사용 가능
    - 클래스형 컴포넌트보다 선언하기 간편
    - 클래스형 컴포넌트보다 메모리 자원을 덜 사용
    - 빌드 파일의 크기가 클래스형 컴포넌트보다 더 작음
   
    이외에도 기본 구조, state사용법, props 전달받는 법, LifeCycle method 등등 여러 가지 차이점이 있습니다.`,
  },
  {
    importance: "5",
    question: "React의 장점과 단점을 설명해 주세요.",
    answer: `[장점]
    - Virtual DOM 사용으로 빠른 렌더링 가능
    - UI 수정과 재사용성이 높으며, 유지보수 용이
    - 공식문서 및 자료가 많으며 생태계가 넓음
    - 뛰어난 Garbage Collection, 메모리 관리, 성능을 가짐
    - CSR, SSR 둘 다 지원
    - 단방향 데이터 바인딩을 통한 디버깅이 용이하고 안정성이 높음
    - 리액트는 라이브러리이기 때문에 다른 프레임워크나 라이브러리와 혼용 가능
   
    [단점]
    - IE8 이하 버전은 지원하지 않음
    - 진입장벽이 낮지는 않음
    - view만 담당하기 때문에 라우팅, ajax처리, 상태관리 등등은 직접 구현해야 함`,
  },
  {
    importance: "5",
    question: "JSX에 대해 설명해 주세요.",
    answer: `JSX는 JavaScript XML(eXtensible Markup Language)의 약자로, HTML에 요소에 유효한 자바스크립트 객체를 내장할 수 있는 자바스크립트 확장입니다.`,
  },
  {
    importance: "5",
    question: "브라우저는 JSX 파일을 읽을 수 있나요?",
    answer: `브라우저는 JSX 파일을 직접 읽을 수는 없습니다.
    JSX 파일을 읽기 위해서는 JSX를 자바스크립트 객체로 변환해야 하며, 그 변환 작업은 바벨과 같은 컴파일러를 통해 이루어집니다.
   
    TMI) 과거에는 JSX 파일 내에서 React를 import를 해야 했는데, 그 이유는 컴파일러를 통해 JSX 코드가 자바스크립트 코드로 변환이 되면 React.createElement()를 호출해야 했고, 정상적인 호출을 위해 React가 스코프 내에 존재해야 했었기 때문입니다.
   
    하지만 2020년 10월 20일에 릴리즈 된 React 17부터는 컴파일 시 React.createElement()로 변환하는 방식이 아닌 컴파일러가 JSX 변환에 필요한 특수한 함수를 자동적으로 import 해오는 방식을 도입했기 때문에 React를 import 하지 않아도 되게 되었습니다.`,
  },
  {
    importance: "5",
    question: "재조정(Reconciliation) 개념에 대해서 설명해 주세요.",
    answer: `상태 변화가 있을 때 새로운 Virtual DOM을 생성하여 현재 DOM과 비교한 후 차이가 있는 곳을 감지하여 실제 DOM에 적용시켜 주는 과정입니다.`,
  },
  {
    importance: "5",
    question: "state와 props의 차이를 설명해 주세요.",
    answer: `[state]
    컴포넌트에서 사용하고 관리할 수 있는 상태값입니다.
    setState 또는 useState로 상태값 변경 시 리렌더링이 일어납니다.

    [props]
    부모 컴포넌트에서 자식 컴포넌트로 상속하는 데이터 값으로 읽기 전용 데이터입니다.`,
  },
  {
    importance: "5",
    question: "자식 컴포넌트에서 props를 변경할 수 있나요?",
    answer: `부모 컴포넌트로 부터 상속받는 props는 읽기 전용 값으로 직접 변경 및 수정은 불가능합니다.
   
    하지만 부모 컴포넌트로 부터 해당 state를 변경하는 setState 함수를 props로 전달받아 해당 함수를 호출하면 props 값을 변경할 수 있습니다.`,
  },
  {
    importance: "5",
    question: "React Hooks에 대해 설명해 주세요.",
    answer: `React Hooks는 v16.8에 도입된 기능이며, 기존 클래스형 컴포넌트에서만 가능했던 상태 관리, 라이프 사이클 기능 등을 함수형 컴포넌트에서도 사용이 가능하게 되었습니다.
   
    [기본 Hook]
    - useState : 컴포넌트의 state(상태)를 관리
    - useEffect : 컴포넌트가 렌더링 될 때마다 특정 작업(side effect)을 실행할 수 있으며, 클래스형 컴포넌트에서 사용하던 Lifecycle Method를 대체하는 hook
    - useContext : 전역에서 사용할 수 있는 context를 가져오는 hook

    [추가 Hook]
    - useReducer : 여러 개의 상태 관리를 할 때 사용하며, 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있는 hook
    - useRef : ref 객체를 생성하고, 특정 DOM에 접근하여 DOM 조작을 가능하게 하는 hook
    - forwardRef : 부모 컴포넌트에서 자식 컴포넌트로 ref를 전달하는 hook
    - useImperativeHandle : 상위 컴포넌트에서 하위컴포넌트의 함수를 호출하거나 값에 접근할 때 사용하는 hook
    - useMemo : 메모이제이션된 연산 값을 반환
    - useCallback : 메모이제이션된 콜백을 반환
    - useLayoutEffect : useEffect와 비슷하지만, DOM이 화면에 그려지고 호출되는 useEffect와는 달리 DOM이 화면에 그려지기 전에 호출되는 hook
    - useDebugValue : 사용자 지정 Label을 hook에 할당하여 디버깅에 도움을 주는 hook
   
    [React 18]
    - useId : 클라이언트와 서버 측 hydration의 mismatch를 피하면서 고유 id를 생성하는 hook
    - useTranstion : 특정 상태의 업데이트 우선순위를 낮추어 UI 응답성을 개선
    - useDeferredValue : UI의 일부 업데이트를 연기할 수 있는 hook`,
  },
  {
    importance: "5",
    question: "React Lifecycle에 대해 설명해 주세요.",
    answer: `Lifecycle은 컴포넌트가 생성, 사용, 소멸될 때까지의 생명주기를 뜻하며, mount, update, unmount로 구분됩니다.

    componentDidMount는 컴포넌트가 생성될 때 한 번 호출되며, componentDidUpdate는 컴포넌트의 props 또는 state값이 변경되었을 때, componentWillUnMount는 컴포넌트가 소멸될 때 호출됩니다. 또한 render 메서드는 초기 화면을 그려줄 때와 업데이트 시에 호출됩니다.`,
  },
  {
    importance: "5",
    question: "useState에 대해 설명해 주세요.",
    answer: `React 컴포넌트에서 상태관리를 위해 사용되는 hook으로 useState를 통해서 상태값을 업데이트하면 해당 컴포넌트는 리렌더링 됩니다.`,
  },
  {
    importance: "5",
    question: "useEffect에 대해 설명해 주세요.",
    answer: `기존 클래스형 컴포넌트의 Lifecycle method(componentDidMount, componentDidUpdate, componentWillUnmount)을 대체하는 hook으로, 컴포넌트가 마운트, 업데이트, 언마운트될 때 특정 작업을 실행할 수 있습니다.
   
    useEffect(function, dependency)
    1) dependency === []
    => 의존성 배열이 빈배열일 시 컴포넌트가 마운트(componentDidMount)될 때만 function 실행

    2) dependency === [state]
    => 의존성 배열에 state를 추가해 줄 시 해당 state가 업데이트(componentDidUpdate)될 때만 실행

    3) function에 return
    => function에 return 함수를 추가하여 컴포넌트가 언마운트(componentWillUnmount)될 때 특정 로직을 실행 가능`,
  },
  {
    importance: "5",
    question: "useEffect와 useLayoutEffect의 차이 대해 설명해 주세요.",
    answer: `useEffect의 경우 컴포넌트들이 render, paint 된 후에 실행됩니다. 비동기적으로 실행되며, paint 된 후에 실행되므로 useEffect 내부에 DOM에 영향을 주는 코드가 있을 경우 UX적으로 해당 요소가 깜빡이는 현상이 발생하게 됩니다.
   
    useLayoutEffect의 경우 컴포넌트들이 render 된 후 실행되고 그 이후 paint가 됩니다. 동기적으로 실행되며, paint가 되기 전에 실행되기 때문에 DOM을 조작하는 코드가 존재하더라도 UX적으로 해당 요소가 깜빡이는 현상이 발생하지 않습니다.
   
    - useEffect는 DOM이 화면에 그려진 이후 호출됨
    - useLayoutEffect는 DOM이 화면에 그려지기 전에 호출됨`,
  },
  {
    importance: "5",
    question:
      "state를 직접 변경하지 않고 setState를 사용하는 이유를 설명해 주세요.",
    answer: `state는 불변성을 유지해야 하기 때문에 setState를 사용하여 변경해야 하며, state를 직접 수정할 경우 컴포넌트에서 render 메서드를 호출하지 않아 화면에 변경된 값이 렌더링 되지 않습니다.`,
  },
  {
    importance: "5",
    question: "React rendering 성능을 향상하기 위한 방법들을 설명해 주세요.",
    answer: `- 크롬 확장 프로그램 LightHouse를 통한 성능 분석
    - 객체 타입의 state는 최대한 분할하여 선언
    - React.memo를 통한 컴포넌트 memoization
    - useMemo를 통한 함수 반환 연산값 재사용
    - useCallback을 통한 함수 재생성 및 리렌더링 방지
    - 가상화된 리스트(windowing)
    - event, onChange에 throttle, debounce 적용
    - 이미지 사이즈 최적화
    - Lazy loading, code splitting
    - react-query로 API data 캐싱
    - css reflow, repaint 최소화`,
  },
  {
    importance: "5",
    question:
      "Props drilling의 개념과 Props drilling을 피하는 방법에 대해 설명해 주세요.",
    answer: `Props drilling은 상위 컴포넌트에서 하위 컴포넌트들로 props를 내려주면서 깊게 중첩된 하위 컴포넌트로 props를 전달하는 방식을 의미합니다.
   
    Props drilling을 남발할 경우 구조가 복잡해지고 유지보수가 어려워지며, 예기치 못한 오류를 발생시킬 수 있습니다.
   
     redux, recoil, mobx와 같은 전역 상태 관리 라이브러리를 사용하거나 Context API를 통해 props를 전달하여 Props drilling을 피할 수 있습니다.`,
  },
  {
    importance: "5",
    question: "전역 상태 관리 방법에 대해 설명해 주세요.",
    answer: `리액트 전역 상태 관리는 contextAPI를 통한 방법 및 Redux, MobX, Rocoil와 같은 상태 관리 라이브러리를 통해 데이터를 관리할 수 있습니다.`,
  },
];

export default list;
