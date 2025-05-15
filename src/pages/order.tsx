import { ChangeEvent, useState } from 'react';
import { Hl1,  Hl4,  Input, Link, RadioItem, Select} from "../UI";
import Cheque from "./Catalog/cheque";
import style from './order.module.css';

export const Order = () => {

    const [obtain, setObtain] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const index = parseInt(event.target.value);
        setObtain(index);
    }

    return (
        <main>
            <Hl1>Оформление заказа</Hl1>
            <div className={style.content} >
                <div className={style.form}>
                    <Hl4>1. Способ получения</Hl4>
                    <div className={style.delivery}>
                        <RadioItem styleType="pricebtn" value={'0'} checked={obtain === 0} className="full" name="order" onChange={handleChange}>Курьерская доставка</RadioItem>
                        <RadioItem styleType="pricebtn" value={'1'} checked={obtain === 1} className="full" name="order" onChange={handleChange}>Магазины и пункты выдачи</RadioItem>
                    </div>
                    {obtain === 0 ?
                        <div className={style.section}>
                            <Input placeholder="Область*"/>
                            <Input placeholder="Город*"/>
                            <Input placeholder="Улица*"/>
                            <Input placeholder="Дом*"/>
                            <Input placeholder="Квартира*"/>
                            <Input placeholder="Индекс*"/>
                            <Input placeholder="Комментарий курьеру"/>
                        </div> :
                        <div className={style.section}>
                            <Select allowinput values={['Магазин, ул. Пушкина д. 25', 'Склад, ул. Терентьева д. 103', 'Пункт выдачи, ул. Чапаева д. 13']}/>
                        </div> }
                    <Hl4>2. Ваши данные</Hl4>
                    <div className={style.section}>
                        <Input placeholder="Имя*"/>
                        <Input placeholder="Фамилия*"/>
                        <Input placeholder="Почта*"/>
                        <Input placeholder="Номер телефона*"/>
                    </div>
                    <Hl4>3. Способ оплаты</Hl4>
                    <div className={style.payment}>
                        <RadioItem name="payment">Картой онлайн</RadioItem>
                        <RadioItem name="payment">СБП</RadioItem>
                    </div>
                    <div className='hr'/>
                    <div className={style.note}>Поля отмеченные звездочкой, обязательные для заполнения </div>
                </div>
                <Cheque
                    fullsum={999990}
                    discount={599994}
                    count={2}
                    sum={399996}
                    buttons={[{name: 'Заказать'}, {name: 'Вернуться в корзину'},]}
                />
            </div>
        </main>
    )
}