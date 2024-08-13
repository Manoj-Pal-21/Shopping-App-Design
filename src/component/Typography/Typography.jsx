import React from 'react';

export const Typography = ({ children, variant }) => {
    return (
        <div>
            {
                variant === "text"
                    ?
                    <p className="font-custom text-custom leading-custom mb-4">
                        {children}
                    </p>
                    :
                    <ul className="font-custom text-custom leading-custom list-disc list-inside mb-4">
                        {children}
                    </ul>
            }
        </div>
    )
}
