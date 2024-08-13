export const Title = ({ children, variant = 'h2' }) => {
    const Tag = variant;

    const commonStyles = "text-[#05073C]";

    const headingClasses = {
        h1: "text-[36px] font-bold mb-6 leading-[1.2]",
        h2: "text-[30px] font-bold mb-4 leading-[45px]",
        h3: "text-[24px] font-semibold mb-4 leading-[1.4]",
        h4: "text-[20px] font-semibold mb-3 leading-[1.5]",
        h5: "text-[18px] font-medium mb-2 leading-[1.5]",
        h6: "text-[20px] font-medium mb-2 leading-[30px]",
    };

    return (
        <Tag className={`${commonStyles} ${headingClasses[variant] || headingClasses['h2']}`}>
            {children}
        </Tag>
    );
};
