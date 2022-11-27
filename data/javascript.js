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
    answer: `ES6(ECMAScript 6)는 ECMAScript 2015라고도 불리는데, 자바스크립트이 두번째 주요 개정판 입니다.

    1. let & const 키워드
    - 함수 스코프를 가지는 var 키워드와는 다르게 블록 스코프를 가짐
    - 재선언 불가
    - const의 경우 재할당 불가

    2. 화살표 함수(Arrow function)
    - 간결한 표현
    - this를 가지고 있지 않아 객체 메서드로 사용하기 부적합
    - 호이스팅 되지 않음

    3. for...of 반복문
    - 반복 가능한 객체(Array, String, Map, Set 등등)의 값을 순회
    - Object에 for...of 문법 사용 시 TypeError 발생
    - value를 리턴

    4. for...in 반복문
    - 객체의 속성을 순회
    - key를 리턴 (배열의 경우 index)

    5. 클래스(class)
    - class 키워드로 클래스 생성
    - constructor로 생성자 정의
    - this로 인스턴스 객체에 접근 가능
    - new로 인스턴스 객체 생성 가능
    - 호이스팅 X

    6. 프로미스(Promise)
    - 비동기 처리를 위한 패턴

    7. 템플릿 리터럴(Template literals)
    - 문자열 내 표현식을 삽입할 수 있는 리터럴

    8. 기본 매개 변수(Default parameters)
    - 함수의 매개변수에 기본값 설정 가능

    9. 나머지 매개 변수(Rest parameter)
    - 개수가 정해지지 않은 매개변수들을 배열로 받음

    10. 전개 연산자(Spread operator)
    - 반복 가능한 객체를 전개하여 전달

    11. 구조 분해 할당(Destructuring assignment)
    - 배열이나 객체의 속성을 해체하여 그 값을 별도의 변수에 할당할 수 있는 표현식

    12. 제너레이터(Generator)
    - 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수

    13. import & export(가져오기 및 내보내기)`,
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
    answer: `import와 require는 둘다 외부 파일이나 라이브러리의 코드를 불러오는 역할을 하지만, 다른 문법적 구조를 가지고 있습니다. 또한 하나의 프로그램에서 두 키워드를 동시에 사용할 수 없습니다.

    [require]
    - NodeJS에서 사용되고 있는 CommonJS의 키워드
    - 프로그램의 어느 지점에서나 호출 가능
    - 복수객체 내보내기
    => exports.객체명 = 객체명
    - 단일객체 내보내기
    => module.exports = 객체명

    [import]
    - ES6에서 새롭게 도입된 키워드
    - 필요한 모듈 부분만 선택하여 로드할 수 있기 때문에 require문 보다 성능이 우수하며 메모리 절약
    - 복수객체 내보내기
    => export { 객체명 }
    - 단일객체 내보내기
    => export default`,
  },
  {
    importance: "5",
    question: "npm에 대해 설명해주세요.",
    answer: `Node Package Maneger의 약자로, Node.js에서 상요하는 패키지를 다운 받을 수 있는 프로그램입니다.`,
  },
  {
    importance: "5",
    question: "package.json과 package-lock.json의 역할에 대해 설명해주세요.",
    answer: `[package.json]
    현재 프로젝트에 관한 정보와 패키지 매니저(npm, yarn)을 통해 설치한 모듈들의 의존성을 관리하는 파일입니다.
    
    [package-lock.json]
    package.json에 선언된 패키지가 설치될 때 정확한 version과 dependency가 설치되도록 해줍니다.`,
  },
  {
    importance: "5",
    question: "typescript를 쓰는 이유에 대해 설명해주세요.",
    answer: `타입스크립트란 MS에서 개발하고 관리하는 오픈소스 프로그래밍 언어이며, 자바스크립트의 단점을 해결하기 위해 만들어진 언어입니다. 

    - Type Error 방지(컴파일 단계에서 오류 포착)
    - 명시적인 정적 타입 지정으로 코드 가독성을 높이고 디버깅을 쉽게 할 수 있음
    - 코드 자동 완성 및 가이드
    - class와 interface의 특징을 지원함으로서 객체지향 프로그래밍 환경을 제공`,
  },
  {
    importance: "5",
    question: "null, undefined, undeclared, NaN에 대해 설명해주세요.",
    answer: `null : 사용자가 null값을 변수에 할당한 경우(빈 값이라는 의미)

    undefined : 변수를 선언하고 값을 할당하기 전의 값이며, 변수에 값이 할당되어 있지 않은 상태

    undeclared : 변수가 선언조자 되지 않은 경우

    NaN : "Not a Number"의 약어이며, 컴퓨터에서 숫자로 나타낼 수 없을 때 나타내는 표시`,
  },
  {
    importance: "5",
    question: "자바스크립트 데이터 타입에 대해 설명해주세요.",
    answer: `[원시 타입(primitive data type)]
    - boolean
    - null
    - undefined
    - number
    - string
    - symbol(ES6에서 추가)

    [객체/참조 타입(object/reference type)]
    - object`,
  },
  {
    importance: "5",
    question: "mutable과 immutable에 대해 설명해주세요.",
    answer: `[mutable]
    - 변경 가능한 변수의 유형
    - 참조 타입
    - 해당 데이터 주소를 찾아서 값을 변경함
    mutable methods : pop, push, unshift, shift, splice, fill, reverse, sort 등등
    
    [immutable]
    - 변경이 불가한 변수의 유형
    - 원시 타입
    - 해당 데이터 주소와 별개의 새로운 주소에 값이 할당됨
    immutable methods : concat, filter, find, forEach, includes, indexOf, map, join 등등
    (slice, replace, split 등등 문자열 메서드의 경우 전부 immutable methods)`,
  },
  {
    importance: "5",
    question: "throttle과 debounce에 대해 설명해주세요.",
    answer: `DOM 이벤트를 기반으로 실행하는 JavaScript의 성능을 고려하여 이벤트를 제어 및 제한하는 방법입니다.
    
    throttle : 이벤트를 일정 주기마다 처리하여 이벤트를 제어하는 방식
    
    debounce : 연속적으로 발생하는 이벤트들을 그룹화하여 하나의 이벤트만 실행되도록 처리하는 방식`,
  },
  {
    importance: "5",
    question: "iterable, iterator, generator에 대해 설명해주세요.",
    answer: `[이터러블(iterable)]
    순회 가능한 객체를 의미합니다.

    [이터레이터(iterator)]
    반복을 위해 설계된 특정 인터페이스가 있는 객체이며, {value, done}을 반환하고 next() 메서드를 가집니다.

    [제너레이터(generator)]
    iterator 객체를 반환하며, iterable을 생성하는 함수입니다. 
    generator를 통해서 iterator를 만들 수 있고 함수 안에서 값을 순회할 수 있습니다.
    제너레이터 선언은 함수 선언문에 *(Asterisk)를 붙여 선언합니다.`,
  },
];

export default list;
