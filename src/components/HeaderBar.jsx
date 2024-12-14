import React from 'react'

export default function HeaderBar() {
    return (
        <nav className = "header-bar">
            <img className='header-bar--img' src = "public/images/planet-earth.png"/>
            <p className = "header-bar--name">My (Ethan's) Travel Journal</p>
        </nav>
    )
}