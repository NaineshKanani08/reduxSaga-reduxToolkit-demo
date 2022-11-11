import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            Home
            <div>
                <nav style={{ margin: 0, padding: 0 }}>
                    <ul>
                        <Link to="/redux-toolkit-example">Redux Toolkit Example</Link>
                    </ul>
                    <ul>
                        <Link to="/redux-saga-example">Redux Saga Example</Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Home