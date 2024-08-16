import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
    const age = 20;

    const isAdult =  age >= 19;
    const isEven = age%2 === 0;

    const enter = isAdult ? <PassComponent /> : <NotPassComponent/>;
    const win = isEven ? <LuckyComponent/> : <UnLuckyComponent/>;

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