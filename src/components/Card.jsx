import React from 'react';

export default function Card(cardInfo) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={cardInfo.imgUrl} alt="not found" />
            <div className="card-header">
                {cardInfo.title}
            </div>
            <div className="card-body">
                <p className="card-text"> {cardInfo.content} </p>
            </div>
        </div>
    );
}