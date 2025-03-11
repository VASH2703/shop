import { ChangeEvent, forwardRef, useState} from 'react';
import classNames from 'classnames';
import style from './counter.module.css';
import { CounterProps } from './counter.types';

const Counter = forwardRef<HTMLDivElement, CounterProps> ((props, ref ) => {
    const {min=0, max, step=1, input, className=''} = props;

    const [value, setValue] = useState<number>(min);

    const inc = () => {
        const newValue = value+step;
        if (!max || newValue<=max) {
            setValue(newValue);
        }
    }

    const dec = () => {
        const newValue = value-step;
        console.log(min);
        if (newValue>=min) {
            setValue(newValue);
        }
    }

    const hundleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(event.target.value);
        if (isNaN(newValue)) {
            setValue(min);
        }
        if (!isNaN(newValue) && (newValue>=min) && (!max || newValue<=max)) {
            setValue(newValue);
        }
    }
    const stylesInput = classNames (
        style.input,
        {[className]: className}
    )
    return (
        <div {...props} ref={ref} className={style.block} >
            <button onClick={dec} className={style.btn+' '+style.dec}>-</button>
            <input
                type="text"
                className={stylesInput} 
                disabled={!input}
                value={value}
                onChange={input ? hundleChange : undefined}
            />
            <button onClick={inc} className={style.btn+' '+style.inc}>+</button>
        </div>
    );
});

export default Counter;