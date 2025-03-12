import { BtnAnchor } from "../../UI";
import style from './cheque.module.css';
import { memo } from 'react';

interface ButtonProps {
    name: string;
    href?: string;
    onClick?: () => void;
}

interface ChequeProps {
    fullsum: number;
    discount: number;
    sum: number;
    count: number;
    buttons: ButtonProps[];
}

const Cheque = ({fullsum: fs, discount: dc, sum: rs, count, buttons}:  ChequeProps) => {

    const fullsum = fs.toLocaleString('ru-RU')+" ₽";
    const discount = dc.toLocaleString('ru-RU')+" ₽";
    const sum = rs.toLocaleString('ru-RU')+" ₽";

    return (
        <div className={style.block}>
            <div>
                <div className={style.row}>
                    <label>Сумма без учета скидки ({count} шт)</label>
                    <span>{fullsum}</span>
                </div>
                <div className={style.row}>
                    <label>Скидка</label>
                    <span>{discount}</span>
                </div>
            </div>
            <div className='hr'/>
            <div className={`${style.row} ${style.result}`}>
                <label>ИТОГО</label>
                <span>{sum}</span>
            </div>
            <div className={style.buttons}>
            {buttons.map((item) => (
                <BtnAnchor href={item.href} onClick={item.onClick} className="full">{item.name}</BtnAnchor>
            ))}
            </div>
        </div>
    )
}

export default memo(Cheque);