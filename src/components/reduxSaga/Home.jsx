import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            Saga Example
            <div>
                <nav style={{ margin: 0, padding: 0 }}>
                    <ul>
                        <Link to="/redux-saga-example/movie-app">Movie Search App</Link>
                    </ul>
                    <ul>
                        <Link to="/redux-saga-example/crud-app">CRUD app</Link>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Home