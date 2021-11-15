import React from 'react'

function Image(props) {
    return (
        <div className="container text-center">
            <img src={`https://i.ytimg.com/vi/${props.url}/hq720.jpg`} width="50%" className="rounded img-fluid" alt="..."></img>
        </div>
    )
}

export default Image
