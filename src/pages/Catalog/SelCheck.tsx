import { CheckBox, RadioItem } from '../../UI';
import { forwardRef, useState, useRef, useCallback, useEffect, ChangeEvent, useMemo } from 'react';
import hashId from '../../hashId';
import { Arrow } from '../../svg';
import style from './selcheck.module.css';

interface SelCheckProps {
    title: string;
    options: string[];
    name?: string;
}

export const SelectCheck = forwardRef<HTMLDivElement, SelCheckProps> (( props, ref) => {
    const { title, options, name: propName } = props;
    const name = useMemo(() => propName || hashId(), [propName]);

    const [states, setStates] = useState<{ [key: string]: boolean }>(() => {
        const x: { [key: string]: boolean } = {}; //инициализация checkboxes
        options.forEach(option => {
            x[option] = false; 
        });
        return x;
    });
    

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const checked = event.target.checked;
        setStates((prevState) => ({
            ...prevState,
            [value]: checked,
        }));
    }, []);
    

    const [ visible, setVisible ] = useState<boolean>(false); //видимость списка
    
    const refList = useRef<HTMLDivElement | null>(null); //для отслеживания out кликов
    const refInput = useRef<HTMLInputElement | null>(null); //для отслеживания out кликов (и потери фокуса)
    
    const handleClick = useCallback(() => { //выбор эл.
        setVisible(false);
        if (refInput.current) {
            refInput.current.blur();
        }
    },[refInput])

    const handleOutsideClick = useCallback((event: MouseEvent | TouchEvent | FocusEvent) => { //потеря фокуса
        if (refList.current && 
            refInput.current && 
            !refList.current.contains(event.target as Node) && //проверяет список
            event.target !== refInput.current) { //проверяет поле
            handleClick();
        }
    },[refList, refInput]);

    useEffect(() => { //Listenerы для обработки потери фокуса (мышь, клавиатура, сенсор)
        const mouseDownListener = (event: MouseEvent) => handleOutsideClick(event);
        const touchStartListener = (event: TouchEvent) => handleOutsideClick(event);
        const focusListener = (event: FocusEvent) => handleOutsideClick(event);
        if (visible) {
            document.addEventListener('mousedown', mouseDownListener);
            document.addEventListener('touchstart', touchStartListener);
            document.addEventListener('focusin', focusListener);
        }
        return () => {
            document.removeEventListener('mousedown', mouseDownListener);
            document.removeEventListener('touchstart', touchStartListener);
            document.removeEventListener('focusin', focusListener);
        };
    }, [visible, handleOutsideClick]);

    return (
        <div {...props} ref={ref} id={name} className={style.block} >
            <div
                tabIndex={0}
                ref={refInput}
                className={`${style.option} ${style.selected} `}
                onMouseDown={visible ? () => setVisible(false) : undefined} //танцы с бубном для закрытия
                onFocus={() => setVisible(true)} //открытие списка при фокусе(и, соот., клике)
                onClick={!visible ? ()=>handleClick() : undefined} //танцы с бубном для потери фокуса при закрытии
            >
                {title}
                <Arrow className={style.arrow} angle={visible ? 180 : 0} />
            </div>            
            <div ref={refList} className={`${visible ? style.open : ''} ${style.list}`} >
                
                {options.map((item, itemIndex) => (
                    <CheckBox 
                        className={style.option}
                        name={name}
                        key={name+' '+itemIndex}
                        styleType='naked'
                        checked={states[item]}
                        onChange={handleChange}
                        onFocus={() => setVisible(true)} 
                    >
                        {item}
                    </CheckBox>
                ))}
            </div>
        </div>
    );
});


export const SelectRadio = forwardRef<HTMLDivElement, SelCheckProps> (( props, ref) => {
    const { title, options, name: propName} = props;

    const name = useMemo(() => propName || hashId(), [propName]);

    const [state, setState] = useState<string | null>(null);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setState(value);
    }, []);

    const [ visible, setVisible ] = useState<boolean>(false); //видимость списка
    
    const refList = useRef<HTMLDivElement | null>(null); //для отслеживания out кликов
    const refInput = useRef<HTMLInputElement | null>(null); //для отслеживания out кликов (и потери фокуса)
    
    const handleClick = useCallback(() => { //выбор эл.
        setVisible(false);
        if (refInput.current) {
            refInput.current.blur();
        }
    },[refInput])

    const handleOutsideClick = useCallback((event: MouseEvent | TouchEvent | FocusEvent) => { //потеря фокуса
        if (refList.current && 
            refInput.current && 
            !refList.current.contains(event.target as Node) && //проверяет список
            event.target !== refInput.current) { //проверяет поле
            handleClick();
        }
    },[refList, refInput]);

    useEffect(() => { //Listenerы для обработки потери фокуса (мышь, клавиатура, сенсор)
        const mouseDownListener = (event: MouseEvent) => handleOutsideClick(event);
        const touchStartListener = (event: TouchEvent) => handleOutsideClick(event);
        const focusListener = (event: FocusEvent) => handleOutsideClick(event);
        if (visible) {
            document.addEventListener('mousedown', mouseDownListener);
            document.addEventListener('touchstart', touchStartListener);
            document.addEventListener('focusin', focusListener);
        }
        return () => {
            document.removeEventListener('mousedown', mouseDownListener);
            document.removeEventListener('touchstart', touchStartListener);
            document.removeEventListener('focusin', focusListener);
        };
    }, [visible, handleOutsideClick]);

    return (
        <div {...props} ref={ref} id={name} className={style.block} >
            <div
                tabIndex={0}
                ref={refInput}
                className={`${style.option} ${style.selected} `}
                onMouseDown={visible ? () => setVisible(false) : undefined} //танцы с бубном для закрытия
                onFocus={() => setVisible(true)} //открытие списка при фокусе(и, соот., клике)
                onClick={!visible ? ()=>handleClick() : undefined} //танцы с бубном для потери фокуса при закрытии
            >
                {title} {state} 
                <Arrow className={style.arrow} angle={visible ? 180 : 0} />
            </div>            
            <div ref={refList} className={`${visible ? style.open : ''} ${style.list}`} >
                {options.map((item, itemIndex) => (
                    <RadioItem 
                        className={style.option}
                        name={name}
                        key={name+' '+itemIndex}
                        styleType='naked'
                        checked={state === item}
                        onChange={handleChange}
                        onFocus={() => setVisible(true)} 
                    >
                        {item}
                    </RadioItem>
                ))}
            </div>
        </div>
    );
});