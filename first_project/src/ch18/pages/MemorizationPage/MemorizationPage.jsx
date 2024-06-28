import React, { useCallback, useMemo, useState } from 'react';

function MemorizationPage(props) {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [num, setNum] = useState(0);

    const a = useMemo(() => { // useMemmo()는 리턴으로 값. num이 바꼈을 때만 새로 연산
        //console.log(num);
        return num + 10;
    }, [num]); // []없으면 매번 다시 실행 dependency가 없으면 한번만 실행

    // const b = num + 20 // 새로 렌더링 될 때 마다 계속 연산됨

    const handleChange = useCallback((e) => { // useCallback()은 리턴으로 함수. // 메모리에 고정되어있음
        console.log(value2);
        setValue(e.target.value);
    }, [value2]);

    const handleChange2 = (e) => {
        setValue2(e.target.value);
        console.log("a");
    }

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    }, [value]);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default MemorizationPage;