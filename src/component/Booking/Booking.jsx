import React from 'react'
import Details from '../Detail/Details'
import { Title } from '../Title/Title'
import { Typography } from '../Typography/Typography'

const Booking = () => {

    const DetailItem = ({ title, content }) => (
        <div className="relative flex flex-col items-start min-w-[150px] pl-12">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 border border-[#e9e7e7] rounded-lg"></div>
            <h2 className="text-[#333] text-sm font-semibold m-0 mb-1">{title}</h2>
            <p className="text-[#555] text-xs">{content}</p>
        </div>
    );


    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="left-container col-span-12 md:col-span-8 bg-white rounded-lg p-6 mb-4 md:mb-0 move-up">
                <Details />

                <Title variant='h2'>
                    Tour Overview
                </Title>

                <Typography variant='text'>
                    The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day.
                    Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
                    Maya Bay, immortalized in "The Beach." Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup
                    and drop-off all included.
                </Typography>

                <Title variant='h6'>
                    Tour Highlights
                </Title>

                <Typography variant='list'>
                    <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
                    <li>Be amazed by the variety of marine life in the archipelago</li>
                    <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
                    <li>Feel the comfort of a tour limited to 35 passengers</li>
                    <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
                </Typography>
            </div>

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
                <div className="mb-2">
                    <div className="flex items-center mb-2">
                        <Typography variant="text">
                            Adult (18+ years)
                            <span className="ml-2 font-bold">$282.00 x 3</span>
                            <div className="inline-flex items-center ml-4 space-x-4">
                                <div className="flex items-center">
                                    <div className="h-4 w-4 border-2 rounded-full"></div>
                                    <span className="ml-2">3</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-4 w-4 border-2 rounded-full"></div>
                                </div>
                            </div>
                        </Typography>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="flex items-center mb-2">
                        <Typography variant="text">
                            Adult (18+ years)
                            <span className="ml-2 font-bold">$282.00 x 3</span>
                            <div className="inline-flex items-center ml-4 space-x-4">
                                <div className="flex items-center">
                                    <div className="h-4 w-4 border-2 rounded-full"></div>
                                    <span className="ml-2">3</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-4 w-4 border-2 rounded-full"></div>
                                </div>
                            </div>
                        </Typography>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="flex items-center mb-2">
                        <Typography variant="text">
                            Adult (18+ years)
                            <span className="ml-2 font-bold">$282.00 x 3</span>
                            <div className="inline-flex items-center ml-4 space-x-4">
                                <div className="flex items-center">
                                    <div className="h-4 w-4 border-2 rounded-full"></div>
                                    <span className="ml-2">3</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-4 w-4 border-2 rounded-full"></div>
                                </div>
                            </div>
                        </Typography>
                    </div>
                </div>


                <h3 className="text-[18px] font-semibold mb-6 mt-5">Add Extra</h3>
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <span>Add Service per booking</span>
                        <span className="ml-auto font-bold">$40</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <span>Add Service per booking</span>
                        <span className="ml-auto font-bold">$40</span>
                    </div>
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
        </div>
    )
}

export default Booking
