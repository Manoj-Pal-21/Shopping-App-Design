import React, { useState } from 'react'

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
        </>
    )
}

export default Actions
