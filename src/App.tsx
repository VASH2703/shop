import './App.css';
import { Arrow, Close, Heart, Map, Search, Bag } from './svg';
import { Hl1, Hl2, Hl3, Hl4, Hl5, Hl6 } from './UI';
import { CheckList, RadioGroup, Input, Select, Counter} from './UI';
import { Button } from './UI';
import { Link } from './UI';
import { Gallery, Offer, OfferCat } from './UI';
import { Product } from './UI';

function App() {
    
    return (
        <>
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
            <Link size="XS"> 
                Название коллекции
            </Link>
            <Link size="M"> 
                Главная
            </Link>
            <Link size="XS"> 
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
            <Link size="L"> 
                CRYSTAL
            </Link>
            <Link size="XL"> 
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
            
        </> 
    )
}

export default App
