import React from 'react'
import {Routes, Route} from 'react-router-dom'
const App=()=>{
    return(
        <div>
            <Routes>
            <Route path='/' element={<h1>Home Page</h1>}></Route>
            <Route path='/counter' element={<h1>Home Page</h1>}></Route>
            <Route path='*' element={<h1>Home Page</h1>}></Route>
            </Routes>
        </div>
    )
}
export default App;