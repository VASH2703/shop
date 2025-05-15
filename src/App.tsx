import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Footer } from './Footer';
import Breadcrumbs from './breadcrumbs';
import { Header } from './Header/header';

import { MapPage, Nav, Buttons } from './navigation';

import { Main } from './pages/main';
import { Sertificate } from './pages/sertificate';
import { CatalogPage } from './pages/catalog';
import { Contact } from './pages/contact';
import { Favorite } from './pages/favorite';
import { ProductPage } from './pages/product';
import { Cart } from './pages/cart';
import { Order } from './pages/order';
import { CheckOrder } from './pages/checkorder';

function App() {

    return (
        <Router>
            <Header adress='Москва' title='CRYSTAL' buttons={Buttons} nav={Nav}/>
            {location.pathname !== '/' && 
                <Breadcrumbs/>
            }
            <Routes>
                <Route path="/" element={<Main />} /> {/* Главная страница */}
                <Route path="/sertificate" element={<Sertificate />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/catalog/:productId" element={<ProductPage />} /> {/* Параметрический маршрут для страницы товара */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                <Route path="/checkorder" element={<CheckOrder />} />
            </Routes>
            <Footer title='CRYSTAL' phoneLabel='+7 (900) 000-00-00' phoneHref='+79000000000' email='почта@mail.ru' map={MapPage} konfHref='/' date='CRYSTAL 2023'/>
        </Router> 
    )
}

export default App
