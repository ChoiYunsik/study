// 리엑트의 연산
// return ()안에서는 html이기때문에 연산이 안된다.
// 연산을 하기 위해서는 {}중괄호를 묶어줘야한다.
const Jsx02 = () =>{

    const name = "최윤식";

    return(
        <>
        <div>내 이름은 {name}입니다.</div>
        <div>만 나이는 {20-1}</div>
        </>
    )
}

export default Jsx02;