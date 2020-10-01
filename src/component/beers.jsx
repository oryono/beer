import React from "react";

export function Beers({beers, deleteBeer}) {
    return (
        <div>
            {
                beers.map((beer, index) => (<div key={index}>
                    <p>{beer.name}</p>
                    <p>{beer.alcohol}</p>
                    <button onClick={() => deleteBeer(index)}>Delete</button>
                </div>))
            }
        </div>
    )
}