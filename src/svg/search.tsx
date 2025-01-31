interface MapProps {
    width?: number;
    height?: number;
    color?: string;
}
  

const Search = ({width = 27, height = 27, color='currentColor'}: MapProps) => {
    return (
        <svg width={width} height={height} fill="none" style={{ strokeWidth: 'var(--stroke-width)' }} xmlns="http://www.w3.org/2000/svg">
            <path d="M26 25.6259L21 20.7007" stroke={color} stroke-linecap="round"/>
            <ellipse cx="11" cy="10.8504" rx="10" ry="9.85038" stroke={color}/>
        </svg>
    );
};
    
export default Search;
  