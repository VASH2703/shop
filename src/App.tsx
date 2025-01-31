import './App.css';
import Arrow from './svg/arrow';
import Close from './svg/close';
import Heart from './svg/heart';
import Map from './svg/map';
import Search from './svg/search';
import Bag from './svg/bag';
import { Hl1, Hl2, Hl3, Hl4, Hl5, Hl6 } from './Headline';
import { Button } from './Button';
import { Link } from './Link';

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
    </> 
  )
}

export default App
