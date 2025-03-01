import { forwardRef } from 'react';
import { HeadlineProps } from './headline.types';
import aling from './aling.module.css';
import style from './headline.module.css';

const alingMap = {
    start: aling.start,
    center: aling.center,
    end: aling.end,
    justify: aling.justify,
};

export const Hl1 = forwardRef<HTMLHeadingElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <h1 {...props} className={ `${className || ''} ${style.h1} ${textAling ? alingMap[textAling] : ''}`} ref={ref} >
            {children}
        </h1>
    );
});

export const Hl2 = forwardRef<HTMLHeadingElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <h2 {...props} className={ `${className || ''} ${style.h2} ${textAling ? alingMap[textAling] : ''}`} ref={ref} >
            {children}
        </h2>
    );
});

export const Hl3 = forwardRef<HTMLHeadingElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <h3 {...props} className={ `${className || ''} ${style.h3} ${textAling ? alingMap[textAling] : ''}`} ref={ref} >
            {children}
        </h3>
    );
});

export const Hl4 = forwardRef<HTMLHeadingElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <h4 {...props} className={ `${className || ''} ${style.h4} ${textAling ? alingMap[textAling] : ''}`} ref={ref} >
            {children}
        </h4>
    );
});

export const Hl5 = forwardRef<HTMLHeadingElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <h5 {...props} className={ `${className || ''} ${style.h5} ${textAling ? alingMap[textAling] : ''}`} ref={ref} >
            {children}
        </h5>
    );
});

export const Hl6 = forwardRef<HTMLHeadingElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <h6 {...props} className={ `${className || ''} ${style.h6} ${textAling ? alingMap[textAling] : ''}`} ref={ref} >
            {children}
        </h6>
    );
});