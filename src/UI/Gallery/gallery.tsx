import { forwardRef } from 'react';
import style from './offer.module.css';
import classNames from 'classnames';
import { GalleryProps, OfferProps } from './gallery.types';

export const Offer =  forwardRef <HTMLAnchorElement, OfferProps> ((props, ref) => {
    const { price, name, href, imageSrc, accent = false, className=''} = props;

    const styleBlock = classNames (
        style.block,
        {[className]: className,
        [style.accent]: accent}
    )

    return (
        <a className={styleBlock} ref={ref} href={href}>
            <img src={imageSrc} className={style.img}></img>
            <div className={style.product} >
                <div className={style.info}>
                    <div className={style.price}>{price}</div>
                    {name && <div className={style.name}>{name}</div>}
                </div>
                <div className={style.link} >Перейти к товару</div>
            </div>
        </a>
    );
})

export const Gallery = forwardRef <HTMLDivElement, GalleryProps> ((props, ref) => {
    const { children, column = 4, gap='10px', className } = props;

    return (
        <div ref={ref} className={className} style={{ display: 'grid', gridTemplateColumns: `repeat(${column}, 1fr)`, gap: gap }}>
            {children}
        </div>
    );
})