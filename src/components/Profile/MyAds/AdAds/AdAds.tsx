import { useEffect, useState } from 'react';
import adAppartment from "../../../../assets/images/adAppartment2.png";
import './AdAds.css';
import { Link } from 'react-router-dom';

interface AdCardInterface {
    id: string;
};

interface AdDataInterface {
    cover: string;
    title: string;
    aboutApartment: string;
};

export default function AdAds({ id }: AdCardInterface) {

    const [data, setData] = useState<AdDataInterface | null>(null);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        setData({
            cover: adAppartment,
            title: 'Ищу соседа в район Чистые пруды',
            aboutApartment: 'Квартира найдена, двушка, 50 кв.м., совр...'
        });
    };

    return (
        <div className='adCards'>
            {data && (
                <>
                    <div className='myAds'>
                        <div className='textAds'>Ищу соседа в район Чистые <p>пруды</p></div>
                        {/* <div className='mainText'>Квартира найдена, двушка, 50 кв.м., совр...</div> */}
                        <div className='mainText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus deserunt impedit quisquam dolorum pariatur mollitia! A cumque excepturi impedit ipsum ducimus non quisquam quidem. Maiores sapiente repudiandae soluta quo.e</div>

                        <div className='Buttons'>
                            <a href='#' className='linkNolineCreate' >
                                <button className='changeButton'>Изменить</button>
                            </a>
                            <a href='#' className='linkNolineCreate' >
                                <Link to='/profile/prodvigate' className='linkNolineCreate'>
                                    <button className='prodvigateButton'>Продвинуть</button>
                                </Link>
                            </a>
                            <a href='#' className='linkNolineCreate' >
                                <button className='deleteButton'>Удалить</button>
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
