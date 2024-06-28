import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudyPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    // const values = searchParams.values();
    // console.log(values.next());
    // console.log(values.next());

    console.log(searchParams.get("a")); // key가 a인 value를 가져옴
    console.log(searchParams.get("b"));

    const handleClick = () => {
    const keys = searchParams.keys();
    let newParams = {};
    
    for (let i = 0; i < searchParams.size; i++) {
        const key = keys.next().value;
        const value = searchParams.get(key);
        newParams = {
            ...newParams,
            [key]: value
        }
    }
    setSearchParams({...newParams, c: 30 }); // 쿼리에 c=30 추가
}

return (
    <div>
        <h1>SearchParams</h1>
        <button onClick={handleClick}>c=30추가</button>
    </div>
);
}

export default SearchParamsStudyPage;