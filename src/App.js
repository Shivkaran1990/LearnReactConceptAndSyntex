import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import person from './Person/Person';

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
  backgrondColor:'white',
  font:'inherit',
  border:'1x solid blue',
  padding:'10px',
  cursor:'pointer'
}

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
}

    return (
      <div className="App">
        <h1>Hi, This is Karan Ravidas</h1>
        <button style ={style}
        onClick={this.togglePersonHanlder}>switch name</button>
      
         {persons}
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'This is karan'));
  }
}

export default App;
