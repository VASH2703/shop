interface RadioProps {
    width?: number;
    height?: number;
    color?: string;
    checked: boolean;
}

export const Radio = ({width = 20, height = 20, color='currentColor', checked}: RadioProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill='none' xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.75" stroke={color} strokeWidth="0.5"/>
            {checked && <circle cx="10" cy="10" r="4" fill={color} stroke={color} strokeWidth="2"/>}
        </svg>
    );
};
