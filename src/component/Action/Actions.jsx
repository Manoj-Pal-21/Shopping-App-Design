import React, { useState } from 'react'
import "../../styles/Actions.css"

export const Actions = () => {
    const [selectedButton, setSelectedButton] = useState('bestseller');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <>
            <div className='island-container'>
                <button
                    className={selectedButton === 'bestseller' ? 'selected' : ''}
                    onClick={() => handleButtonClick('bestseller')}
                >
                    Bestseller
                </button>
                <button
                    className={selectedButton === 'cancellation' ? 'selected' : ''}
                    onClick={() => handleButtonClick('cancellation')}
                >
                    Free cancellation
                </button>
            </div>

            <div className="tour-info">
                <h2 className="tour-title">
                    Phi Phi Islands Adventure Day Trip with<br />
                    Seaview Lunch by V. Marine Tour <span className="tour-details">4.8 (269) 30K+ booked</span>
                </h2>
                <div className="button-container">
                    <button className="share-button">Share</button>
                    <button className="wishlist-button">Wishlist</button>
                </div>
            </div>

            <div className="left-img-container">
                <img src="images/bort.png" alt="Left side" className="left-img" />
                <div className="right-img-container">
                    <img src="images/beach.png" alt="Top right" className="right-img top" />
                    <div className="bottom-images">
                        <img src="images/nature.png" alt="Bottom left" className="right-img bottom" />
                        <img src="images/fan.png" alt="Bottom right" className="right-img bottom" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Actions
