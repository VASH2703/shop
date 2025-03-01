import { Star } from "../../svg";
import { memo } from 'react';
import style from './product.module.css';

interface Rating {
    rating: number
}

const Rating = ({rating}: Rating) => {
    let res = [];
    for (let i = 0; i < 5; i++) {
        if (i<=rating) {
            if (i+1<=rating) {
                res.push(<Star key={i} procent={100}/>); 
            }
            else {
                const fractionalPart=(rating % 1 * 100);
                res.push(<Star key={i} procent={fractionalPart} />);
            }
        }
        else {
            res.push(<Star key={i} procent={0}/>); 
        }
    }

    return <div className={style.rating}>{res}</div>;
}

export default memo(Rating);