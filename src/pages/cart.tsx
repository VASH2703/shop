import { useMemo, useState, ChangeEvent } from 'react';
import { Button, Hl1, Link, BtnAnchor, CheckBox, ProductCart, LinkBtn} from "../UI";
import style from './cart.module.css';
import { ProductExample } from "../navigation";
import Cheque from './Catalog/cheque';

export const Cart = () => {
    const items = [ProductExample, ProductExample, ProductExample];
    const [empty, setEmpry] = useState<boolean>(false);
    const [select, setSelect] = useState<boolean[]>(Array(items.length).fill(false));

    const cleanPrice = (price: string): number => {
        const cleanedPrice = price.replace(/[^\d]/g, '');
        return parseFloat(cleanedPrice);
    };

    const count = useMemo(() => items.length, [items]);

    const fullSum = useMemo(() => {
        return items.reduce((total, item) => {
            const fullPrice = cleanPrice(item.oldPrice || item.price);
            return total + fullPrice;
        }, 0);
    },[items]);

    const discount = useMemo(() => {
        return items.reduce((total, item) => {
            if (item.oldPrice) {
                const oldPrice = cleanPrice(item.oldPrice);
                const price = cleanPrice(item.price);
            return total + (oldPrice-price);
            }
            return total;
        }, 0);
    },[items]);

    const resSum = useMemo(() => {
        return items.reduce((total, item) => {
            const price = cleanPrice(item.price);
            return total + price;
        }, 0);
    },[items]);

    const allSelect = (event: ChangeEvent<HTMLInputElement>) => {
        setSelect(Array(select.length).fill(event.target.checked));
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const index = parseInt(event.target.value);
        console.log(event.target.value);
        setSelect(prev =>
            prev.map((item, i) => (i === index ? event.target.checked : item))
        );
    }


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
                            <CheckBox onChange={allSelect}>Выбрать всё</CheckBox>
                            <LinkBtn fontSize='XS'>Удалить выбранное</LinkBtn>
                        </div>
                        <div className={style.list}>
                            {items.map((item,index) => (
                                <ProductCart
                                    name={item.name}
                                    href={item.href}
                                    price={item.price}
                                    oldPrice={item.oldPrice}
                                    imageSrc={item.images[0]}
                                    gemstone={item.gemstone}
                                    material={item.material}
                                    favorite={item.favorite}
                                    select={select[index]}
                                    index={index}
                                    onChange={onChange}
                                />
                            ))}
                        </div>
                        <LinkBtn fontSize='XS'>Очистить корзину</LinkBtn>
                    </div>
                    <Cheque 
                        fullsum={fullSum}
                        discount={discount}
                        sum={resSum}
                        count={count}
                        buttons={[{name: 'Оформить заказ'}]}
                    />
                </div>
            )}
        </main>
    )
}