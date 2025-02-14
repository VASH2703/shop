import { BtnAnchor, Gallery, Hl1, Offer, OfferCat } from "../UI";
import style from './main.module.css';
import { AccentRow } from "../UI/Gallery/gallery";
import { Category, Collection, Hits } from "../navigation";

export const Main = () => {
    
    return (
        <main className={style.main}>
            <Hl1>Коллекции</Hl1>
            <Gallery>
                {Collection.map((item) => (
                    <OfferCat name={item.name} key={item.name} imageSrc={item.imageSrc||''} href={item.href} collection/>
                ))}
            </Gallery>
            <section className={style.slogan}>
                <div className={style.description}>Украшения - это отличный способ подчеркнуть индивидуальность, стиль и творческий подход к моде</div>
                <img src="ring.png" className={style.img}/>
                <div className={style.description}>Со временем развития моды и искусства все больше стилей украшений появляется на свет</div>
            </section>
            <Hl1>Хит продаж</Hl1>
            <Gallery className={style.hits}>
                { Hits.map ((item) => (
                    <Offer name={item.name} price={item.price} imageSrc={item.imageSrc || ''} href={item.href} accent={item.accent}/>
                ))}
                <BtnAnchor href="/" className={style.toCat}>Перейти в каталог</BtnAnchor>
            </Gallery>
            <Hl1>Категории</Hl1>
            <Gallery column={3} gap='50px'>
                {Category.map((item) => (
                    !item.accent && (
                        <OfferCat name={item.name!} key={item.name!} imageSrc={item.imageSrc || ''} href={item.href} />
                    )))}
                <AccentRow oldColumn={3} newColumn={2} gap='50px'>
                    {Category.map((item) => (
                        item.accent && (
                            <OfferCat name={item.name!} key={item.name!} imageSrc={item.imageSrc || ''} href={item.href} />
                    )))}
                </AccentRow>
            </Gallery>
        </main>
    )
}