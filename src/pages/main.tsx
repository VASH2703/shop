import { BtnAnchor, Gallery, Hl1, Link, Offer, OfferCat } from "../UI";
import { Romb, Map } from '../svg';
import { MapProps } from "../data.types";
import style from './main.module.css';
import { AccentRow } from "../UI/Gallery/gallery";

interface HeaderProps {
    title: string;
    nav: MapProps;
    buttons: MapProps;
    adress: string;
}

export const Main = () => {
    
    return (
        <main>
            <Hl1>Коллекции</Hl1>
            <Gallery>
                <OfferCat name='“MINIMAL”' imageSrc="collection1.png" href="/" collection/>
                <OfferCat name='“NEW LOOK”' imageSrc="collection2.png" href="/" collection/>
                <OfferCat name='“TREND”' imageSrc="collection3.png" href="/" collection/>
                <OfferCat name='“CLOUDS”' imageSrc="collection4.png" href="/" collection/>
            </Gallery>
            <section className={style.slogan}>
                <div className={style.description}>Украшения - это отличный способ подчеркнуть индивидуальность, стиль и творческий подход к моде</div>
                <img src="ring.png" className={style.img}/>
                <div className={style.description}>Со временем развития моды и искусства все больше стилей украшений появляется на свет</div>
            </section>
            <Hl1>Хит продаж</Hl1>
            <Gallery className={style.hits}>
                <Offer name='Кольцо из белого золота с бриллиантами' price='44 000 ₽' imageSrc="image1.png" href="/" accent/>
                <Offer price='44 000 ₽' imageSrc="image.png" href="/"/>
                <Offer price='44 000 ₽' imageSrc="image.png" href="/" />
                <BtnAnchor href="/" className={style.toCat}>Перейти в каталог</BtnAnchor>
            </Gallery>
            <Hl1>Категории</Hl1>
            <Gallery column={3} gap='50px'>
                <OfferCat name='Подвески' imageSrc="cat1.png" href="/"/>
                <OfferCat name='Кольца' imageSrc="cat2.png" href="/"/>
                <OfferCat name='Серьги' imageSrc="cat3.png" href="/"/>
                <OfferCat name='Цепи' imageSrc="cat4.png" href="/"/>
                <OfferCat name='Браслеты' imageSrc="cat5.png" href="/"/>
                <OfferCat name='Пирсинг' imageSrc="cat6.png" href="/"/>
                <AccentRow oldColumn={3} newColumn={2} gap='50px'>
                    <OfferCat name='Запонки' imageSrc="cat7.png" href="/"/>
                    <OfferCat name='Броши' imageSrc="cat8.png" href="/"/>
                </AccentRow>
            </Gallery>
        </main>
    )
}