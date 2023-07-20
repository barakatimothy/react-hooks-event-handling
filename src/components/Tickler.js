import React from "react";

function Tickler(){
  
  function tickle(event ){
    console.log(event)
  }
  return <button onClick= {tickle}>Tickle me!</button>
}

export default Tickler;



// function Clickable(){
//   return <button>Click Me !</button>
// }

// function App(){
//   function handleClick(){
//     console.log("click")
//   }
//   return <Clickable onClick ={handleClick}/>
// }


// function Clickable(){
//   function handleClick(){
//     console.log("click");
//   }
//  return <button onClick={handleClick}>Click Me !</button>
// }
// function App(){
//   return <Clickable/>
// }