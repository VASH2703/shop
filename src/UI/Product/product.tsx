import { forwardRef } from 'react';
import style from './product.module.css';
import classNames from 'classnames';
import { ProductProps } from './product.types';
import { Close, Heart } from '../../svg';
import { Button } from '../Button';
import Rating from './rating';


export const Product =  forwardRef <HTMLDivElement, ProductProps> ((props, ref) => {
    const { name, price, oldPrice, href, imageSrc, rating=0, favorite, className=''} = props;

    return (
        <div className={classNames(style.block,{[className]: className})} ref={ref}>
            <div className={style.frame}>
                <a href={href} className={style.imgLink}>
                    <img src={imageSrc} className={style.img}/>
                </a>
                <button className={style.favorite}>
                    {favorite ? 
                    <Close/> :
                    <Heart/>}
                </button>
            </div>
            <Rating rating={rating}/>
            <div>
                <div className={style.oldPrice}>{oldPrice}</div>
                <div className={style.price}>{price}</div>
            </div>
            <a className={style.name} href={href}>{name}</a>
            <Button full>Добавить в корзину</Button>
        </div>
    );
})