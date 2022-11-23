const list = [
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

export default list;
