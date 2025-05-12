interface StatusProps {
    width?: number;
    height?: number;
    color?: string;
    colorFill?: string;
    checked: boolean;
    className?: string;
}

export const Status = ({width = 60, height = 60, color='#E0E0E0', colorFill="#05048C", checked=false, className}: StatusProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 60 60" fill='none' className={className} xmlns="http://www.w3.org/2000/svg">
           <circle cx="30" cy="30" r={checked ? "30" : "27.5"} fill={checked ? colorFill : "#F7F7F7"} stroke={color} stroke-width={checked ? 0 : 5}/>
           <path d="M15.999 30.5L27.199 41L43.999 20" stroke="#F7F7F7" stroke-width="3" stroke-linecap="round"/>
        </svg>
    );
};
