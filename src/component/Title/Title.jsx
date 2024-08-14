import React from 'react';

export const Title = ({ children, variant = 'h2' }) => {
    const Tag = variant;

    const headingClasses = {
        h1: "text-[29.18px] font-bold mb-6 leading-[45px]",
        h2: "text-[29.18px] font-bold mb-4 leading-[45px]",
        h3: "text-[24px] font-semibold mb-4 leading-[1.4]",
        h4: "text-[20px] font-semibold mb-3 leading-[1.5]",
        h5: "text-[18px] font-medium mb-2 leading-[1.5]",
        h6: "text-[19.22px] font-medium mb-2 leading-[45px]",
    };


    return (
        <Tag className={`${headingClasses[variant] || headingClasses['h2']} text-[#05073C']`}>
            {children}
        </Tag>
    );
};
