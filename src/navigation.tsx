import { Heart, Search, Bag } from './svg';
import type { FullProduct, MapItemProps, MapProps, ProductItemProps, ProductListProps } from './data.types';

export const Buttons: MapProps = [
    {icon: <Search/>, name: 'Поиск', href: '/'} as MapItemProps,
    {icon:<Heart/>, name: 'Извбранное', href: '/'} as MapItemProps,
    {icon:<Bag/>, name: 'Корзина', href: '/'} as MapItemProps,
];

export const Nav: MapProps = [        
    {name:'Главная', href: '/'} as MapItemProps,
    {name:'Каталог', href: '/'} as MapItemProps,
    {name:'Cертификаты', href: '/'} as MapItemProps,
    {name:'Статус заказа', href: '/'} as MapItemProps,
    {name:'Контакты', href: '/'} as MapItemProps
];

export const Category: MapProps = [
    {name:'Подвески', href: '/', imageSrc: 'cat1.png'} as MapItemProps,
    {name:'Кольца', href: '/', imageSrc: 'cat2.png'} as MapItemProps,
    {name:'Серьги', href: '/', imageSrc: 'cat3.png'} as MapItemProps,
    {name:'Цепи', href: '/', imageSrc: 'cat4.png'} as MapItemProps,
    {name:'Браслеты', href: '/', imageSrc: 'cat5.png'} as MapItemProps,
    {name:'Пирсинг', href: '/', imageSrc: 'cat6.png'} as MapItemProps,
    {name:'Запонки', href: '/', imageSrc: 'cat7.png', accent: true} as MapItemProps,
    {name:'Броши', href: '/', imageSrc: 'cat8.png', accent: true} as MapItemProps
];

export const Catalog: ProductListProps = [
    {name: 'Кольцо из белого золота с бриллиантами', oldPrice: '60 000 ₽', price: '44 000 ₽', href: '/', rating: 4.4, imageSrc: 'image1.png'} as ProductItemProps,
    {name: 'Кольцо из белого золота с бриллиантами', price: '60 000 ₽', href: '/', rating: 4.4, imageSrc: 'image.png'} as ProductItemProps,
    {name:'Кольцо из белого золота с бриллиантами', price: '60 000 ₽', href: '/', rating: 4.4, imageSrc: 'image.png'} as ProductItemProps,
    {name: 'Кольцо из белого золота с бриллиантами', oldPrice: '60 000 ₽', price: '44 000 ₽', href: '/', rating: 5, imageSrc: 'image1.png'} as ProductItemProps,
    {name: 'Кольцо из белого золота с бриллиантами', price: '60 000 ₽', href: '/', rating: 4.6, imageSrc: 'image.png'} as ProductItemProps,
    {name:'Кольцо из белого золота с бриллиантами', price: '60 000 ₽', href: '/', rating: 4.4, imageSrc: 'image.png'} as ProductItemProps,
    {name: 'Кольцо из белого золота с бриллиантами', oldPrice: '60 000 ₽', price: '44 000 ₽', href: '/', rating: 4.7, imageSrc: 'image1.png'} as ProductItemProps,
    {name: 'Кольцо из белого золота с бриллиантами', price: '60 000 ₽', href: '/', rating: 4.5, imageSrc: 'image.png'} as ProductItemProps
];

export const Hits: ProductListProps = [
    {name: 'Кольцо из белого золота с бриллиантами', price: '44 000 ₽', href: '/', imageSrc: 'image1.png', accent: true} as ProductItemProps,
    {name: 'Кольцо из белого золота с бриллиантами', price: '60 000 ₽', href: '/', imageSrc: 'image.png'} as ProductItemProps,
    {name:'Кольцо из белого золота с бриллиантами', price: '60 000 ₽', href: '/', imageSrc: 'image.png'} as ProductItemProps
];

export const Collection: MapProps = [
    {name:'“MINIMAL”', href: '/', imageSrc: 'collection1.png'} as MapItemProps,
    {name:'“NEW LOOK”', href: '/', imageSrc: 'collection2.png'} as MapItemProps,
    {name:'“TREND”', href: '/', imageSrc: 'collection3.png'} as MapItemProps,
    {name:'“CLOUDS”', href: '/', imageSrc: 'collection4.png'} as MapItemProps
];

export const MapPage: MapProps = [...Category, ...Nav];

export const ProductExample: FullProduct = {
    name: 'Серьги из белого золота с бриллиантами',
    price: '399 996 ₽',
    oldPrice: '999 990 ₽',
    rating: 5,
    collection:'White gold',
    material: ['Белое золото 585'],
    gemstone: [ 'Бриллианты', 'Аквамарины', 'Морганиты'],
    characteries: [
        {Проба: '750'},
        {Масса: '7.70 г'},
        {'Длинна изделия': '55 мм'},
    ],
    href: '/',
    images: [
        'prod1.png',
        'prod2.png',
        'prod3.png',
        'prod4.png',
        'prod5.png', 
        'collection3.png',
    ]
}

