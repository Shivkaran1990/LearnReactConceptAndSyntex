import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import styled from 'styled-components';

const StyledButton=styled.button`
background-color: ${props => props.alt ?'red':'green'};
color: white;
font: inherit;
border: 1x solid blue;
padding: 10px;
cursor: pointer;

&:hover{
  background-color: ${props => props.alt ?'salmon':'lightgreen'};
  color: black;
}
`;

class App extends Component {
  state={
    persons:[
      {id :'1' ,name:'Daksh', age : 3},
      {id :'2' ,name:'Sakshi', age : 5},
      {id :'3' ,name:'Rahul', age : 11},
      {id :'4' ,name:'Nandni', age : 7}
    ],
    showPerson:false
  }

  switchNameHandle=(rewname)=>
  {
    //this.state.persons[0].name='Shivkaran';
    //console.log('clikcked');
    this.setState({
      persons:[
        {name:rewname, age : 29},
        {name:'Sakshi', age : 5},
        {name:'Rahul', age : 11},
        {name:'Nandni', age : 7}
      ]
    })
  }

nameChangeHandler=(event,id)=>
{
  const personIndex=this.state.persons.findIndex(p=>{
    return p.id===id;
  });

const person={...this.state.persons[personIndex]}
//spreed operator ... it used for making the copy of orignal object so that we dont pay with orignal object.
//alternate approch
//const person=Object.assign({},this.state.persons[personIndex])

person.name=event.target.value;
const persons=[...this.state.persons];
persons[personIndex]=person;

  this.setState({persons:persons})
}

deletePersonHandler=(personIndex)=>{
  //const persons=this.state.persons.slice();
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})

}
togglePersonHanlder=()=>{

  const doesShow=this.state.showPerson;
  this.setState({showPerson:!doesShow})

}
  
render() {

const style={
  
};

let persons=null;

if(this.state.showPerson)
{
  persons=(
   <div>
     {this.state.persons.map((person, index) => {
       return <Person 
       click={()=>this.deletePersonHandler(index)}
       name ={person.name} 
       age ={person.age}
       key={person.id}
       change={(event)=>this.nameChangeHandler(event,person.id)}
       />
     })}
    </div> 
  );
  // style.backgroundColor='red'
  // style[':hover']={
  //   backgroundColor :'salmon',
  //   color :'black'
  // }
}

let classes=[];

if(this.state.persons.length<=2)
{
  classes.push('red');
}
if(this.state.persons.length<=1)
{
  classes.push('bold');
}
    return (
      
      <div className="App">
        <h1>Hi, This is Karan Ravidas</h1>
        <p className={classes.join(' ')}>style is working as expexted</p>
        <StyledButton alt={this.state.showPerson}
        onClick={this.togglePersonHanlder}>switch name</StyledButton>
         {persons}
      </div>
      
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'This is karan'));
  }
}

export default App;
