import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidbar from './components/MainSidbar/MainSidbar';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainBody from './components/MainBody/MainBody';

function App(props) {
    const [isMainSidbarShow, setMainSidbarShow] = useState(false);
    return (
        <>
            <Global styles={reset} />
            <MainLayout>
                <MainHeader setMainSidbarShow={setMainSidbarShow} />
                <MainBody />
                <MainSidbar
                    isMainSidbarShow={isMainSidbarShow}
                    setMainSidbarShow={setMainSidbarShow}
                />
            </MainLayout>
        </>
    );
}

export default App;