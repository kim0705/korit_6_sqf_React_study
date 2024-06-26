import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Link, Route, Routes } from 'react-router-dom';

function RouteStudySubPage1(props) {
    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
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