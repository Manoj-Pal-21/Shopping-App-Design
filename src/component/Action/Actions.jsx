import React, { useState } from 'react'

export const Actions = () => {
    const [selectedButton, setSelectedButton] = useState('bestseller');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <>
            <div className='mt-5 flex flex-wrap'>
                <button
                    className={`${selectedButton === 'bestseller' ? 'text-[#EB662B] bg-[#EFEFEF]' : 'text-black bg-[#F5F5F5]'
                        } border-0 rounded-lg py-1 px-2.5 font-bold mx-1 cursor-pointer transition-colors duration-300 text-[13.78px] leading-[28px] text-center`}
                    onClick={() => handleButtonClick('bestseller')}
                >
                    Bestseller
                </button>
                <button
                    className={`${selectedButton === 'cancellation' ? 'text-[#EB662B] bg-[#EFEFEF]' : 'text-black bg-[#F5F5F5]'
                        } border-0 rounded-lg py-1 px-2.5 font-bold mx-1 cursor-pointer transition-colors duration-300 text-[13.78px] leading-[28px] text-center`}
                    onClick={() => handleButtonClick('cancellation')}
                >
                    Free cancellation
                </button>
            </div>



            <div className="mt-5">
                <h2 className="font-bold text-gray-800 text-[40px]">
                    Phi Phi Islands Adventure Day Trip with<br />
                    Seaview Lunch by V. Marine Tour
                    <span className="text-gray-600 text-xs ml-5">4.8 (269) 30K+ booked</span>
                </h2>
                <div className="mt-2 flex justify-end gap-2.5">
                    <button className="text-black rounded-lg text-xs px-3 py-1">Share</button>
                    <button className="text-black rounded-lg text-xs px-3 py-1">Wishlist</button>
                </div>
            </div>



            <div class="flex flex-row">
                <img src="images/bort.png" alt="Left side" class="w-1/2 p-2 box-border" />
                <div class="flex flex-col justify-between w-1/2 p-2 box-border">
                    <img src="images/beach.png" alt="Top right" class="w-full mb-2 box-border" />
                    <div class="flex gap-2">
                        <img src="images/nature.png" alt="Bottom left" class="w-[calc(50%-4px)] box-border" />
                        <img src="images/fan.png" alt="Bottom right" class="w-[calc(50%-4px)] box-border" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Actions
