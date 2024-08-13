import React from 'react'
import "../../styles/Details.css"


const Details = () => {
    return (
        <div className="details-container">
            <div className="detail-item">
                <h2>Duration</h2>
                <p>3 days</p>
            </div>
            <div className="detail-item">
                <h2>Group Size</h2>
                <p>5 people</p>
            </div>
            <div className="detail-item">
                <h2>Ages</h2>
                <p>18-99 yrs</p>
            </div>
            <div className="detail-item">
                <h2>Languages</h2>
                <p>English, Japanese</p>
            </div>
        </div>
    )
}

export default Details
