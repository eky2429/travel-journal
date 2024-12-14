
import React from 'react'

export default function Card(props) {  
    return (
        <div className='card'>
            <img className='card--img' src = {props.imgSrc} alt = "Pic"/>
            <div>
                <div className='card--top-line'>
                    <img className = "card--location-pic" src = "public/images/location.png"/>
                    <p>{props.location}</p>
                    <a href = {props.locationLink}>View on Google Maps</a>
                </div>

                <h1>{props.place}</h1>
                <h2>{props.travelDate}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}