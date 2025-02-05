import SvgProps from "./types";
  
export const Search = ({width = 27, height = 27, color='currentColor', className}: SvgProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 27 27" fill="none" style={{ strokeWidth: 'var(--stroke-width)' }} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M26 25.6259L21 20.7007" stroke={color} strokeLinecap="round"/>
            <ellipse cx="11" cy="10.8504" rx="10" ry="9.85038" stroke={color}/>
        </svg>
    );
};
  