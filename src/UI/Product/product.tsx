import { forwardRef, useMemo } from 'react';
import style from './product.module.css';
import classNames from 'classnames';
import { ProductProps } from './product.types';
import { Close, Heart } from '../../svg';
import { Star } from '../../svg';
import { Button } from '../Button';

export const Product =  forwardRef <HTMLDivElement, ProductProps> ((props, ref) => {
    const { name, price, oldPrice, href, imageSrc, rating=0, favorite, className=''} = props;

    const drawRating = useMemo(() => {
        let res = [];
        for (let i = 0; i < 5; i++) {
            if (i<rating) {
                if (i+1<rating) {
                    res.push(<Star key={i} procent={100}/>); 
                }
                else {
                    const fractionalPart=(rating % 1 * 100);
                    res.push(<Star key={i} procent={fractionalPart} />);
                }
            }
            else {
                res.push(<Star key={i} procent={0}/>); 
            }
        }
        return <div className={style.rating}>{res}</div>;
    },[rating])



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
            {drawRating}
            <div>
                <div className={style.oldPrice}>{oldPrice}</div>
                <div className={style.price}>{price}</div>
            </div>
            <a className={style.name} href={href}>{name}</a>
            <Button full>Добавить в корзину</Button>
        </div>
    );
})