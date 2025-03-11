import { useMemo, useState } from 'react';
import { Button, Hl1, Link, BtnAnchor, CheckBox, ProductCart, LinkBtn} from "../UI";
import style from './cart.module.css';
import { ProductExample } from "../navigation";

export const Cart = () => {
    const items = [ProductExample, ProductExample, ProductExample];
    const [empty, setEmpry] = useState<boolean>(false);

    const cleanPrice = (price: string): number => {
        const cleanedPrice = price.replace(/[^\d]/g, '');
        return parseFloat(cleanedPrice);
    };

    const count = useMemo(() => items.length, [items]);

    const fullSum = useMemo(() => {
        const res = items.reduce((total, item) => {
            const fullPrice = cleanPrice(item.oldPrice || item.price);
            return total + fullPrice;
        }, 0);
        return res.toLocaleString('ru-RU')+" ₽";
    },[items]);

    const discount = useMemo(() => {
        const res = items.reduce((total, item) => {
            if (item.oldPrice) {
                const oldPrice = cleanPrice(item.oldPrice);
                const price = cleanPrice(item.price);
            return total + (oldPrice-price);
            }
            return total;
        }, 0);
        return res.toLocaleString('ru-RU')+" ₽";
    },[items]);

    const resSum = useMemo(() => {
        const res = items.reduce((total, item) => {
            const price = cleanPrice(item.price);
            return total + price;
        }, 0);
        return res.toLocaleString('ru-RU')+" ₽";
    },[items]);


    return (
        <main>
            <div className='nav'>
                <Link fontSize="XS" href='/' className='prev'>Главная</Link>
                /
                <Link fontSize="XS" href='/'>Корзина</Link>
            </div>
            <Hl1>Корзина</Hl1>
            {empty ? 
                (<div className={style.empty}>
                    <div>Вы еще ничего не добавили. Посмотрите понравившийся вам товар из каталога</div>
                    <BtnAnchor className={style.toCatalog} href="/">Перейти в каталог</BtnAnchor>
                </div>) :
                (<div className={style.content}>
                    <div className={style.items}>
                        <div className={style.row}>
                            <CheckBox>Выбрать всё</CheckBox>
                            <LinkBtn fontSize='XS'>Удалить выбранное</LinkBtn>
                        </div>
                        <div className={style.list}>
                            {items.map((item) => (
                                <ProductCart
                                    name={item.name}
                                    href={item.href}
                                    price={item.price}
                                    oldPrice={item.oldPrice}
                                    imageSrc={item.images[0]}
                                    gemstone={item.gemstone}
                                    material={item.material}
                                    favorite={item.favorite}
                                />
                            ))}
                        </div>
                        <LinkBtn fontSize='XS'>Очистить корзину</LinkBtn>
                    </div>
                    <div className={style.sum}>
                        <div>
                            <div className={style.row}>
                                <span>Сумма без учета скидки ({count} шт)</span>
                                <span>{fullSum}</span>
                            </div>
                            <div className={style.row}>
                                <span>Скидка</span>
                                <span>{discount}</span>
                            </div>
                        </div>
                        <div className={style.hr}/>
                        <div className={`${style.row} ${style.result}`}>
                            <span>ИТОГО</span>
                            <span>{resSum}</span>
                        </div>
                        <Button className="full">Оформить заказ</Button>
                    </div>
                    
                </div>
            )}
        </main>
    )
}