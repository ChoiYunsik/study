import React from 'react';

const Component01 = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.name}</p>
            {props.age}
            
        </div>
    );
};

export default Component01;