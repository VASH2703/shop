import { forwardRef } from 'react';
import classNames from 'classnames';
import style from './link.module.css';
import { LinkProps, LinkBtnProps } from './link.types';

export const Link =  forwardRef<HTMLAnchorElement, LinkProps> ((props, ref) => {
    const { children, fontSize = "S", fill, icon, className='', ...also } = props;

    const sizeMap = {
        XS: style.xs,
        S: style.s,
        M: style.m,
        L: style.l,
        XL: style.xl
    };
    
    const buttonClasses = classNames (
        style.link,
        sizeMap[fontSize],
        {[style.fill]: fill,
        [style.icon]: icon,
        [className]: className}
    );
    
    return (
        <a
            {...also}
            className={buttonClasses}
            ref={ref}
        >
            {children}
        </a>
    )
})

export const LinkBtn =  forwardRef<HTMLButtonElement, LinkBtnProps> ((props, ref) => {
    const { children, fontSize = "S", fill, icon, className='', ...also } = props;

    const sizeMap = {
        XS: style.xs,
        S: style.s,
        M: style.m,
        L: style.l,
        XL: style.xl
    };
    
    const buttonClasses = classNames (
        style.link,
        sizeMap[fontSize],
        {[style.fill]: fill,
        [style.icon]: icon,
        [className]: className}
    );
    
    return (
        <button
            {...also}
            className={buttonClasses}
            ref={ref}
        >
            {children}
        </button>
    )
})