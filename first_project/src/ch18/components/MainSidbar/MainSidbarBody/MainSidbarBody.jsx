/** @jsxImportSource @emotion/react */
import { Children } from 'react';
import * as s from './style';

function MainSidbarBody({children}) {
    return (
        <div css={s.layout}>
            {children}
        </div>
    );
}

export default MainSidbarBody;