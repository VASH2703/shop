import { forwardRef} from 'react';
import classNames from 'classnames';
import style from './input.module.css';
import { InputProps, TextAreaProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, InputProps> ((props, ref ) => {
    const { error, className ='', ...also } = props;

    const stylesInput = classNames (
        style.input,
        className,
        {[style.error]: error}
    )
    return (
        <input
            {...also}
            type="text"
            className={stylesInput} 
            ref={ref}
        />
    );
});

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps> ((props, ref ) => {
    const { error, className ='', ...also } = props;

    const stylesInput = classNames (
        style.input,
        className,
        {[style.error]: error}
    )
    return (
        <textarea
            {...also}
            className={stylesInput} 
            ref={ref}
        />
    );
});


