import { useEffect, useState } from "react";
import "./App.css";

function App() {

    const [imgSrc, setImgSrc] = useState("");

    const [name, setName] = useState("");
    const [name, setName] = useState("");

    const handleImgClick = (e) => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setImgSrc(e.target.value);
            }
            fileReader.readAsDataURL(file);
        }
    }

    useEffect(() => {

    });

    

    return (
        <>
            <div className="container">
                <div className="profile">프로필</div>
                <div className="img-box" onClick={handleImgClick}>
                    <img src={imgSrc} alt="" />
                </div>
                <div className="name-tag">이름</div>
                <input type="text" name="name" />
                <div className="email-tag">이메일</div>
                <input type="text" name="email" />
                <button>저장</button>
            </div>
        </>
    )
}
export default App;