import './App.css';
import Arrow from './arrow';
import Close from './close';
import { Hl1, Hl2, Hl3, Hl4, Hl5, Hl6 } from './Headline';
import { Button } from './Button';

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
    </> 
  )
}

export default App
