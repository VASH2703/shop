import { useState, MouseEvent, useMemo } from "react";
import { useParams } from 'react-router-dom';

import { Button, Counter, Gallery, Product, Title3, Title6, LinkBtn, Rating, Hl3 } from "../UI";
import hashId from "../hashId";
import { Catalog, ProductExample } from "../navigation";
import { Arrow, Heart, Close} from "../svg";
import style from './product.module.css'
import { formatString } from "../composition";

export const ProductPage = () => {
    const { productId } = useParams();

    const product = Catalog.find(item => item.id === productId) || ProductExample;

    //const product = ProductExample; //сделать запрос из базы данных
    
    const count = useMemo(() => (product.images.length >= 5 ? 5 : product.images.length), [product.images.length]);
    const [ selectPhoto, setSelectPhoto ] = useState<number>(0);
    const [ headPhoto, setHeadPhoto ] = useState<number>(0);

    const handlePhotoClick = (e: MouseEvent) => {
        const index = +e.currentTarget.id;
        setSelectPhoto(index);
    };

    const prev = (prevIndex: number, length: number) => {
        
        return prevIndex === 0 ? length - 1 : prevIndex - 1;
        
    };
    
    const next = (prevIndex: number, length: number) => {
        return prevIndex === length - 1 ? 0 : prevIndex + 1
    };

    const getVisibleIndices = (head: number, max: number) => {
        const visibleIndices: number[] = [];
        for (let i = 0; i < max ; i++) {
          const index = (head + i) % product.images.length;
          visibleIndices.push(index);
        }
        return visibleIndices;
    };

    const prevPhoto = () => {
        setHeadPhoto(prev(headPhoto, product.images.length));
    }
    
    const nextPhoto = () => {
        setHeadPhoto(next(headPhoto, product.images.length));
    }

    const getVisiblePhotos = () => {
        return getVisibleIndices(headPhoto, count);
    }

    const visiblePhotos = getVisiblePhotos();

    const [ headSame, setHeadSame ] = useState<number>(0);

    const prevSame = () => {
        setHeadSame(prev(headSame, Catalog.length));
    };
    
    const nextSame = () => {
        setHeadSame(next(headSame, Catalog.length));
    };

    const getVisibleSame = () => {
        return getVisibleIndices(headSame, 4);
    };

    const visibleSame = getVisibleSame();

    return (
        <main>
            <Gallery gap='50px' column={2} className={style.product}>
                <div className={style.flex}>
                    <div className={`${style.photos} ${count < 5 ? style.few : ''}`}>
                        {count === 5 && <LinkBtn onClick={prevPhoto}>
                            <Arrow angle={180} width={24} height={13}/>
                        </LinkBtn>}
                        {visiblePhotos.map((index) => (
                            <img
                                key={product.images[index]}
                                src={product.images[index]}
                                id={`${index}`}
                                alt={product.name}
                                onClick={handlePhotoClick}
                            />
                        ))}
                        {count === 5 && <LinkBtn onClick={nextPhoto}>
                            <Arrow width={24} height={13}/>
                        </LinkBtn>}
                    </div>
                    <div className={style.sel}>
                        <img src={product.images[selectPhoto]} className={style.img} alt={product.name}/>
                        <button className={style.favorite}>
                            {product.favorite ? 
                            <Close/> :
                            <Heart/>}
                        </button>
                    </div>
                </div>
                <div className={style.info}>
                    <Title3>{product.name}</Title3>
                    {product.collection && <Title6 className={style.collection}>{'Коллекция: '+product.collection}</Title6>}
                    <Rating rating={product.rating || 0} />
                    <Counter/>
                    <div className={style.prices}>
                        <div className={style.price}> {product.price}</div>
                        {product.oldPrice && <div className={style.oldPrice}> {product.oldPrice}</div> }
                    </div>
                    <Button className={style.btn}>Добавить в корзину</Button>
                    <div className={style.characteries}>
                        <div> {formatString(product.material)} </div>
                        <div> {formatString(product.gemstone)} </div>
                        {product.characteries && Object.entries(product.characteries).map(([key, value]) => (
                            <div key = {key}>
                                {key}: {value}
                            </div>
                        ))}
                    </div>
                </div>
            </Gallery>
            <Hl3 className={style.same}>Похожие товары:</Hl3>
            <Gallery gap={"50px"} className={style.sameList}>
                {Catalog.length > 4 &&<LinkBtn onClick={prevSame} className={style.prev}>
                    <Arrow angle={90} width={24} height={13}/>
                </LinkBtn>}
                {visibleSame.map((index) => (
                    <Product
                        name={Catalog[index].name}
                        oldPrice={Catalog[index].oldPrice}
                        price={Catalog[index].price}
                        rating={Catalog[index].rating}
                        href={Catalog[index].href}
                        images={Catalog[index].images}
                        favorite={Catalog[index].favorite}
                        key={hashId()}
                    />
                ))}
                {Catalog.length > 4 && <LinkBtn onClick={nextSame} className={style.next}>
                    <Arrow width={24} height={13} angle={270}/>
                </LinkBtn>}
            </Gallery>
        </main>
    )
}