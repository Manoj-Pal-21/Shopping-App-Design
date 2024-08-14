import React from 'react';

const Package = () => {
    return (
        <div className="p-4 max-w-2xl bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Package Includes</h2>
            <div className="grid grid-cols-2 gap-x-4">
                <ul className="list-disc list-inside space-y-2">
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-5 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Beverages, drinking water, morning tea and buffet lunch
                    </li>
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Local taxes
                    </li>
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-5 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Hotel pickup and drop-off by air-conditioned minivan
                    </li>
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        InsuranceTransfer to a private pier
                    </li>
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Soft drinks
                    </li>
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Tour Guide
                    </li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Towel
                    </li>
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Tips
                    </li>
                    <li className="flex items-start" style={{ fontSize: '14.53px', fontWeight: 400, lineHeight: '28.13px' }}>
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2"></span>
                        Alcoholic Beverages
                    </li>
                </ul>
            </div>
            <div className="border-t border-gray-300 mt-[50px] mb-[50px]"></div>
        </div>
    );
}

export default Package;
