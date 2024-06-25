function SetTimeoutTest() {
    setTimeout(() => {
        print(count);
     }, 2000);
 
     function print(fx) {
         console.log(4);
         fx();
     }
 
     function count() {
         console.log(1);
         console.log(2);
         console.log(3);
     }
 
     console.log(1);
     console.log(2);
     console.log(3);
 
     /**
      * 콜백함수
      */
     function test(fx) {
         console.log("test 함수 호출");
         fx();
     }
 
     function add() {
         console.log("add 함수 호출");
     }
 
     test(add); // 결과가 아니라 add함수 주소 자체를 넣어줌
 
     return (
         <>
 
         </>
     )
}
export default SetTimeoutTest;