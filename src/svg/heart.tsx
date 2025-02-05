import SvgProps from "./types";

export const Heart = ({width = 33, height = 29, color='currentColor', className}: SvgProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 33 29" style={{ fill: `var(--heart-fill, none)`, strokeWidth: 'var(--stroke-width)' }} className={className} stroke={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M3.84216 16.276L15.6542 27.2061C15.9764 27.5043 16.1375 27.6534 16.3333 27.6534C16.5292 27.6534 16.6903 27.5043 17.0125 27.2061L28.8245 16.276C32.1235 13.2234 32.5227 8.14805 29.7416 4.61714L29.2938 4.04869C26 -0.133176 19.4653 0.575237 17.1442 5.36581C16.8159 6.04335 15.8507 6.04335 15.5225 5.36581C13.2013 0.575238 6.66666 -0.133177 3.37283 4.04869L2.92509 4.61714C0.14398 8.14805 0.543194 13.2234 3.84216 16.276Z"/>
        </svg>
    );
};
