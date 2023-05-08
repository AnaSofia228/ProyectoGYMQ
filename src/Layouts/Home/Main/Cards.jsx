import React from 'react'

export const Cards = () => {
  return (
    <div className="card">
        <div className="card-details">
            <p className="text-title">Card title</p>
            <p className="text-body">Here are the details of the card</p>
        </div>
        <button className="card-button">More info</button>
    </div>
  )
}
