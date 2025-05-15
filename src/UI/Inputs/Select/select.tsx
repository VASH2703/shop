import { forwardRef, useState, useRef, useEffect, ChangeEvent, KeyboardEvent, useCallback } from 'react';
import hashId from '../../../hashId';
import select from './select.module.css';
import inselect from './inselect.module.css';
import { SelectProps } from './select.types';
import { Arrow } from '../../../svg';

const Select = forwardRef<HTMLDivElement, SelectProps> (( props, ref) => {
    
    const { hint, disabled, values, name = hashId(), index, allowinput, className='' } = props;
    const style = allowinput ? inselect : select; //select с поиском или без

    const [ value, setValue ] = useState<string>(index ? values[index] : (!hint ? values[0] : ''));
    const [ visibleValues, setVisibleValues] = useState<string[]>(values); //сорт. список эл.

    const [ visible, setVisible ] = useState<boolean>(false); //видимость списка
    const [ selIndex, setSelIndex] = useState<number>(-1); //для выбора через клавиатуру
    
    const refList = useRef<HTMLDivElement | null>(null); //для отслеживания out кликов
    const refInput = useRef<HTMLInputElement | null>(null);//для отслеживания out кликов (и потери фокуса)
    
    const handleClick = useCallback((x?: number|undefined) => { //выбор эл.
        if (x !== undefined) {
            setValue(visibleValues[x]);
        } 
        setVisible(false);
        setSelIndex(-1);
        if (refInput.current) {
            refInput.current.blur();
        }
    },[visibleValues, refInput])

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {//сорт. списка через input
        const lowValue=event.target.value.toLowerCase();
        setValue(event.target.value);
        const newSet = values.filter((item) => item.toLowerCase().includes(lowValue));
        setVisibleValues(newSet);
    },[values]);

    const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => { //переключение через клавиатуру
        if (event.key === 'ArrowUp') {
            setSelIndex((prevIndex) => Math.max(0, prevIndex - 1));
        } else if (event.key === 'ArrowDown') {
            setSelIndex((prevIndex) => Math.min(visibleValues.length - 1, prevIndex + 1));
        } else if (event.key === 'Enter') {
            handleClick(selIndex);
        }
    },[visibleValues,handleClick,selIndex]);

    const handleOutsideClick = useCallback((event: MouseEvent | TouchEvent | FocusEvent) => { //потеря фокуса
        if (refList.current && 
            refInput.current && 
            !refList.current.contains(event.target as Node) && //проверяет список
            event.target !== refInput.current) { //проверяет поле
            handleClick(allowinput ? 0 : undefined);
        }
    },[refList, refInput, allowinput, handleClick]);

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
        <div {...props} ref={ref} id={name} className={`${style.block} ${className}`} >
            <input
                ref={refInput}
                type="text"
                className={`${style.option} ${style.selected} `}
                name={name}
                placeholder={hint}
                value={value}
                disabled={disabled}
                onKeyDown={!disabled&&visible ? handleKeyDown : undefined}
                onChange={allowinput&&!disabled ? handleChange : () =>{}}
                onMouseDown={!disabled&&visible ? () => setVisible(false) : undefined} //танцы с бубном для закрытия
                onFocus={!disabled ? () => setVisible(true) : undefined} //открытие списка при фокусе(и, соот., клике)
                onClick={!disabled&&!visible ? ()=>handleClick() : undefined} //танцы с бубном для потери фокуса при закрытии
            />
            <Arrow className={style.arrow} angle={visible ? 180 : 0} width={allowinput ? 13 : 16} height={8}/>
            
            <div ref={refList} className={`${visible ? style.open : ''} ${style.list}`} >
                
                {visibleValues.map((item, itemIndex) => (
                    <div 
                        className={itemIndex===selIndex ? style.sel : ''}
                        id={name+' '+itemIndex} 
                        onClick={!disabled&&visible ? () => handleClick(itemIndex) : undefined}
                        key={name+' '+itemIndex} 
                    >
                        {item}
                    </div>
                ))}
                {allowinput && <div className={style.shadow}></div>/*танцы с бубном для корректного отображения тени*/} 
            </div>
        </div>
    );
});


export default Select;