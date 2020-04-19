import React from 'react';
import './Person.css';
const person =(props)=>{

    const style={
        '@media (minWidth : 500px)' :{
          width : '450px'
        }
    }

    return (
        <div className="Person" style={style}>
        <p onClick={props.click}>I am {props.name} , i am {props.age} year old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
    
};

export default person;