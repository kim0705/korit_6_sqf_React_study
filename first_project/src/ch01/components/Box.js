function Box({ name, isShow, children, ageJsx }) {

    const result = true && 10;

    return <div>
        <h1>{name}</h1>
        {children}
        {ageJsx}
        {1 + 1}
        {result}
        {isShow && <h3>안녕하세요</h3>}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
    </div>
}

export default Box;