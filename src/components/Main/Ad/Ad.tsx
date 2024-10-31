import { useEffect, useState } from 'react';
import adAppartment1 from "../../../assets/images/adAppartment1.png";
import adAppartment2 from "../../../assets/images/adAppartment2.png";
import './Ad.css';
import FavouritesButton from '../FavouritesButton/FavouritesButton';
import AdCard from '../AdCard/AdCard';
import AdSlider from './AdSlider/AdSlider';
import backArrowLight from "../../../assets/icons/backArrowLight.svg";
import { Link, useLocation } from 'react-router-dom';

interface DataAd {
    title: string;
    images: string[];
    aboutApartment: string;
    countOfNeighbors: number;
    gender: string;
    animals: string;
    summFrom: number;
    summTo: number;
    ageFrom: number;
    ageTo: number;
};

export default function Ad() {
    const [dataAd, setDataAd] = useState<DataAd>({
        title: '',
        images: [],
        aboutApartment: '',
        countOfNeighbors: 0,
        gender: '',
        animals: '',
        summFrom: 0,
        summTo: 0,
        ageFrom: 0,
        ageTo: 0
    });
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        setDataAd({
            images: [adAppartment1, adAppartment2],
            title: 'Ищу соседа в район Чистые пруды',
            aboutApartment: 'В квартире есть туалет, ванна (раздельные). Две большие комнаты, в каждой компьютерный стол, шкаф и кровать. На кухне есть весь нужный гарнитур, стол, два стула, холодильник на двоих.',
            countOfNeighbors: 1,
            gender: 'Мужской',
            animals: 'Не приветсвуется',
            summFrom: 50000,
            summTo: 50000,
            ageFrom: 18,
            ageTo: 25
        });
    };

    function selectBackLink() {
        switch (page) {
            case 'favourites':
                return '/favourites'
            default:
                return '/';
        };
    };

    return (
        <div className='adMain'>
            <div className='adBackHeader'>
                <Link to={selectBackLink()}>
                    <img alt='' src={backArrowLight} />
                </Link>
            </div>
            <div className='adContent'>
                <div className='adSlider'>
                    <AdSlider images={dataAd.images} />
                </div>
                <div className='adDataColumn'>
                    <div className='adDataLine'>
                        <p className='adDataTitle' >{dataAd.title}</p>
                        <FavouritesButton type='inAd' />
                    </div>
                    <button className='adDataButtonChat'>Перейти в чат</button>
                    <div className='adDataLilColumn'>
                        <p className='adDataSubtitle'>О квартире:</p>
                        <p className='adDataText'>{dataAd.aboutApartment}</p>
                    </div>
                    <div className='adDataLilLine'>
                        <p className='adDataSubtitle'>Количество соседей:</p>
                        <p className='adDataTextBig'>{dataAd.countOfNeighbors}</p>
                    </div>
                    <div className='adDataLilColumn'>
                        <p className='adDataSubtitle'>Бюджет на 1 человека:</p>
                        <div className='adDataBigLine'>
                            <div className='adDataSummBlock'>
                                <p className='adDataSummText'>от</p>
                                <p className='adDataSummText'>{dataAd.summFrom}</p>
                                <p className='adDataSummText'>₽</p>
                            </div>
                            <div className='adDataSummBlock'>
                                <p className='adDataSummText'>до</p>
                                <p className='adDataSummText'>{dataAd.summTo}</p>
                                <p className='adDataSummText'>₽</p>
                            </div>
                        </div>
                    </div>
                    <div className='adDataLilLine'>
                        <p className='adDataSubtitle'>Пол:</p>
                        <p className='adDataTextBig'>{dataAd.gender}</p>
                    </div>
                    <div className='adDataLilColumn'>
                        <p className='adDataSubtitle'>Возраст соседа:</p>
                        <div className='adDataBigLine'>
                            <div className='adDataSummBlock'>
                                <p className='adDataSummText'>от</p>
                                <p className='adDataSummText'>{dataAd.ageFrom}</p>
                                <p className='adDataSummText'></p>
                            </div>
                            <div className='adDataSummBlock'>
                                <p className='adDataSummText'>до</p>
                                <p className='adDataSummText'>{dataAd.ageTo}</p>
                                <p className='adDataSummText'></p>
                            </div>
                        </div>
                    </div>
                    <div className='adDataLilLine'>
                        <p className='adDataSubtitle'>Наличие животных:</p>
                        <p className='adDataTextBig'>{dataAd.animals}</p>
                    </div>
                    <div className='adDataLilColumn'>
                        <p className='adDataSubtitle'>Похожие объявления:</p>
                        <div className='adDataBoxAds'>
                            <div className='adDataLineAds'>
                                {['1', '2', '3', '4'].map(item => <AdCard id={item} key={item} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
