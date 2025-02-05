import { forwardRef } from 'react';
import style from './offercat.module.css';
import classNames from 'classnames';
import { OfferCatProps } from './gallery.types';
import { LongArrow } from '../../svg/';

export const OfferCat =  forwardRef <HTMLDivElement, OfferCatProps> ((props, ref) => {
    const { name, href, imageSrc, collection = false, className=''} = props;

    return (
        <div className={classNames(style.block,{[className]: className})} ref={ref}>
            <a className={style.frame} href={href}>
                <img src={imageSrc} className={style.img}/>
                <div className={style.info} > 
                    <div className={style.link}>
                        {`Перейти ${ collection ? 'к коллекции' : 'в категорию'}`}
                        <LongArrow/> 
                    </div>
                </div>
            </a>   
            <a href={href} className={classNames(style.name,{[style.collection]: collection})}>{name}</a>
        </div>
    );
})