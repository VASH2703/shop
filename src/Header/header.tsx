import { Gallery, Link } from "../UI";
import { Romb, Map } from '../svg';
import { MapProps } from "../data.types";
import style from './header.module.css';
import hashId from "../hashId";

interface HeaderProps {
    title: string;
    nav: MapProps;
    buttons: MapProps;
    adress: string;
}

export const Header = ({title, nav, buttons, adress}: HeaderProps) => {
    
    return (
        <header className={style.header}>
            <div className={style.logoicons}>
                <div className={style.adress}>
                    <Link icon><Map/></Link>
                    {adress}
                </div>
                <Link fontSize="XL" href='/'>{title}</Link>
                <div className={style.icons}>
                    {buttons.map((item) => (
                        <Link icon href={item.href} key={hashId()}>{item.icon}</Link>
                    ))}
                </div>
            </div>
            <nav>
                <Gallery column={5} className={style.nav}>
                    {nav.map((item) => (
                        <Link href={item.href} key={item.name} fontSize="M">{item.name}</Link>
                    ))}
                    <Romb className={style.romb}/>
                </Gallery>
            </nav>
        </header>
    )
}