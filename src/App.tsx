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
import { Main } from './pages/main';

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
            <Main/>
            <Footer title='CRYSTAL' phoneLabel='+7 (900) 000-00-00' phoneHref='+79000000000' email='почта@mail.ru' map={MapPage} konfHref='/' date='CRYSTAL 2023'/>
        </> 
    )
}

export default App
