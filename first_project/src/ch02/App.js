import { useState } from "react";

function App() {
    const [number, setNumber] = useState(100); // useState(): 리턴이 배열
    const [name, setName] = useState(null);

    const [test, testPrint] =
        [100, function () { console.log("test함수 호출") }];

    testPrint();

    console.log(number);

    if (number === 100) {
        setTimeout(() => setNumber(200), 2000); // 2초 후에 상태 변화
        // setNumber(200); // 상태 변화 > 상태 변화 때 함수 재호출(재랜더링)
        // 재렌더링 시점에는 상태 초기화는 일어나지 않는다.
        // if문이 끝나고 return이 실행되는데 "number 상태 확인"이 도중에 실행됨(비동기 처리)
    }

    if (number === 200) {
        setNumber(300); // userState의 setter는 비동기
        console.log(number); // 300을 넣는 시간 보다 출력시간이 빠르기 때문에 200이 출력
    }

    if (name === null) {
        setName("김준일");
    }
    console.log(name);

    return <>
        <h1>number 상태 확인</h1>
        <h2>{number}</h2>
    </>
}

export default App;