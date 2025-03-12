import './App.css';
import { Footer } from './Footer';
import { MapPage, Nav, Buttons } from './navigation';
import { Header } from './Header/header';
import { Main } from './pages/main';
import { Sertificate } from './pages/sertificate';
import { CatalogPage } from './pages/catalog';
import { Contact } from './pages/contact';
import { Favorite } from './pages/favorite';
import { ProductPage } from './pages/product';
import { Cart } from './pages/cart';
import { Order } from './pages/order';

function App() {

    return (
        <>
            <Header adress='Москва' title='CRYSTAL' buttons={Buttons} nav={Nav}/>
            <Order/>
            <Footer title='CRYSTAL' phoneLabel='+7 (900) 000-00-00' phoneHref='+79000000000' email='почта@mail.ru' map={MapPage} konfHref='/' date='CRYSTAL 2023'/>
        </> 
    )
}

export default App
