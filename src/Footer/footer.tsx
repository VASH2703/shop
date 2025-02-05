import { Link } from "../UI";
import { Gallery } from "../UI";
import { Romb } from '../svg';
import { MapProps } from "../data.types";
import style from './footer.module.css';

interface FooterProps {
    title: string;
    phoneLabel: string;
    phoneHref: string;
    email: string;
    map: MapProps;
    konfHref: string;
    date: string;
}

export const Footer = ({title, phoneLabel, phoneHref, email, map, konfHref, date}: FooterProps) => {
        
    return (
        <footer className={style.footer}>
            <div className={style.area}>
                <div className={style.logcon}>
                    <Link fontSize="L" href='/' className={style.logo}> {title} </Link>
                    <Link fontSize="XS" className={style.phone} href={"tel:"+phoneHref}>{phoneLabel}</Link>
                    <Link fontSize="XS" href={"mailto:"+email}>{email}</Link>
                </div>
                <nav className={style.nav}>
                    <Gallery gap='20px'>
                        {map.map((item, index) => (
                            <Link href={item.href} fontSize="XS" key={'foot'+index}>{item.name} </Link>
                        ))}
                    </Gallery>
                </nav>
                <Romb className={style.romb} width={10} height={15}/>
            </div>
            <div className={style.info}>
                <div>{date}</div>
                <Link href={konfHref} fontSize="XS">Политика конфиденциальности</Link>
            </div>
        </footer>
    )
}