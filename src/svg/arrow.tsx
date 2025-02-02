interface ArrowProps {
    width?: number;
    height?: number;
    angle?: number;
    color?: string;
    className?: string;
}

export const Arrow = ({width = 16, height = 8, angle, color='currentColor', className}: ArrowProps) => {
    return (
        <svg className={className} transform= {angle ? `rotate(${angle} 0 0)` : undefined} width={width} height={height} viewBox="0 0 16 8" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.498901C0 0.372334 0.0537038 0.242824 0.157937 0.145694C0.366403 -0.0485649 0.707533 -0.0485649 0.915999 0.145694L8.05448 6.79473L15.0856 0.242824C15.294 0.0485654 15.6352 0.0485654 15.8437 0.242824C16.0521 0.437082 16.0521 0.75495 15.8437 0.949208L8.43354 7.85431C8.22507 8.04856 7.88392 8.04856 7.67546 7.85431L0.157952 0.852079C0.0537195 0.75495 3.12777e-05 0.625468 3.12777e-05 0.498887L0 0.498901Z"/>
        </svg>
    );
};
