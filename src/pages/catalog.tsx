import { useState, useEffect, useCallback } from 'react';
import { useSearchParams} from 'react-router-dom';

import { ProductItemProps } from '../data.types';
import { Catalog, Category, Gemstone, MaterialsSearch, Sort } from "../navigation";

import { Button, Gallery, Hl1, Product, RadioItem } from "../UI";
import { SelectCheck, SelectRadio } from "./Catalog/SelCheck";
import { Arrow} from "../svg";

import hashId from "../hashId";
import renderPageNumbers from './renderPageNumbers';

import style from './catalog.module.css';

const ITEMS_PER_PAGE = 8;

export const CatalogPage = () => {

    const [searchParams, setSearchParams] = useSearchParams(); //для работы с параметрами
    
    const [categories, setCategories] = useState<string | null> (); //список категорий
    const [materials, setMaterials] = useState<string[]> ([]); //список материалов
    const [gemstones, setGemstones] = useState<string[]> ([]); //список драгоценных камней
    const [collection, setCollection] = useState<string | null> (); //список коллекций

    const [sort, setSort] = useState<string | null>();

    const [filteredCatalog, setCatalogData] = useState<ProductItemProps[]>([]); //отфильтрованный каталог

    const [currentPage, setCurrentPage] = useState<number>(1); //текущая страница
    const [totalPages, setTotalPages] = useState(1); //общее количество страниц
    const [pagedCatalog, setPagedCatalog] = useState<ProductItemProps[]>([]); //срез каталога для одной страницы

    useEffect(() => { //получение данных из адресной строки
        const pageParam = searchParams.get('page');
        const page = pageParam ? parseInt(pageParam, 10) : 1;
        setCategories(searchParams.get('categories'));
        setMaterials(searchParams.getAll('materials'));
        setGemstones(searchParams.getAll('gemstones'));
        setCollection(searchParams.get('collection'));
        setSort(searchParams.get('sort'));
        setCurrentPage(page);
    }, [searchParams]);


    
    useEffect(() => { //фильтрация каталога
        // В продакшен-версии здесь будет запрос к серверу
        // В тестовой версии используем фильтрацию catalogData

        const filter =(values: ProductItemProps[], filters: string[], filterField: keyof ProductItemProps): ProductItemProps[] => {
            if (filters.length === 0) {
                return values;
            }
            else {
                return values.filter(item => {
                    const itemValue = item[filterField]; 
                    return filters.some(filter => itemValue?.toString().includes(filter))
                })
            }
        }

        const fetchCatalogData = async () => {
            
            let filteredData = !categories
            ? Catalog
            : Catalog.filter(item => categories === item.category);

            filteredData = !collection
            ? filteredData
            : filteredData.filter(item => collection === item.collection);

            filteredData = filter(filteredData, materials, 'material');
            filteredData = filter(filteredData, gemstones, 'gemstone');

            if (sort) {
                switch (sort) {
                    case 'alphabet':
                        filteredData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
                    break;
                    case 'priceinc':
                        filteredData = [...filteredData].sort((a, b) => {
                            const priceA = parseFloat(a.price);
                            const priceB = parseFloat(b.price);
                            if (isNaN(priceA) || isNaN(priceB)) {
                                return 0;
                            }
                            return priceA - priceB;
                        });
                    break;
                    case 'pricedec':
                        filteredData = [...filteredData].sort((a, b) => {
                            const priceA = parseFloat(a.price);
                            const priceB = parseFloat(b.price);
                            if (isNaN(priceA) || isNaN(priceB)) {
                                return 0;
                            }
                            return priceB - priceA;
                        });
                    break;
                }
            }
            
            setCatalogData(filteredData);
        };
    
        fetchCatalogData();
    }, [categories, materials, collection, gemstones, sort]);


    useEffect(() => { //индексация по страницам
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const currentCatalogPage = filteredCatalog.slice(startIndex, endIndex);

        setPagedCatalog(currentCatalogPage);
        setTotalPages(Math.ceil(filteredCatalog.length / ITEMS_PER_PAGE));
    }, [currentPage, filteredCatalog]);


    const handleCategoryChange = (item: string) => { //смена категорий
        if (item === 'all') {
          setSearchParams({}) 
        } else {
          setSearchParams({categories: item });
        }
    };

    const handlePageChange = (newPage: number) => { //смена страниц
        const currentParams = new URLSearchParams(searchParams);
        currentParams.delete('page');
        currentParams.append('page', ''+newPage);
        setSearchParams(currentParams);
    };

    const handleFiltersChange = useCallback((value: string, filter: string) => { //смена материалов
        const currentParams = new URLSearchParams(searchParams);
        currentParams.delete('page');
        const currentMaterials = currentParams.getAll(filter);

        if (currentMaterials.includes(value)) {
            const newMaterials = currentMaterials.filter(m => m !== value);
            currentParams.delete(filter);
            newMaterials.forEach(m => currentParams.append(filter, m));
        } else {
            currentParams.append(filter, value);
        }
        setSearchParams(currentParams);
    },[searchParams, setSearchParams]);

    const handleSortChange = (value: string, filter: string) => { //смена сортировки
        const currentParams = new URLSearchParams(searchParams);
        currentParams.delete('page');
        currentParams.delete(filter);
        currentParams.append(filter, value);
        setSearchParams(currentParams);
    };

    return (
        <main>
            <Hl1>Каталог</Hl1>
            <div className={style.category}>
                <RadioItem name="category" onChange={() => handleCategoryChange('all')} styleType="catbtn"  checked={!categories} className={style.btncat}> Все </RadioItem>
                {Category.map((item) => (
                    <RadioItem 
                        name="category" 
                        onChange={() => handleCategoryChange(item.key)} 
                        styleType="catbtn" 
                        className={style.btncat} 
                        key={item.name}
                        checked={categories === item.key}
                    >
                        {item.name} 
                    </RadioItem>
                ))}
            </div>
            <div className={style.filtersort}>
                <div className={style.filters}>
                    <SelectCheck 
                        searchParams={searchParams}
                        title='Материал'
                        name='materials'
                        options={MaterialsSearch}
                        onChangeOther={handleFiltersChange} 
                    />
                    <SelectCheck 
                        searchParams={searchParams}
                        title='Драгоценный камень'
                        name='gemstones'
                        options={Gemstone}
                        onChangeOther={handleFiltersChange} 
                    />
                </div>
                <div>
                    <SelectRadio
                        searchParams={searchParams}
                        title='Сортировать по:'
                        name='sort'
                        options={Sort}
                        onChangeOther={handleSortChange} 
                    />
                </div> 
            </div>
            <Gallery gap='50px'>
                {pagedCatalog.map((item) => (
                    <Product
                        name={item.name}
                        oldPrice={item.oldPrice}
                        price={item.price}
                        rating={item.rating}
                        href={item.href}
                        images={item.images}
                        favorite={item.favorite}
                        key={hashId()}
                    />
                ))}
            </Gallery>
            <div className={style.bottom}>
                <div className={style.count}>Найдено {filteredCatalog.length} товаров</div>
                <div className={style.pages}>
                    <Button styleType="arrow">
                        <Arrow angle={90}/>
                    </Button>
                    {renderPageNumbers(totalPages,currentPage).map((page) => (
                        <Button
                            key={hashId()}
                            styleType="arrow"
                            disabled={!parseInt(page) || currentPage === parseInt(page)}
                            onClick={parseInt(page) ? () => handlePageChange(parseInt(page)) : undefined}
                        >
                            {page}
                        </Button>
                    ))}
                    <Button styleType="arrow">
                        <Arrow angle={270}/>
                    </Button>
                </div>
            </div>
        </main>
    )
}