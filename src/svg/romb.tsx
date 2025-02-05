import SvgProps from "./types";

export const Romb = ({width = 10, height = 15, color='currentColor', className}: SvgProps) => {
    return (
        <svg width={width} height={height} fill={color} viewBox="0 0 10 15" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M4.93552 15C5.25367 15 5.41546 14.7291 5.73904 14.1725L9.18987 8.335C9.34599 8.06406 9.43848 7.79281 9.43848 7.5C9.43848 7.19969 9.34599 6.93594 9.18987 6.665L5.73904 0.820312C5.41546 0.270938 5.25342 0 4.93552 0C4.62353 0 4.4615 0.270938 4.13792 0.820312L0.687079 6.665C0.530963 6.93594 0.438477 7.19969 0.438477 7.5C0.438477 7.79313 0.530963 8.06406 0.687079 8.335L4.13792 14.1725C4.4615 14.7288 4.62353 15 4.93552 15Z"/>
        </svg>
    );
};
