
import { Hl1,  Hl4,  Input, Button} from "../UI";
import style from './checkorder.module.css';
import { Delivery, Status } from '../svg';

export const CheckOrder = () => {
    const error = false;

    return (
        <main>
            <Hl1>Проверить статус заказа</Hl1>
            <div className={style.content} >
                <div className={style.search}>
                    <Input placeholder='Введите номер заказа'/>
                    <Button>Поиск</Button>
                </div>
                {error ?
                    <div className={style.notFound}>
                        Заказ с таким номером не найден.<br/>
                        Проверьте правильность номера, или позвоните по телефону поддержки 8 000 000 00 00
                    </div>
                    :
                    <div>
                        <Hl4>Заказ №000000000</Hl4>
                        <div className={style.getting}>
                            <div className={style.icon}>
                                <Delivery color={"var(--accent)"}/>
                            </div>
                            <div className={style.info}>
                                <div>Ожидаемая дата доставки: 02.02.2024</div>
                                <div>Доставка курьером</div>
                            </div>
                        </div>
                        <div className={style.status}>
                            <span>
                                <Status checked={true} />
                                <div>Принят</div>
                            </span>
                            <span>
                                <Status checked={true}/>
                                <div>В обработке</div>
                            </span>
                            <span>
                                <Status checked={false}/>
                                <div>Отправлен</div>
                            </span>
                            <span>
                                <Status checked={false}/>
                                <div>Доставлен</div>
                            </span>
                        </div>
                        <div className={style.about}>
                            <table className={`${style.simple} ${style.twice}`}>
                                <th>О заказе</th>
                                <tr>
                                    <td>Товаров без учета скидки (2 шт)</td>
                                    <td>999 990 ₽</td>
                                </tr>
                                <tr>
                                    <td>Скидка</td>
                                    <td>999 990 ₽</td>
                                </tr>
                                <tfoot>
                                    <tr>
                                        <td>ИТОГО</td>
                                        <td>999 990 ₽</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <table className={style.simple}>
                                <th>Тип доставки</th>
                                <tr>Доставка курьером</tr>
                            </table>
                            <table className={style.simple}>
                                <th>Адрес доставки</th>
                                <tr>Москва, ул.Комсомолская, д.5, кв 156</tr>
                            </table>
                            <table className={style.simple}>
                                <th>Оплата</th>
                                <tr>Оплачен картой</tr>
                            </table>
                            <table className={style.simple}>                                
                                <th>Дата заказа</th>
                                <tr>31.01.2024</tr>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}