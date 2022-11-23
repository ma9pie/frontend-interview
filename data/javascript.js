const list = [
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
    question: "메서드 체이닝에 대해 설명해주세요.",
    answer: `자기 자신을 반환하는 함수를 연결하여 호출하는 것을 메서드 체이닝이라고 합니다. 
    코드가 간략해지는 장점이 있지만 에러 발생 시 어느부분에서 에러가 발생했는지 알기 어렵다는 단점이 있습니다.`,
  },
  {
    importance: "5",
    question: "일반 함수와 화살표 함수의 차이",
    answer: `[일반 함수]
    - 함수 호출방식에 따라 this에 바인딩할 객체가 동적으로 결정됨
    - new 키워드를 통해 constructor 함수로 사용 가능
    - 함수 실행시 암묵적으로 arguments 변수가 전달되어 사용 가능

    [화살표 함수]
    화살표 함수는 ES6부터 도입된 함수로 function 키워드 대신 화살표 => 를 사용해 좀 더 간략하게 함수를 정의할 수 있는 방식입니다.
    - prototype property가 없기 때문에 new 키워드를 사용하여 constructor 함수로 사용할 수 없음
    - arguments 객체를 생성하지 않음
    - 화살표 함수의 this는 언제나 상위 스코프의 this(Lexical this)를 가리키며, this에 바인딩 할 객체가 정적으로 결정됨`,
  },
  {
    importance: "5",
    question: "this의 의미를 설명해주세요.",
    answer: `this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이며, 함수의 호출 방식에 따라 특정 객체를 바인딩하게 됩니다.

    1. 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스와 바인딩 됩니다.
    2. Call, Apply, Bind 메소드 사용 시, 함수의 첫 번째 인수로 전달하는 객체에 바인딩됩니다.
    3. Object.method 형태와 같이 객체 내에서 호출할 경우, this는 해당 객체와 바인딩됩니다.
    4. 위 3가지를 제외한 일반 함수 호출의 경우 this는 전역 객체와 바인딩 됩니다.
    5. 화살표 함수 내에서 this가 사용될 경우, this는 상위 스코프의 this와 바인딩 됩니다.`,
  },
  {
    importance: "5",
    question: "함수 선언형과 함수 표현식의 차이를 설명해주세요.",
    answer: `[함수 선언식]
    function 함수명() {코드}
    - 코드가 실행되기전 로드
    - 호이스팅 됨

    [함수 표현식]
    const 함수명 = function () {코드}
    - 인터프리터가 해당 코드줄을 읽을 때 로드
    - 호이스팅되지않고 정의된 범위에서 로컬 변수의 복사본을 유지할 수 있음
    - 클로져나 콜백으로 사용 가능`,
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
    answer: `클로져란, 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때도 그 스코프에 접근할 수 있는 함수를 의미합니다. 
    
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
    question: "스코프와 스코프 체인에 대해 설명해주세요.",
    answer: `[스코프]
    스코프란 변수(식별자)에 접근할 수 있는 유효한 범위를 뜻합니다.

    1.전역 스코프(Global scope)
    - 코드 어디에서든지 접근 가능
    
    2.함수 스코프(Local scope)
    - 함수 내에서만 유효한 범위를 갖게 하는 스코프
    - 전역 스코프완 반대되는 개념으로 지역 스코프(Local scope)라고도 불림

    3.블록 스코프(Black scope)
    - 블록단위{} 내에서만 유효한 범위를 갖게 하는 스코프
    
    [스코프 체인]
    스코프 체인이란, 현재 스코프에서 식별자를 검색할 때 상위 스코프를 연쇄적으로 찾아나가는 방식을 의미합니다.
    변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 해당 변수를 참조하는 코드의 스코프부터 상위 스코프 방향으로 이동하며 선언된 변수를 검색합니다.`,
  },
  {
    importance: "5",
    question: "실행 컨텍스트에 대해 설명해주세요.",
    answer: `실행 컨텍스트(Execution Context)는 실행 가능한 코드가 실행되기 위해서 필요한 환경을 의미합니다.
    실행 컨텍스트는 전역 컨텍스트와 함수 컨텍스트가 존재하는데, 전역 컨텍스트 생성 후 함수가 호출될 때마다 함수 컨텍스트가 생성되고, 컨텍스트 생성 시 변수객체, 스코프 체인, this가 생성됩니다. 
    함수에서 사용되는 변수들은 변수 객체안에서 값을 찾고 없다면 스코프체인을 따라 찾습니다.
    함수 실행이 마무리되면 해당 컨텍스트는 사라지고, 페이지가 종료되면 전역 컨텍스트도 사라지게 됩니다.`,
  },
  {
    importance: "5",
    question: "프로토타입과 프로토타입 체인에 대해 설명해주세요.",
    answer: `[프로토타입]
    자바스크립트의 모든 객체는 프로토타입(prototype)이라는 객체를 가지고 있는데, 모든 객체는 그들의 프로토타입으로부터 property와 method를 상속받습니다.
    
    [프로토타입 체인]
    자바스크립트는 특정 객체의 property나 method에 접근하려고 할 때, 해당 property나 method가 없을 시 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 property나 method를 차례대로 검색합니다. 이를 프로토타입 체인(prototype chain)이라고 합니다.`,
  },
  {
    importance: "5",
    question: "깊은복사와 얕은복사의 차이점을 설명해주세요.",
    answer: `깊은복사의 경우 새로운 메모리 공간을 확보하여 완전히 복사하는 것을 의미합니다.
    반면, 얕은복사의 경우 참조 타입 데이터가 저장한 메모리 주소값을 복사하는 것을 의미합니다.
    따라서 얕은복사 후 원시값과 복사된 값 모두 똑같은 참조를 가리키고 있기 때문에 복사된 값을 수정할 시 원시값에 영향을 끼치게 되므로 주의해야 합니다.`,
  },
  {
    importance: "5",
    question: "구조 분해 할당(destructuring) 대해 설명해주세요.",
    answer: `객체, 배열의 값을 추출해서 변수에 바로 할당할 수 있는 ES6에서 도입된 편리한 문법입니다.`,
  },
  {
    importance: "5",
    question: "spread 문법과 rest 문법의 차이에 대해 설명해주세요.",
    answer: `spread 문법은 객체나 배열의 데이터를 풀어놓는 역할을 하고 rest 문법은 spread 문법과 반대로 전달받은 데이터를 배열 또는 객체 안에 채워넣는 역할을 합니다.`,
  },
  {
    importance: "5",
    question: "ES6에서 생긴 큰 변화들에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "Ajax에 대해 설명해주세요.",
    answer: `Ajax란 Asynchronous Javascript And XML의 약자로,
     브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능입니다.`,
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
  {
    importance: "5",
    question: "mutable과 immutable에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "throttle과 debounce에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "iterator와 generator에 대해 설명해주세요.",
    answer: ``,
  },
  {
    importance: "5",
    question: "이벤트 루프(Event loop)에 대해 설명해주세요.",
    answer: ``,
  },
];

export default list;
