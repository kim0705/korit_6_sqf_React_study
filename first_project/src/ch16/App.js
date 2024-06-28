import { useState } from "react";
import "./App.css";

function App() {
    const [imgSrc, setImgSrc] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            };
            fileReader.readAsDataURL(file);
        };
    };

    const handleSaveClick = () => {
        const profileData = {
            imgSrc,
            name,
            email
        };
        localStorage.setItem("profile", JSON.stringify(profileData));
        alert("저장 완료!!");
    };

    return (
        <>
            <div className="container">
                <div className="profile">프로필</div>
                <div className="img-box" onClick={handleImgClick}>
                    <img src={imgSrc} alt="" />
                </div>
                <div className="name-tag">이름</div>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="email-tag">이메일</div>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSaveClick}>저장</button>
            </div>
        </>
    );
}

export default App;
