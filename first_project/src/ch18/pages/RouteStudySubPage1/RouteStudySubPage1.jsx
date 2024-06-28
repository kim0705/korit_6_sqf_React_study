import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname); // 경로 출력
    console.log(location.pathname.lastIndexOf("/")); // 경로 뒤에서 부터 / 찾기
    const index = location.pathname.lastIndexOf("/") 
    console.log(location.pathname.substring(index)); 

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true}); //replace: true 전체 새로고침
        // window.location.href = "https://naver.com" => replace:false
        // window.location.replace("https://naver.com") => replace:true 뒤로가기 하면 최초로 돌아감(히스토리 없음)
    }

    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
            <button onClick={handleAgeClick}>나이</button>
            <div>
                <Routes>
                    <Route path="/name" element={<div>이름</div>} />
                    <Route path="/age" element={<div>나이</div>} />
                    <Route path="/address" element={<div>주소</div>} />
                </Routes>
            </div>
        </div>
    );
}

export default RouteStudySubPage1;