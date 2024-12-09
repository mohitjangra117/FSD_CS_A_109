<<<<<<< HEAD
import{useRef} from 'react';
const Refex={}=>{
    let a=5;
    const refcounT=useRef(0);
    console.log("object Redered");
    function handleref(){
        refecount.current++;
        console.logz("refcount=",refcount.current)
        if(refcount.current==a){
            alert("counter: "+ refcount.current)
        }
    }
    return(
       <div>
       <h1>Refcount={refcount.current}</h1>
       <button onClick={handleref}> Increament</button>
       <p>{a}</p>
       </div>
    )
}
=======
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Stopwatch from './Component/Stopwatch'
const App=()=>{
    return(
        <div>
            <Routes>
            <Route path='/' element={<h1>Home Page</h1>}></Route>
            <Route path='/counter' element={<h1>Home</h1>}></Route>
            <Route path='/Stopwatch' element={<h1>Stopwatch</h1>}></Route>
            </Routes>
        </div>
    )
}
export default App;
>>>>>>> 5f0fa3f2b06fb4b41b588534783ebb225cd4f7f1
