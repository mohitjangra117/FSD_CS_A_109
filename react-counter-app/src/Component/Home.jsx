import React from 'react'
import {Link} from 'react-router-dom'
const Home=()=>{ {} react-router-dom
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/counter">Counter App</Link></li>
                <li><Link to="/Stopwatch">Stop Watch</Link></li>
            </ul>
        </div>
    )
}

export default Home