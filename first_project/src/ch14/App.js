import { useState } from "react";

function App() {

    const [imgSrc, setImgSrc] = useState("");

    const handleLoadImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file"); // input type = text
        fileElement.setAttribute("multiple", true); // 여러개 선택
        fileElement.click();
        // console.log(fileElement.files);

        fileElement.onchange = (e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader(); // fileReader(): file의 데이터를 읽어들임

            fileReader.onload = (e) => {
                setImgSrc(e.target.result); // result에 file URL이 들어감
            }

            fileReader.readAsDataURL(file); // file의 URL

        }
    }

    return (
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            <input type="file" multiple={true} />
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
    );
}
export default App;