import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h2>{props.myProduct.title}</h2>
            <p>{props.myProduct.description}</p>
            <p>{props.myProduct.price}</p>
            <button onClick={props.myClick}>Add to Cart</button>

        </div>
    )
}
