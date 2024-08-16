import React from 'react';
// import Component01 from './Component01';
//import Component02 from './Component02';
//import Component03 from './Component03';
import Component04 from './Component04';
const Container = () => {
    // const name = "최윤식";
    // const age = 20;
    // const emptyFunction = () => {};

    const age = 45;
    const style = {color:"blue"};


    return (
        <div>
            {/* <Component01 name={name} age={age} emptyFunction={emptyFunction} /> */}
            {/* <Component02>
                <p>자식 태그</p>
            </Component02> */}
            {/* <Component03>
                <p style={style}>Hi</p>
            </Component03> */}
            <Component04 age={age} style={style} />
        </div>
    );
};

export default Container;