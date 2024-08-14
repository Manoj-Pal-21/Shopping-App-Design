import React from 'react';

const items = [
    {
        id: 1,
        image: 'images/featureSea.png',
        title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
        rating: '4.8 (269)',
        description: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.',
        duration: '2 Days 1 Night',
        price: '$1200',
        fromPrice: '$114'
    },
    {
        id: 1,
        image: 'images/featureBort.png',
        title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
        rating: '4.8 (269)',
        description: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.',
        duration: '2 Days 1 Night',
        price: '$1200',
        fromPrice: '$114'
    },
    {
        id: 1,
        image: 'images/buddha.png',
        title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
        rating: '4.8 (269)',
        description: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.',
        duration: '2 Days 1 Night',
        price: '$1200',
        fromPrice: '$114'
    },
    {
        id: 1,
        image: 'images/bigBort.png',
        title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
        rating: '4.8 (269)',
        description: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.',
        duration: '2 Days 1 Night',
        price: '$1200',
        fromPrice: '$114'
    },
    {
        id: 1,
        image: 'images/rider.png',
        title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
        rating: '4.8 (269)',
        description: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.',
        duration: '2 Days 1 Night',
        price: '$1200',
        fromPrice: 'From $114'
    },
    {
        id: 1,
        image: 'images/engineering.png',
        title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
        rating: '4.8 (269)',
        description: 'The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.',
        duration: '2 Days 1 Night',
        price: '$1200',
        fromPrice: 'From $114'
    }

];

const Card = ({ item }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row mb-6">
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center p-4">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover rounded-lg"
            />
        </div>
        {/* Right side */}
        <div className="p-4 flex flex-col justify-center items-center w-full sm:w-2/3">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
                {item.title}
            </h3>
            <div className="text-center mt-4">
                <span className="text-sm flex items-center justify-center mx-auto">
                    {item.rating}
                </span>
            </div>
            <p className="text-gray-600 mt-4 text-sm leading-6 text-center">
                {item.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
                <div className="text-sm text-orange-500 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <div>Best Price Guarantee</div>
                    <div>Free Cancellation</div>
                </div>
            </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden sm:block border-l border-gray-200"></div> 

        {/* Pricing and Button */}
        <div className="p-4 flex flex-col justify-center items-center w-full sm:w-1/3">
            <div className="text-center text-sm text-gray-600 mb-4">
                <span className="block mb-6">{item.duration}</span>
                <div className="text-sm mb-2">
                    {item.price}
                </div>
                <div className="text-sm mb-2">
                    From <span className='font-semibold'>{item.fromPrice}</span>
                </div>
                <button
                    type="submit"
                    className="bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded-[12px] font-semibold hover:bg-orange-100 transition duration-300 m-4"
                    style={{ width: '160.14px', height: '60px' }}
                >
                    See more reviews
                </button>
            </div>
        </div>
    </div>
);

const DynamicCardList = () => (
    <div className="w-full p-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <span className="text-sm">1362 results</span>
            <div className="flex items-center mt-4 md:mt-0">
                <span className="mr-2 text-sm">Sort by:</span>
                <select className="border rounded-md p-1 text-sm">
                    <option>Featured</option>
                    <option>Price</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
        <div className="space-y-6">
            {items.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    </div>
);
export default DynamicCardList;
