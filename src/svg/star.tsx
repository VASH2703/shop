import hashId from "../hashId";

interface StarProps {
    width?: number;
    height?: number;
    color?: string;
    procent?: number;
}

export const Star = ({width = 28, height = 28, color='currentColor', procent}: StarProps) => {
    const procentStr = (procent === undefined ? 100 : Math.min(procent, 100)) +'%';
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={'prc'+procentStr} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} stopOpacity="1" />
                <stop offset={procentStr} stopColor={color} stopOpacity="1" />
                <stop offset={procentStr} stopColor={color} stopOpacity="0" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d="M14.0526 0L17.2076 10.3647H27.4175L19.1575 16.7705L22.3126 27.1353L14.0526 20.7295L5.7927 27.1353L8.94771 16.7705L0.687785 10.3647H10.8976L14.0526 0Z" fill={`url(#prc${procentStr})`}/>
            <path d="M14.0526 0L17.2076 10.3647H27.4175L19.1575 16.7705L22.3126 27.1353L14.0526 20.7295L5.7927 27.1353L8.94771 16.7705L0.687785 10.3647H10.8976L14.0526 0Z" fill="rgba(0, 0, 0, 0.3)"/>
        </svg>
    );
};
