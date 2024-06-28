import React from 'react';
import "./App.css";

function App(props) {

    return (
        <>
            <div className="container">
                {/* <h2>회원정보 수정</h2> */}
                <div className="profile">회원정보 수정</div>
                <div className="sub-container">
                    <div className="input-group">
                        <div className="input-group-label">이름:</div>
                        <input type="text" />
                    </div>
                    <div className="input-group">
                        <div className="input-group-label">이메일:</div>
                        <input type="text" />
                    </div>
                    <div className="input-group">
                        <div className="input-group-label">비밀번호:</div>
                        <input type="text" />
                    </div>
                    <button>저장</button>
                </div>

            </div >
        </>
    );
}

export default App;