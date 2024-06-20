import { useRef, useState } from "react";

function App() {

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

const [ userList, setUserList ] = ([]);

const [inputValue, setInputValue] = useState("");
const [names, setNames] = useState([]);

const [user, setUser] = useState({ ...emptyUser });
const [inputData, setInputData] = useState({ ...emptyUser });


const handleInputKeyDown = (e) => {
    if (e.keyCode === 13) {
        setNames(names => [...names, inputValue]);
        setInputValue("");
    }
}

const handleKeyDown = (e) => {

    if (e.keyCode === 13) {
        switch (e.target.name) {
            case "username":
                inputRef.password.current.focus();
                break;
            case "password":
                inputRef.name.current.focus();
                break;
            case "name":
                inputRef.username.current.focus();
                break;
            default:
        }
    }
}
return <>
    {/* 1. 입력후에 엔터 입력하면 다음 input 으로 포커스 이동
    2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 
        그리고 input value 초기화 */}

    <input name="username" placeholder="사용자명" onKeyDown={handleKeyDown} ref={inputRef.username} />
    <input name="password" placeholder="비밀번호" onKeyDown={handleKeyDown} ref={inputRef.password} />
    <input name="name" placeholder="이름" onKeyDown={handleInputKeyDown} ref={inputRef.name} />

    {/* 3. tbody -> tr묶음을 userList에서 map을 통해 렌더링 
         4. table 디자인 -> border: 1px solid #dbdbdb*/}
    <tabel>
        <thead>
            <tr>
                <th>index</th>
                <th>username</th>
                <th>password</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                

            </tr>
        </tbody>

    </tabel>
</>
}

export default App;