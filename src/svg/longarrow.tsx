import SvgProps from "./types";

export const LongArrow = ({width = 32, height = 6, color='currentColor', className}: SvgProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 6" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2.65C0.8067 2.65 0.65 2.8067 0.65 3C0.65 3.1933 0.8067 3.35 1 3.35V2.65ZM31.2475 3.24749C31.3842 3.1108 31.3842 2.8892 31.2475 2.75251L29.0201 0.525126C28.8834 0.388443 28.6618 0.388443 28.5251 0.525126C28.3884 0.66181 28.3884 0.883418 28.5251 1.0201L30.505 3L28.5251 4.9799C28.3884 5.11658 28.3884 5.33819 28.5251 5.47487C28.6618 5.61156 28.8834 5.61156 29.0201 5.47487L31.2475 3.24749ZM1 3.35H31V2.65H1V3.35Z"/>
        </svg>
    );
};
