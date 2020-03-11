import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Clock from 'react-live-clock';

//var nextRadioTime = "1 am";
//var nextDucklingTime = "2 am";
//var nextBridgeTime = "3 am";
var currentTime = Date();

const eventTime = new Date('January 23, 2020 16:05:00')

//eventTime.setMinutes(12);
var nextRadioHour = eventTime.getHours();
var nextRadioMinutes = eventTime.getMinutes();
// this isn't working for some reason // var currentHour = currentTime.getHours();


console.log(currentTime);
console.log(eventTime);
console.log(nextRadioHour);
console.log(nextRadioMinutes);
//console.log (new Date());
console.log (currentTime);

/*
if (currentHour === nextRadioHour){
  //console.log("Yo, it's time!");
}
*/
function App() {
  return (        
    <div className="App">
      <header className="App-time">
          <Clock           
          format={'h:mm:ss'} 
          ticking={true} 
          timezone={'US/Central'}          
          />  
         
         </header>  
        <header className="App-ampm">
          
        <Clock format={'a'}       
        /> 
             
        </header>
    </div>      
  );
}
/*

 <Clock
          format={' a'}
          />
Next Radio Training: { nextRadioHour}:{ nextRadioMinutes } 
*/

export default App;
