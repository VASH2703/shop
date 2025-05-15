import { Gallery, Button, Hl1,  Product, Link, BtnAnchor} from "../UI";
import style from './favorite.module.css';
import { Arrow} from "../svg";
import hashId from "../hashId";
import { Catalog } from "../navigation";

export const Favorite = () => {
    const favorites = Catalog; //запрос избранного
    const empty = true; //проверка на пустой массив

    return (
        <main>
            <div className={style.title}>
                <Hl1>Избранное</Hl1>
                {!empty && (<Link className={style.del}>Удалить всё</Link>)}
            </div>
            {empty ?
                (<div className={style.empty}>
                    <div>Вы еще ничего не добавили. Посмотрите понравившийся вам товар из каталога</div>
                    <BtnAnchor className={style.toCatalog} href="/catalog">Перейти в каталог</BtnAnchor>
                </div>) :
                (<div>
                    <Gallery gap='50px' className={style.favorites}>
                        {favorites.map((item) => (
                            <Product
                                name={item.name}
                                oldPrice={item.oldPrice}
                                price={item.price}
                                rating={item.rating}
                                href={item.href}
                                images={item.images}
                                favorite={true} //
                                key={hashId()}
                            />
                        ))}
                    </Gallery>
                    <div className={style.pages}>
                        <Button styleType="arrow">
                            <Arrow angle={90}/>
                        </Button>
                        <Button styleType="arrow">
                            1
                        </Button>
                        <Button styleType="arrow">
                            2
                        </Button>
                        <Button styleType="arrow">
                            3
                        </Button>
                        <Button styleType="arrow">
                            <Arrow angle={270}/>
                        </Button>
                    </div>
                </div>)
            }
        </main>
    )
}