import { useEffect, useState } from 'react';
import adAppartment2 from "../../../assets/images/adAppartment2.png";
import './AdCard.css';
import { Link } from 'react-router-dom';
import FavouritesButton from '../FavouritesButton/FavouritesButton';

interface AdCardInterface {
    id: string;
};

interface AdDataInterface {
    cover: string;
    title: string;
    aboutApartment: string;
};

export default function AdCard({ id }: AdCardInterface) {

    const [data, setData] = useState<AdDataInterface | null>(null);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        setData({
            cover: adAppartment2,
            title: 'Ищу соседа в район Чистые пруды',
            aboutApartment: 'Квартира найдена, двушка, 50 кв.м., современный ремонт'
        });
    };

    return (
        <div className='adCard'>
            {data && (
                <>
                    <div className='adCardCover' style={{ backgroundImage: `url(${data.cover})` }}>
                        <FavouritesButton type='onAdCard' />
                    </div>
                    <div className='adCardColumn'>
                        <p className='adCardTitle'>{data.title}</p>
                        <p className='adCardText'>{data.aboutApartment}</p>
                    </div>
                    <Link to={`/ad/${id}`} className='linkNoUnderline'>
                        <button className='adCardButton'>Подробнее</button>
                    </Link>
                </>
            )}
        </div>
    );
}
