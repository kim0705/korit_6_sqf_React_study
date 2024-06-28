import { useInput } from '../../hooks/useInput';

function CustomHookPage(props) {
    const usernameInput = useInput("test",20);
    const passwordInput = useInput("",20);
    return (
        <div>
            <input type="text" onChange={usernameInput.onChange} value={usernameInput.value} />
            <input type="password" onChange={passwordInput.onChange} value={passwordInput.value} />
        </div>
    );
}

export default CustomHookPage;