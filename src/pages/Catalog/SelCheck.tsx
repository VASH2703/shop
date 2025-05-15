import { CheckBox, RadioItem } from '../../UI';
import { forwardRef, useState, useRef, useCallback, useEffect, ChangeEvent, useMemo } from 'react';
import hashId from '../../hashId';
import { Arrow } from '../../svg';
import style from './selcheck.module.css';

interface SelCheckProps {
    title: string;
    options: Record<string, string>;
    name?: string;
    searchParams: URLSearchParams; 
    onChangeOther?: (value:string, filter: string) => void;
}

export const SelectCheck = forwardRef<HTMLDivElement, SelCheckProps> (( props, ref) => {
    
    const { title, options, name: propName, searchParams, onChangeOther } = props;
    const name = useMemo(() => propName || hashId(), [propName]);
    const checked = useMemo(() => searchParams.getAll(name), [searchParams, name]); //костыль
    
    const [states, setStates] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const x: { [key: string]: boolean } = {}; //инициализация checkboxes
        Object.keys(options).map(item => {
            x[item] = checked.includes(item); 
        });
        setStates(x);    
    },[checked, options]);
    

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const checked = event.target.checked;
        setStates((prevState) => ({
            ...prevState,
            [value]: checked,
        }));
        if (onChangeOther) {
            onChangeOther(value, name);
        }
    }, [name, onChangeOther]); //попробовать убрать 
    

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
    },[refList, refInput, handleClick]);

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
                
                {Object.entries(options).map(([key, value]) => (
                    <CheckBox 
                        className={style.option}
                        key={key}
                        styleType='naked'
                        value={key}
                        checked={states[key]}
                        onChange={handleChange}
                        onFocus={() => setVisible(true)} 
                    >
                        {value}
                    </CheckBox>
                ))}
            </div>
        </div>
    );
});


export const SelectRadio = forwardRef<HTMLDivElement, SelCheckProps> (( props, ref) => {
    const { title, options, name: propName, searchParams, onChangeOther } = props;

    const name = useMemo(() => propName || hashId(), [propName]);

    const [state, setState] = useState<string |undefined>();

    useEffect(() => {
        if (searchParams.get(name)) {
            setState(searchParams.get(name)!);
        }
    }, [searchParams, name]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (onChangeOther) {
            onChangeOther(value,name);
        }
        setState(value);
    }, [onChangeOther, name] );

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
    },[refList, refInput, handleClick]);

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
                {title} {state ? options[state] : ''} 
                <Arrow className={style.arrow} angle={visible ? 180 : 0} />
            </div>            
            <div ref={refList} className={`${visible ? style.open : ''} ${style.list}`} >
                {Object.entries(options).map(([key, value]) => (
                    <RadioItem 
                        className={style.option}
                        name={name}
                        key={key}
                        styleType='naked'
                        checked={state === key}
                        onChange={handleChange}
                        value={key}
                        onFocus={() => setVisible(true)} 
                    >
                        {value}
                    </RadioItem>
                ))}
            </div>
        </div>
    );
});
                        