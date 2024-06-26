/** @jsxImportSource @emotion/react */
import MainSidbarBody from './MainSidbarBody/MainSidbarBody';
import MainSidbarHearder from './MainSidbarHeader/MainSidbarHearder';
import * as s from './style';

function MainSidbar({isMainSidbarShow, setMainSidbarShow}) {
    return (
        <div css ={s.layout(isMainSidbarShow)}>
            <MainSidbarHearder setMainSidbarShow={setMainSidbarShow}/>
            <MainSidbarBody/>
        </div>
    );
}

export default MainSidbar;