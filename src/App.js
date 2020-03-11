import React from 'react';
import ClockQueue from "./ClockQueue/ClockQueue.js";

import './App.css';


//var nextRadioTime = "1 am";
//var nextDucklingTime = "2 am";
//var nextBridgeTime = "3 am";
var currentTime = Date();
const FILE_NAME = 'ClockQueue';
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


// function CreateFolderPath(){

//   if (!fs.existsSync(path, (err) => {if (err) throw err;}))
//       fs.mkdirSync(path);
// }

function App() {

  return (        
    <div className="App">
      <header className="App-time">


          <ClockQueue/>  
         
         </header>  


        <header className="App-ampm">
          
        <ClockQueue format={'a'}       
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
