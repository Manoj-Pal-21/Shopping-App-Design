import React from 'react';

const items = [
    { text: 'Beverages, drinking water, morning tea and buffet lunch', color: '#EFF7F1' },
    { text: 'Local taxes', color: '#EFF7F1' },
    { text: 'Hotel pickup and drop-off by air-conditioned minivan', color: '#EFF7F1' },
    { text: 'InsuranceTransfer to a private pier', color: '#EFF7F1' },
    { text: 'Soft drinks', color: '#EFF7F1' },
    { text: 'Tour Guide', color: '#EFF7F1' },
    { text: 'Towel', color: '#FFE5E5' },
    { text: 'Tips', color: '#FFE5E5' },
    { text: 'Alcoholic Beverages', color: '#FFE5E5' },
];

const Package = () => {
    return (
        <div className="p-4 max-w-2xl bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">What's included</h2>
            <div className="grid grid-cols-3 gap-x-6">
                {['#EFF7F1', '#FFE5E5'].map((bgColor, index) => (
                    <ul key={index} className={`list-disc list-inside space-y-2 ${index === 0 ? 'col-span-2' : 'col-span-1'}`}>
                        {items
                            .filter(item => (index === 0 ? item.color === '#EFF7F1' : item.color === '#FFE5E5'))
                            .map((item, i) => (
                                <li key={i} className="flex items-start text-sm font-normal leading-6">
                                    <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                                    {item.text}
                                </li>
                            ))}
                    </ul>
                ))}
            </div>
            <div className="border-t border-gray-300 mt-[50px]"></div>
        </div>
    );
}

export default Package;
