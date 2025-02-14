interface CheckProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}

export const Check = ({width = 15, height = 15, color='currentColor', className}: CheckProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 15 15" fill='none' className={className} xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="14" height="14" rx="1.5" fill={color} stroke="#05048C"/>
            <path d="M3 7.5L6.6 11L12 4" stroke="#F7F7F7" stroke-linecap="round"/>
        </svg>
    );
};
