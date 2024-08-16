
import React from 'react';

const Jsx05 = () => {
    const age = 15;
    const [pass,notPass,lucky, unLucky] = ["입장 가능","입장 불가","당첨","꽝"]
    
    const passComponent = (<div>{pass}</div>);
    const notPassComponent = (<div>{notPass}</div>);
    const luckyComponent = (<div>{lucky}</div>);
    const unLuckyComponent = (<div>{unLucky}</div>);

    const isAdult =  age >= 19;
    const isEven = age%2 === 0;

    const enter = isAdult ? passComponent : notPassComponent;
    const win = isEven ? luckyComponent : unLuckyComponent;

    return (
        <div>
            나이 : {age}
            {enter}
            {win}
            
        </div>
    );
};

export default Jsx05;
//export {Jsx05, Jsx01};