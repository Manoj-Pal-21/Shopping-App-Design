import React from 'react';

export const Typography = ({ children, variant }) => {
    const textClasses = "font-custom leading-[28.13px] mb-4 text-[14.41px]";
    const listClasses = "font-custom leading-[28.13px] list-disc list-inside mb-4 text-[14.65px]";

    return (
        <div>
            {variant === "text" ? (
                <span className={textClasses}>
                    {children}
                </span>
            ) : (
                <ul className={listClasses}>
                    {children}
                </ul>
            )}
        </div>
    );
};
