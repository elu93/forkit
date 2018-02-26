import React from 'react'

const Restaurant = (props) => {

    return (
        <div>
            <div>
                <h2>{props.name}</h2>
            </div>
            <div><img src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=12&size=400x400&markers=color:red|${props.latitude},${props.longitude}&key=AIzaSyCRiXIAL7OPuPSVUB7O1q1SlZ_QFONdavo
`}/></div>
            <div>{props.rating}</div>
        </div>
    )
}

export default Restaurant