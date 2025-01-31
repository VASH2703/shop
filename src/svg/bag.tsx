interface MapProps {
    width?: number;
    height?: number;
    color?: string;
}

<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">

</svg>

  

const Bag = ({width = 32, height = 35, color='currentColor'}: MapProps) => {
    return (
        <svg width={width} height={height} fill="none" style={{ strokeWidth: 'var(--stroke-width)' }} xmlns="http://www.w3.org/2000/svg">
            <path d="M2.40305 14.5086C2.52805 12.7461 2.59055 11.8649 3.16657 11.3282C3.7426 10.7916 4.62607 10.7916 6.39303 10.7916H25.607C27.3739 10.7916 28.2574 10.7916 28.8334 11.3282C29.4094 11.8649 29.4719 12.7461 29.597 14.5086L30.8481 32.1501C30.9193 33.1533 30.9548 33.6549 30.6583 33.9733C30.3617 34.2916 29.8588 34.2916 28.8531 34.2916H3.14687C2.14117 34.2916 1.63833 34.2916 1.34174 33.9733C1.04516 33.6549 1.08073 33.1533 1.15188 32.1501L2.40305 14.5086Z" stroke={color}/>
            <path d="M9.33301 16.6666L9.33301 7.66663C9.33301 3.98473 12.3178 0.99996 15.9997 0.99996V0.99996C19.6816 0.99996 22.6663 3.98473 22.6663 7.66663L22.6663 16.6666" stroke={color} stroke-linecap="round"/>
        </svg>
    );
};
    
export default Bag;
  