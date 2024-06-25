function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태
     * 3. 거부 -> 연산을 실패했을 때의 상태
     */

    function p1(name) {
        return new Promise((resolve, reject) => { // 객체 생성 (resolve:이행 reject:거절)
            // 대기(동기)
            console.log(name + "프로미스 생성"); // 이게 출력되는 상황이 대기 상태
            if (!name) {
                reject("오류!!!");
            }
            resolve(name); // resolve가 호출이 되면(이행) then이 실행됨
        });
    }

    // const p1 = new Promise((resolve, reject) => { // 객체 생성
    //     console.log("프로미스 생성")
    // }); 

    async function p2() { //async자체가 프로미스 생성
        let a = null;
        try {
            // p4().then(r => a = r); // then은 비동기 return은 동기처리 이기 때문에 a에 null
            a = await p4(); // p4의 return값을 가져와서 동기처리가 됨 
            // await은 async안에서만 사용할 수 있고, Promise 객체에만 사용가능
            // await setTimeout(() => {}, 2000); setTimeout은 비동기이지만 Promise가 아니기 때문에 await 사용 불가
            await p5();
        } catch (error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }

    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3"); // 콜백함수의 return
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!");
    }

    const handleClick = () => {
        p1("p1").then(result => { // resolve에서 보낸 데이터가 result로 받음 // then 자체가 또 다른 대기 상태
            console.log("이행");
            console.log(result);
            if (true) {
                throw new Error("거부!!!"); // 거부(reject)
            }
            return "두번째 then"; // 이행(resolve)

        })
            .then(result => { // 비동기 안에서의 동기(then은 순서대로 작동)
                console.log(result); // result는 "두번째 then"의 값
            }).catch(error => {
                // console.log(error);
            });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            });
        }, 2000);
        // p3().then(r => console.log(r));
    }

    return (
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
    );
}

export default PromiseTest;