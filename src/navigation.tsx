import { Heart, Search, Bag } from './svg';
import type { ProductItemProps, CategoryMapProps, MapProps, ProductListProps } from './data.types';

export const Buttons: MapProps = [
    {icon: <Search/>, name: 'Поиск', href: '/'},
    {icon:<Heart/>, name: 'Извбранное', href: '/favorite'},
    {icon:<Bag/>, name: 'Корзина', href: '/cart'},
];    
                /* 
                <Route path="/order" element={<Order />} /> */
export const Nav: MapProps = [        
    {name:'Главная', href: '/'},
    {name:'Каталог', href: '/catalog'},
    {name:'Cертификаты', href: '/sertificate'},
    {name:'Статус заказа', href: '/checkorder'},
    {name:'Контакты', href: '/contact'}
];

export const Category: CategoryMapProps = [
    {name:'Подвески', key: 'pendant', href: '/catalog?categories=pendant', imageSrc: '/cat1.png'},
    {name:'Кольца', key: 'ring', href: '/catalog?categories=ring', imageSrc: '/cat2.png'},
    {name:'Серьги', key: 'earrings', href: '/catalog?categories=earrings', imageSrc: '/cat3.png'},
    {name:'Цепи', key: 'necklace', href: '/catalog?categories=necklace', imageSrc: '/cat4.png'},
    {name:'Браслеты', key: 'bracelet', href: '/catalog?categories=bracelet', imageSrc: '/cat5.png'},
    {name:'Пирсинг', key: 'piercing', href: '/catalog?categories=piercing', imageSrc: '/cat6.png'},
    {name:'Запонки', key: 'cufflinks', href: '/catalog?categories=cufflinks', imageSrc: '/cat7.png', accent: true},
    {name:'Броши', key: 'brooch',href: '/catalog?categories=brooch', imageSrc: '/cat8.png', accent: true}
];

/* export const Materials: Character[] = [
    {name: 'Белое золото 585', key: 'gold'},
    {name: 'Черное золото 585', key: 'gold'},
    {name: 'Красное золото 585', key: 'gold'},
    {name: 'Серебро 750', key: 'silver'},
    {name: 'Титан', key: 'titan'},
    {name: 'Медицинская сталь', key: 'steel'},
]; */

export const MaterialsSearch: Record<string, string> = {
    'gold': 'Золото',
    'silver': 'Серебро',
    'titan': 'Титан',
    'steel': 'Медицинская сталь',
};

export const Gemstone: Record<string, string> ={
    'diamond': 'Бриллиант',
    'aquamarine': 'Аквамарин',
    'morganite': 'Морганит',
    'pearl': 'Жемчуг',
    'fianite': 'Фианит',
}

export const Sort: Record<string, string>  = {
    'alphabet': 'в алфавитном порядке',
    'priceinc': 'цена по возрастанию',
    'pricedec': 'цена по убыванию'
}; 

export const CatalogExample: ProductListProps = [
    {id:'01', name: 'Подвеска из белого золота и серебра',  material: ['gold', 'silver'],
        gemstone: [], category: 'pendant', oldPrice: '60 000 ₽', price: '44 000 ₽', href: '/catalog/01', rating: 4.4, images: ['/image1.png']},
    {id:'02',name: 'Кольцо из белого золота с бриллиантами',  material: ['gold'],
        gemstone: [ 'diamond'], category: 'ring', price: '60 000 ₽', href: '/catalog/02', rating: 4.4, images: ['/image.png']},
    {id:'03', name:'Серьги из серебра с аквамаринами и жемчугом',  material: ['silver'],
        gemstone: [ 'aquamarine', 'pearl'], category: 'earrings', price: '60 000 ₽', href: '/catalog/03', rating: 4.4, images: ['/image.png']},
    {id:'04', name: 'Цепочка из титана',  material: ['titan'],
        gemstone: [],category: 'necklace', oldPrice: '60 000 ₽', price: '44 000 ₽', href: '/catalog/04', rating: 5, images: ['/image1.png']},
    {id:'05', name: 'Браслет из титана с морганитом',  material: ['titan'],
        gemstone: [ 'morganite'],category: 'bracelet', price: '60 000 ₽', href: '/catalog/05', rating: 4.6, images: ['/image.png']},
    {id:'06', name:'Кольцо для носа из медицинской стали',  material: ['steel'],
        gemstone: [],category: 'piercing', price: '60 000 ₽', href: '/catalog/06', rating: 4.4, images: ['/image.png']},
    {id:'07', name: 'Запонки из серебра с жемчугом и бриллиантами',  material: ['silver'],
        gemstone: [ 'pearl', 'diamond'], category: 'cufflinks', oldPrice: '60 000 ₽', price: '44 000 ₽', href: '/catalog/07', rating: 4.7, images: ['/image1.png']},
    {id:'08', name: 'Брошь из красного золота с фианитом',  collection: 'minimal', material: ['gold'],
        gemstone: [ 'fianite'], category: 'brooch', price: '60 000 ₽', href: '/catalog/08', rating: 4.5, images: ['/image.png']}
];

export const Hits: ProductListProps = [
    {id:'09', name: 'Кольцо из белого золота с бриллиантами', material: ['gold'], collection: 'clouds', gemstone: [ 'diamond'], category: 'pendant', price: '44 000 ₽', href: '/catalog/09', images: ['/image1.png'], accent: true},
    {id:'10', name: 'Кольцо из белого золота с бриллиантами', material: ['gold'], collection: 'newlook', gemstone: [ 'diamond'], category: 'pendant', price: '60 000 ₽', href: '/catalog/10', images: ['/image.png']},
    {id:'11', name:'Кольцо из белого золота с бриллиантами', material: ['gold'], collection: 'trend', gemstone: [ 'diamond'], category: 'pendant', price: '60 000 ₽', href: '/catalog/11', images: ['/image.png']}
];

export const Catalog: ProductListProps =  [...Array(10).fill([...CatalogExample]).flat(), ...Hits];

export const Collection: MapProps = [
    {name:'“MINIMAL”', href: '/catalog?collection=minimal', imageSrc: '/collection1.png'},
    {name:'“NEW LOOK”', href: '/catalog?collection=newlook', imageSrc: '/collection2.png'},
    {name:'“TREND”', href: '/catalog?collection=trend', imageSrc: '/collection3.png'},
    {name:'“CLOUDS”', href: '/catalog?collection=clouds', imageSrc: '/collection4.png'}
];

export const MapPage: MapProps | CategoryMapProps = [...Category, ...Nav];

export const ProductExample: ProductItemProps = {
    id: '12',
    name: 'Серьги из белого золота с бриллиантами',
    category: 'ring',
    price: '399 996 ₽',
    oldPrice: '999 990 ₽',
    rating: 5,
    collection:'White gold',
    material: ['Белое золото 585'],
    gemstone: [ 'Бриллианты', 'Аквамарины', 'Морганиты'],
    characteries: {
        'Проба': '750',
        'Масса': '7.70 г',
        'Длинна изделия': '55 мм',
    },
    href: '/catalog/12',
    images: [
        '/prod1.png',
        '/prod2.png',
        '/prod3.png',
        '/prod4.png',
        '/prod5.png', 
        '/collection3.png',
    ]
}

