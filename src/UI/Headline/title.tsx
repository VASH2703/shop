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

export const Title1 = forwardRef<HTMLDivElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <div {...props} className={`${style.h1} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} >
            {children}
        </div>
    );
});

export const Title2 = forwardRef<HTMLDivElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <div {...props} className={`${style.h2} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} >
            {children}
        </div>
    );
});

export const Title3 = forwardRef<HTMLDivElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <div {...props} className={`${style.h3} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} >
            {children}
        </div>
    );
});

export const Title4 = forwardRef<HTMLDivElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <div {...props} className={`${style.h4} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} >
            {children}
        </div>
    );
});

export const Title5 = forwardRef<HTMLDivElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <div {...props} className={`${style.h5} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} >
            {children}
        </div>
    );
});

export const Title6 = forwardRef<HTMLDivElement, HeadlineProps> ((props, ref) => {
    const {children, textAling, className} = props;
    return (
        <div {...props} className={`${style.h6} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} >
            {children}
        </div>
    );
});