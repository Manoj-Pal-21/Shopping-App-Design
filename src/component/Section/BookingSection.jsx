import React from 'react'
import { Typography } from '../Typography/Typography';


const PriceDetail = ({ ageGroup, price, quantity, selectedQuantity }) => {
    return (
        <div className="mb-2">
            <div className="flex items-center mb-2">
                <Typography variant="text">
                    {ageGroup}
                    <span className="ml-2 font-bold">{price} x {quantity}</span>
                    <div className="inline-flex items-center ml-4 space-x-4">
                        <div className="flex items-center">
                            <div className="h-4 w-4 border-2 rounded-full"></div>
                            <span className="ml-2">{selectedQuantity}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="h-4 w-4 border-2 rounded-full"></div>
                        </div>
                    </div>
                </Typography>
            </div>
        </div>
    );
};

const ServiceOption = ({ label, price }) => {
    return (
        <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span>{label}</span>
            <span className="ml-auto font-bold">{price}</span>
        </div>
    );
};

const DetailItem = ({ title, content }) => (
    <div className="relative flex flex-col items-start min-w-[150px] pl-12">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 border border-[#e9e7e7] rounded-lg"></div>
        <h2 className="text-[#333] text-sm font-semibold m-0 mb-1">{title}</h2>
        <p className="text-[#555] text-xs">{content}</p>
    </div>
);

const BookingSection = () => {
    return (
        <div className="right-container col-span-12  md:col-span-4 bg-white shadow-md rounded-lg p-6 md:ml-4">
            <Typography variant='text'>
                From<span className='ml-[10px] font-bold'>$1,200</span>
            </Typography>

            <div className="border border-[#E7E6E6] rounded-lg">
                <div className="p-2">
                    <DetailItem title="From" content="February 05 ~ March 14" />
                </div>
                <hr className="border-t border-[#E7E6E6]" />
                <div className="p-2">
                    <DetailItem title="Time" content="Choose time" />
                </div>
            </div>

            <h3 className="text-[18px] font-semibold mb-6 mt-5">Tickets</h3>

            <PriceDetail
                ageGroup="Adult (18+ years)"
                price="$282.00"
                quantity="3"
                selectedQuantity="3"
            />
            <PriceDetail
                ageGroup="Adult (18+ years)"
                price="$282.00"
                quantity="3"
                selectedQuantity="3"
            />
            <PriceDetail
                ageGroup="Adult (18+ years)"
                price="$282.00"
                quantity="3"
                selectedQuantity="3"
            />


            <h3 className="text-[18px] font-semibold mb-6 mt-5">Add Extra</h3>

            <div className="mb-4">
                <ServiceOption
                    label="Add Service per booking"
                    price="$40"
                />
                <ServiceOption
                    label="Add Service per booking"
                    price="$40"
                />
            </div>

            <div className="flex justify-between font-bold mb-4">
                <span>Total:</span>
                <span>$530.00</span>
            </div>

            <div className="flex justify-center mb-4">
                <button className="bg-orange-500 text-white font-bold py-3 px-4 rounded-md transition duration-300 hover:bg-orange-600 w-full max-w-md">
                    Book Now
                </button>
            </div>

        </div>
    )
}

export default BookingSection
