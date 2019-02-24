import React, { Component } from 'react';
import './App.css';

import Calendar from './Components/Calendar/';


const style = {
  position: "relative",
  margin: "10px"
}

class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
  render() {
    return (
      <div className="App" style={{backgroundColor:"#f49b42"}}>
        <header style={{backgroundColor: "#f4df42", height: 50,}} >
         <a style={{textDecorationLine:"underline", fontVariant: "oldstyle-nums", fontSize: 29}}>Calendar</a>
        </header>       
          <Calendar style={style} width="302px" 
            onDayClick={(e, day)=> this.onDayClick(e, day)}/>
          
        
      </div>
      
    );
  }
}

export default App;
