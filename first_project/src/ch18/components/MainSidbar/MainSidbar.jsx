/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import MainSidbarBody from './MainSidbarBody/MainSidbarBody';
import MainSidbarHearder from './MainSidbarHeader/MainSidbarHearder';
import * as s from './style';
import { mainSidbarShowAtom } from '../../atoms/mainSidbarShow';

function MainSidbar() {
    const [mainsidbarShow] = useRecoilState(mainSidbarShowAtom);
    return (
        <div css={s.layout(mainsidbarShow)}>
            <MainSidbarHearder />
            <MainSidbarBody />
        </div>
    );
}

export default MainSidbar;