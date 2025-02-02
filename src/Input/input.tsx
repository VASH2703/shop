import { forwardRef} from 'react';
import classNames from 'classnames';
import style from './input.module.css';
import { InputProps } from './input.types';

const Input = forwardRef<HTMLInputElement, InputProps> ((props, ref ) => {
    

    const stylesInput = classNames (
        style.input,
        {[style.error]: props.error,
        className: props.className}
    )
    return (
        <input
            type="text"
            className={stylesInput} 
            ref={ref} 
            {...props}
        />
    );
});

export default Input;


