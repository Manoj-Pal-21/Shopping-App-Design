import React from 'react'

const DetailItem = ({ title, content }) => (
    <div className="relative flex flex-col items-start min-w-[150px] pl-[50px] mb-4">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#e9e7e7] rounded-lg"></div>
        <h2 className="text-[#333] text-sm m-0">{title}</h2>
        <p className="text-[#555] text-xs">{content}</p>
    </div>
)

const Details = () => (
    <div className="flex flex-wrap justify-start py-4">
        <DetailItem title="Duration" content="3 days" />
        <DetailItem title="Group Size" content="5 people" />
        <DetailItem title="Ages" content="18-99 yrs" />
        <DetailItem title="Languages" content="English, Japanese" />
    </div>
)

export default Details
