import { Button, Gallery, Hl1, Link, Product, RadioItem } from "../UI";
import hashId from "../hashId";
import { Catalog, Category } from "../navigation";
import { Arrow} from "../svg";
import { SelectCheck, SelectRadio } from "./Catalog/SelCheck";
import style from './catalog.module.css'

export const CatalogPage = () => {

    return (
        <main>
            <div className='nav'>
                <Link fontSize="XS" href='/' className='prev'>Главная</Link>
                /
                <Link fontSize="XS" href='/'>Каталог</Link>
            </div>
            <Hl1>Каталог</Hl1>
            <div className={style.category}>
                <RadioItem name="category"styleType="catbtn" className={style.btncat}> Все </RadioItem>
                {Category.map((item) => (
                    <RadioItem name="category" styleType="catbtn" className={style.btncat} key={item.name}> {item.name} </RadioItem>
                ))}
            </div>
            <div className={style.filtersort}>
                <div className={style.filters}>
                    <SelectCheck title='Материал' options={['Золото', 'Серебро','Титан','Медицинская сталь']}/>
                    <SelectCheck title='Драгоценный камень' options={['Бриллиант', 'Жемчуг','Фианит']}/>
                </div>
                <div>
                    <SelectRadio title='Сортировать по:' options={['цена по возрастанию', 'цена по убыванию','в алфавитном порядке']}/>
                </div> 
            </div>
            <Gallery gap='50px'>
                {Catalog.map((item) => (
                    <Product
                        name={item.name}
                        oldPrice={item.oldPrice}
                        price={item.price}
                        rating={item.rating}
                        href={item.href}
                        imageSrc={item.imageSrc}
                        favorite={item.favorite}
                        key={hashId()}
                    />
                ))}
            </Gallery>
            <div className={style.bottom}>
                <div className={style.count}>Найдено {130} товаров</div>
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
            </div>
        </main>
    )
}