import { useState, useEffect, useRef } from 'react';
import TopWithArrow from '../Common/TopWithArrow';
import myAdsWindow from "../../../assets/images/myAdsWindow.svg";
// import myAdsMan from "../../../assets/images/myAdsMan.png";
import myAdsMan2 from "../../../assets/images/myAdsMan2.png";

import './MyAds.css';
import { Link } from 'react-router-dom';


interface AdInterface {
    id: number;
    title: string;
};

export default function MyAds() {

    const [ads, setAds] = useState<AdInterface[]>([]);

    const [search, setSearch] = useState<string>('');
    const filteredAds = search
        ? ads.filter(ad => ad.title.toLowerCase().includes(search.toLowerCase()))
        : ads;

    return (
        <div className='mainMyAds'>
            <TopWithArrow link='/profile' />
            <div className='myAdsContent'>
                <div className='myAdsContentHeader'>
                    <p className='myAdsContentHeaderTitle'>Мои объявления</p>
                    <Link to='createAds' className='linkNoUnderlineCreate' >
                        <button className='myAdsContentHeaderButton'>Создать</button>
                    </Link>
                </div>
                {ads.length === 0
                    ? <img src={myAdsMan2} alt="No chats illustration" className='myAdsEmptyImage' />
                    : <></>}
            </div>
            
            {/* 
            {filteredAds.length === 0 ? (
                <div className='myAdsEmptyColumn'>
                    <div className='myAdsEmptyTextBlock'>
                        <img src={myAdsWindow} alt="No chats window" />
                        <p className='myAdsEmptyText'>Объявлений нет. Создадим новое?</p>
                    </div>
                    <img src={myAdsMan} alt="No chats illustration" className='myAdsEmptyImage' />
                </div>
            ) : (
                <div className='adsList'>
                    {filteredAds.map((item: AdInterface) => (
                        <AdAds key={item.id} id={item.id} />
                    ))}
                </div>
            )}
            */}
        </div>
    );
};
