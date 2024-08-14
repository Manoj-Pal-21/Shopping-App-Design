import React from 'react';
import TourReview from './TourReview';

const reviews = [
    {
        user: { initials: 'A.T', name: 'Ali Tufan' },
        date: 'April 2023',
        subtitle: "Take this tour! It's fantastic!",
        description: 'Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.',
        images: [
            { src: 'images/boatRider.png' },
            { src: 'images/sand.png' },
            { src: 'images/train.png' },
        ],
    },
    {
        user: { initials: 'J.D', name: 'Jane Doe' },
        date: 'May 2023',
        subtitle: "Incredible experience, don't miss it!",
        description: 'A perfect day out with lots of interesting places and activities. Great for families and friends alike.',
        images: [
            { src: 'images/boatRider.png' },
            { src: 'images/sand.png' },
            { src: 'images/train.png' },
        ],
    },
    {
        user: { initials: 'J.D', name: 'Jane Doe' },
        date: 'May 2023',
        subtitle: "Incredible experience, don't miss it!",
        description: 'A perfect day out with lots of interesting places and activities. Great for families and friends alike.',
        images: [
            { src: 'images/boatRider.png' },
            { src: 'images/sand.png' },
            { src: 'images/train.png' },
        ],
    }

];

const Profile = () => {
    return (
        <div>
            {reviews.map((review, index) => (
                <TourReview key={index} {...review} />
            ))}
            <div className="mt-auto">
    <button
        type="submit"
        className="bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded-[12px] font-semibold hover:bg-orange-100 transition duration-300 m-4"
        style={{ width: '222.14px', height: '62px' }}
    >
        See more reviews
    </button>
</div>

        </div>
    );
};

export default Profile;
