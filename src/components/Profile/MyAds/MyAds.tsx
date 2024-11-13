import { useState, useEffect, useRef } from 'react';
import TopWithArrow from '../Common/TopWithArrow';
import myAdsWindow from "../../../assets/images/myAdsWindow.svg";
import myAdsMan from "../../../assets/images/myAdsMan.png";
import myAdsMan2 from "../../../assets/images/myAdsMan2.png";
import AdAds from './AdAds/AdAds';

import './MyAds.css';
import { Link } from 'react-router-dom';


interface AdInterface {
    id: string;
    title: string;
};

export default function MyAds() {

    const [ads, setAds] = useState<AdInterface[]>([]);

    const [sortOpen, setSortOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        load();
        function handleClickOutside(event: MouseEvent) {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setSortOpen(false);
            }
        }

        if (sortOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sortOpen]);

    const load = async () => {
        setAds([{ id: '1', title: '345' }, { id: '2', title: '456' }, { id: '3', title: '567' }, { id: '4', title: '678' }, { id: '5', title: '890' }, { id: '6', title: '0000' }]);
        // setAds([]);

    };

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
                {filteredAds.length !== 0 ? (
                    <div className='adList'>
                        {filteredAds.map((item: AdInterface) => (
                            <AdAds key={item.id} id={item.id} />
                        ))}
                    </div>
                ) : <img src={myAdsMan2} alt="No chats illustration" className='myAdsEmptyImage' />} 
                {/* filteredAds - отсортированный массив либо просто массив, поэтому можно сократить код, как показано выше */}
                {/* в будущем стоит переписать код, так как будет загрузка данных и будет не круто, если пользователь увидит, что у него нет объявлений, хотя они просто не успели загрузиться! */}
            </div>
        </div>
    );
};
