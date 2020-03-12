import React, { Component } from 'react';
import { render } from 'react-dom';
import ClockQueue from "./ClockQueue/ClockQueue.js";
import cards from "./ClockQueue.json"
import './App.css';


//var nextRadioTime = "1 am";
//var nextDucklingTime = "2 am";
//var nextBridgeTime = "3 am";
//var currentTime = Date();
//const FILE_NAME = 'ClockQueue.json';


//const eventTime = new Date('January 23, 2020 16:05:00')

//eventTime.setMinutes(12);
//var nextRadioHour = eventTime.getHours();
//var nextRadioMinutes = eventTime.getMinutes();
// this isn't working for some reason // var currentHour = currentTime.getHours();



// console.log(currentTime);
// console.log(eventTime);
// console.log(nextRadioHour);
// console.log(nextRadioMinutes);
// //console.log (new Date());
// console.log (currentTime);

/*
if (currentHour === nextRadioHour){
  //console.log("Yo, it's time!");
}
*/


// function CreateFolderPath(){

//   if (!fs.existsSync(path, (err) => {if (err) throw err;}))
//       fs.mkdirSync(path);
// }

class App extends Component {

  render() {
  return (        
    <div className="App">
      <header className="App-time">


          <ClockQueue cards={cards}/>  
         
         </header>  


        <header className="App-ampm">
          
        {/* <ClockQueue format={'a'}       
        />  */}
             
        </header>
    </div>      
  );
}
}
/*

 <Clock
          format={' a'}
          />
Next Radio Training: { nextRadioHour}:{ nextRadioMinutes } 
*/

export default App;
