/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import * as s from './style';
import RouteStudyPage from '../../pages/RouteStudyPage/RouteStudyPage';
import HomePage from '../../pages/Homepage/HomePage';
import ParamsStudyPage from '../../pages/ParamsStudyPage/ParamsStudyPage';
import SearchParamsStudyPage from '../../pages/SearchParamsStudyPage/SearchParamsStudyPage';
import CustomHookPage from '../../pages/CustomHookPage/CustomHookPage';
import MemorizationPage from '../../pages/MemorizationPage/MemorizationPage';

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/routestudy/*" element={<RouteStudyPage />}/> 
                <Route path="/params/:name/*" element={<ParamsStudyPage />}></Route> 
                <Route path="/params/:name/*" element={<ParamsStudyPage />}></Route> 
                <Route path="/customhook/:id" element={<CustomHookPage />}></Route> 
                <Route path="/memorization" element={<MemorizationPage />}></Route> 
            </Routes>
        </div>
    );
}

export default MainBody;