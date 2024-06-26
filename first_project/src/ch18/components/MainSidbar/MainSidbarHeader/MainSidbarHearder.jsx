/** @jsxImportSource @emotion/react */
import { FaBars, FaBook } from 'react-icons/fa';
import * as s from './style';
import MainContainer from '../../MainContainer/MainContainer';

function MainSidbarHearder({ setMainSidbarShow }) {

    const handleMainMenuToggleClick = () => {
        setMainSidbarShow(false);
    }
    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaBook />
                        <span>수업자료</span>
                    </h1>
                    <button
                        css={s.menuToggleButton}
                        onClick={handleMainMenuToggleClick}>
                        <FaBars />
                    </button>
                </div>
            </MainContainer>
        </div>
    );
}

export default MainSidbarHearder;