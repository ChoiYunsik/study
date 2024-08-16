import React from 'react';

// 부모에게 나이를 받아서
// 부모의 나이가 홀수면 자식의 글자를 blue 색깔로 만들기

const Component04 = ({age}) => {
    //console.log(props)
    const isOdd = age %2 == 1;
    return (
        <>
            {isOdd ? (<p style={{color:"blue"}}>나 자식😁</p>): (<p style={{color:"red"}}>나 자식😁</p>)}
        </>
    );
};

export default Component04;