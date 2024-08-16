import React from 'react';
// JSX는 if문을 사용할 수 없기 대문에 삼항 연산자를 지원한다.
// return () 안에서만 사용할 수 없다.
// 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
// 조건식 && 참일 때 랜더링할 JSX, 거짓이면 아무것도 출력하지 않는다.
// && 연산자의 앞의 조건식이 false이면 뒤를 실행하지 않으며, 
// false라는 값은 랜더링 되지 않는다.

const Jsx04 = () => {
    // 앞의 값이 false일 때 || 뒤에 값이 기본값

    const name = undefined || "최윤식";

    const login = false;
    const guest = true;
    if(login){
        console.log("if문 사용가능")
    }
    return (
        // return () 안에서 if문을 사용할 수 없다.
        // if문 대신에 삼항연산자를 지원한다.
        <div>
            {login && guest && (<div>비회원님 환영합니다.</div>)}

           {login ? (<div>{name}님 환영합니다.</div>) : (<div>비회원 로그인</div>)}
            
        </div>
    );
};

export default Jsx04;