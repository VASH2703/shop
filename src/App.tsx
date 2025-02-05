import './App.css';
import { Footer } from './Footer';
import { Arrow, Close, Heart, Map, Search, Bag } from './svg';
import { Hl1, Hl2, Hl3, Hl4, Hl5, Hl6 } from './UI';
import { CheckList, RadioGroup, Input, Select, Counter} from './UI';
import { Button } from './UI';
import { Link } from './UI';
import { Gallery, Offer, OfferCat } from './UI';
import { Product } from './UI';
import { Header } from './Header/header';
import type { MapItemProps, MapProps } from './data.types';

function App() {

    const MapPage = [
        {name:'Подвески', href: '/'} as MapItemProps,
        {name:'Кольца', href: '/'} as MapItemProps,
        {name:'Серьги', href: '/'} as MapItemProps,
        {name:'Цепи', href: '/'} as MapItemProps,
        {name:'Браслеты', href: '/'} as MapItemProps,
        {name:'Пирсинг', href: '/'} as MapItemProps,
        {name:'Запонки', href: '/'} as MapItemProps,
        {name:'Броши', href: '/'} as MapItemProps,
        {name:'Главная', href: '/'} as MapItemProps,
        {name:'Каталог', href: '/'} as MapItemProps,
        {name:'Сертификаты', href: '/'} as MapItemProps,
        {name:'Статус заказа', href: '/'} as MapItemProps,
        {name:'Контакты', href: '/'} as MapItemProps
    ] as MapProps;

    const Buttons = [
        {icon:<Search/>, href: '/'} as MapItemProps,
        {icon:<Heart/>, href: '/'} as MapItemProps,
        {icon:<Bag/>, href: '/'} as MapItemProps,
    ] as MapProps;

    const Nav = [        
        {name:'Главная', href: '/'} as MapItemProps,
        {name:'Каталог', href: '/'} as MapItemProps,
        {name:'Cертификаты', href: '/'} as MapItemProps,
        {name:'Статус заказа', href: '/'} as MapItemProps,
        {name:'Контакты', href: '/'} as MapItemProps
    ] as MapProps;
    
    return (
        <>
            <Header adress='Москва' title='CRYSTAL' buttons={Buttons} nav={Nav}/>
            <main>
                <Hl1> Заголовок </Hl1>
                <Hl2> Текст </Hl2>
                <Hl3> Текст </Hl3>
                <Hl4> Текст </Hl4>
                <Hl5> Текст </Hl5>
                <Hl6> Текст </Hl6>
                <Button> Оформить карту </Button>
                <Button disabled>Оформить карту</Button>
                <Button kind = 'cat'> Все </Button>
                <Button kind = 'price'> 50 000 ₽ </Button>
                <div style = {{width: '300px'}}><Button full> Добавить в каталог </Button> </div>
                <div style = {{display: 'flex'}}>
                    <Button kind='arrow'> 
                        <Arrow 
                            height = {8}
                            width = {16}
                            angle={90}
                        />
                    </Button>
                    <Button kind='arrow'> 
                        1
                    </Button>
                    <Button kind='arrow'> 
                        1
                    </Button>
                    <Button kind='arrow'> 
                        1
                    </Button>
                    <Button kind='arrow'> 
                        <Arrow 
                            height = {8}
                            width = {16}
                            angle={270}
                        />
                    </Button>
                </div>
                <Button kind='close'> 
                    <Close />
                </Button>
                <Link> 
                    Удалить всё
                </Link>
                <Link fontSize="XS"> 
                    Название коллекции
                </Link>
                <Link fontSize="M"> 
                    Главная
                </Link>
                <Link fontSize="XS"> 
                    Подвески
                </Link>
                <Link fill>
                    <Heart/>
                </Link>
                <Link icon>
                    <Map/>
                </Link>
                <Link icon>
                    <Search/>
                </Link>
                <Link icon>
                    <Bag/>
                </Link>
                <Link icon>
                    <Heart/>
                </Link>
                <Link fontSize="L"> 
                    CRYSTAL
                </Link>
                <Link fontSize="XL"> 
                    CRYSTAL
                </Link>
                <Input placeholder="Ваше имя" />
                <Input placeholder="Неверно заполненные данные" error/>
                <Select values={['50 000 ₽','100 000 ₽','200 000 ₽']}/>
                <Select values={['16 размер','17 размер','18 размер']}/>
                <div style={{width: '607px'}}> <Select allowinput values={['кошка','кошка киска','киска жопка']}/></div>
                <Counter/>
                <RadioGroup values={['Картой онлайн', 'СБП']}></RadioGroup>
                <CheckList values={['Картой онлайн', 'СБП', 'Картой онлайн', 'СБП']}/>
                <Gallery>
                <Offer price='44 000 ₽' name='Кольцо из белого золота с бриллиантами' imageSrc='image1.png' href='/' accent/>
                <Offer price='62 990 ₽ ' imageSrc='image.png' href='/'/>
                <Offer price='62 990 ₽ ' imageSrc='image.png' href='/'/>
                <OfferCat imageSrc='image1.png' name='"MINIMAL"' collection href='/'/>
                <OfferCat imageSrc='image1.png' name='Подвески' href='/'/>
                <Product href='/' name='Серьги из белого золота с бриллиантами' price='399 996 ₽' oldPrice='999 990 ₽' rating={3.5} imageSrc='image1.png' />
                </Gallery>
            </main>
            <Footer title='CRYSTAL' phoneLabel='+7 (900) 000-00-00' phoneHref='+79000000000' email='почта@mail.ru' map={MapPage} konfHref='/' date='CRYSTAL 2023'/>
        </> 
    )
}

export default App
