import { Button, Hl1,  Hl5, RadioItem, Title1, Title3 } from "../UI";
import style from './sertificate.module.css';
import hashId from "../hashId";

export const Sertificate = () => {

    const Prices = ['50 000 ₽', '100 000 ₽', '200 000 ₽'];

    return (
        <main>
            <Hl1>Подарочные сертификаты</Hl1>
            <div className={style.card}>
                <div className={style.img}>
                    <Title1>CRYSTAL</Title1>
                </div>
                <div className={style.product}>
                    <Title3>Подарочная карта CRYSTAL</Title3>
                    <div>
                    <Hl5>Выберите наминал</Hl5>
                        <div className={style.prices}>
                            {Prices.map ((item) => (
                                <RadioItem
                                    styleType="pricebtn"
                                    name='price'
                                    key={hashId()}
                                >
                                    {item}
                                </RadioItem>
                            ))}
                        </div>
                    </div>
                    <div>
                        После оплаты подарочной карты получателю придет письмо со ссылкой для его установки в Wallet. Вы можете воспользоваться картой в течение года с момента получения.
                    </div>
                    <Button>Добавить в корзину</Button>
                </div>
            </div>
        </main>
    )
}