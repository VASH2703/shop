import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import { Link } from './UI';
import { Topic, Catalog } from './navigation';

const Breadcrumbs = () => {
    const location = useLocation();
    const fullPathName = location.pathname;
    const pathName = fullPathName.substring(1);
    const pathParts = fullPathName.split('/');
    const breadcrumbs: { title: string; href: string }[] = [];

    pathParts.forEach(item => {
        let title;
        if (Topic[item]) {
            title = Topic[item]
        } else {
            const Product = Catalog.find(product => (product.id === item));
            title = Product?.name || 'Товар';
        }
        breadcrumbs.push({title: title, href: '/'+pathName.substring(0, pathName.indexOf(item)+item.length)})
    })

    return (
        <div className='nav'>
            {breadcrumbs.map((part, index) => (
                <Fragment key={index}>
                    <Link fontSize="XS" 
                        href={index !==breadcrumbs.length-1 ? part.href : undefined} 
                        className={index !==breadcrumbs.length-1 ? 'prev' : undefined}
                    >
                        {part.title}
                    </Link>
                    {index < pathParts.length - 1 ? ' / ' : ''}
                </Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;