import React from 'react'
import OverView from '../OverView/OverView';
import BookingSection from '../Section/BookingSection';
import Package from '../Package/Package';


const Booking = () => {

    return (
        <div className="grid grid-cols-12 gap-2">
            <OverView />
            <BookingSection />
        </div>
    )
}

export default Booking
