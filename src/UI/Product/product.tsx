import { forwardRef, useState } from 'react';
import product from './product.module.css';
import productcart from './productcart.module.css';
import classNames from 'classnames';
import { ProductProps, ProductCartProps } from './product.types';
import { Close, Heart } from '../../svg';
import { Button } from '../Button';
import { CheckBox, Counter } from '../Inputs';
import Rating from './rating';
import { formatString } from '../../composition';


export const Product =  forwardRef <HTMLDivElement, Omit<ProductProps, 'id' | 'material' | 'category' | 'gemstone'>> ((props, ref) => {
    const { name, price, oldPrice, href, images, rating=0, favorite, className=''} = props;
    const style = product;
    return (
        <div className={classNames(style.block,{[className]: className})} ref={ref}>
            <div className={style.frame}>
                <a href={href} className={style.imgLink}>
                    <img src={images[0]} className={style.img}/>
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

export const ProductCart =  forwardRef <HTMLDivElement, ProductCartProps> ((props, ref) => {
    const { name, price, oldPrice, href, imageSrc, favorite=false, onChange, index, select, material, gemstone, className=''} = props;
    const style = productcart;

    const [fav, setFav] = useState<boolean>(favorite);

    const handleClick = () => {
        setFav(prev => !prev);
    }

    return (
        <div className={classNames(style.block,{[className]: className})} ref={ref}>
            <div className={style.left}>
                <CheckBox styleType='icon' value={index} checked={select} onChange={onChange}>{name}</CheckBox>
                <a href={href} className={style.imgLink}>
                    <img src={imageSrc} className={style.img}/>
                </a>
                <div className={style.info} >
                    <a className={style.name} href={href}>{name}</a>
                    <div>{formatString(gemstone)}</div>
                    <div>{formatString(material)}</div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.buttons}>
                    <Counter className={style.btn} min={1}/>
                    <Button styleType="close" className={style.iconBtn}>
                        <Close width={14} height={14}/>
                    </Button>
                    <button 
                        className={`${style.iconBtn} ${style.heart} ${fav ? style.favorite : ''}`}
                        onClick = {handleClick}
                    >
                        <Heart width={23} height={20}/>
                    </button>
                </div>
                <div className={style.buttons}>
                    <div className={style.oldPrice}>{oldPrice}</div>
                    <div className={style.price}>{price}</div>
                </div>
            </div>
        </div>
    );
})