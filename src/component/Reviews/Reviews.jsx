import React from 'react';

const DetailItem = ({ title, content }) => (
    <div>
        <h2 className="text-[#333] text-sm m-0">{title}</h2>
        <p className="text-[#555] text-xs">{content}</p>
    </div>
);

const Reviews = () => {
    return (
        <div className="p-6 max-w-[40rem]">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse rounded-lg border border-transparent">
                    <thead className="bg-[#EB662B1A] border-transparent rounded-t-lg">
                        <tr>
                            <td className="p-4 font-semibold rounded-tl-lg border border-transparent">
                                <DetailItem title="Overall Rating" content="Excellent" />
                            </td>
                            <td className="border border-transparent"></td>
                            <td className="border border-transparent"></td>
                            <th className="p-4 text-left rounded-tr-lg border border-transparent">5.0</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#EB662B0A]">
                            <td className="p-4 font-semibold rounded-bl-lg border border-transparent">
                                <DetailItem title="Location" content="Excellent" />
                            </td>
                            <td className="p-4 border border-transparent">5.0</td>
                            <td className="p-4 font-semibold border border-transparent">
                                <DetailItem title="Amenities" content="Excellent" />
                            </td>
                            <td className="p-4 border border-transparent">5.0</td>
                        </tr>
                        <tr className="bg-[#EB662B0A]">
                            <td className="p-4 font-semibold rounded-bl-lg border border-transparent">
                                <DetailItem title="Food" content="Excellent" />
                            </td>
                            <td className="p-4 border border-transparent">5.0</td>
                            <td className="p-4 font-semibold border border-transparent">
                                <DetailItem title="Price" content="Excellent" />
                            </td>
                            <td className="p-4 border border-transparent">5.0</td>
                        </tr>
                        <tr className="bg-[#EB662B0A]">
                            <td className="p-4 font-semibold rounded-bl-lg border border-transparent">
                                <DetailItem title="Rooms" content="Excellent" />
                            </td>
                            <td className="p-4 border border-transparent">5.0</td>
                            <td className="p-4 font-semibold border border-transparent">
                                <DetailItem title="Tour Operator" content="Excellent" />
                            </td>
                            <td className="p-4 border border-transparent">5.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;
