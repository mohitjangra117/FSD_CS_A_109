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