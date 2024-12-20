import { useState, useEffect, useRef } from 'react';
import './Main.css';
import mainGirlEmpty from "../../assets/images/mainGirlEmpty.png";
import mainGirlNoAds from "../../assets/images/mainGirlNoAds.png";
import chatsWindow from "../../assets/images/chatsWindow.svg";
import sortIcon from "../../assets/icons/sortIcon.svg";
import checkMark from "../../assets/icons/checkMark.svg";
import SearchBlock from './SearchBlock/SearchBlock';
import AdCard from './AdCard/AdCard';

interface SortItem {
    text: string;
    state: string;
}

const itemSort: SortItem[] = [
    { text: 'По алфавиту (возр)', state: 'alphabetUp' },
    { text: 'По алфавиту (убыв)', state: 'alphabetDown' }
];

interface IAds {
    id: string;
    title: string;
}

export default function Main() {
    const [ads, setAds] = useState<IAds[]>([]);
    const [sort, setSort] = useState<string>('alphabetUp');
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
        setAds([{ id: '1', title: '345' }, { id: '2', title: '456' }, { id: '3', title: '567' }, { id: '4', title: '678' }, { id: '5', title: '890' },{ id: '6', title: '0000' }]);
    };

    const filteredAds = search
        ? ads.filter(ad => ad.title.toLowerCase().includes(search.toLowerCase()))
        : ads;

    return (
        <div className='mainColumn'>
            <div className='mainHeader'>
                <SearchBlock search={search} setSearch={setSearch} />

                <div className={`mainHeaderSortColumn ${sortOpen ? 'mainHeaderSortColumnTop' : ''}`} ref={sortRef}>
                    {!sortOpen
                        ? <button className='mainHeaderSortButton' onClick={() => setSortOpen(true)}>
                            <img src={sortIcon} alt="Sort" />
                            <p className='mainHeaderSortButtonText'>Сортировать по</p>
                        </button>
                        : <div className='mainHeaderSortBlock'>
                            <button className='mainHeaderSortBlockButton' onClick={() => setSortOpen(false)}>
                                <img src={sortIcon} alt="Sort" />
                                <p className='mainHeaderSortButtonText'>Сортировать по</p>
                            </button>
                            {itemSort.map((item, index) => (
                                <div key={item.state} className={`mainHeaderSortBlockItem ${itemSort.length - 1 === index ? 'noBorderBottom' : ''}`} onClick={() => { setSort(item.state); setSortOpen(false); }}>
                                    <p className='mainHeaderSortBlockItemText'>{item.text}</p>
                                    {item.state === sort && <img src={checkMark} alt='Check mark' />}
                                </div>
                            ))}
                        </div>}
                    <hr className='mainHeaderSortHr' />
                </div>
            </div>

            {filteredAds.length === 0 ? (
                search ? (
                    <div className='mainEmptyColumn'>
                        <div className='chatsEmptyTextBlock'>
                            <img src={chatsWindow} alt="No ads window" />
                            <p className='chatsEmptyText'>Ничего не найдено...</p>
                        </div>
                        <img src={mainGirlNoAds} alt="No ads illustration" className='mainEmptyImage' />
                    </div>
                ) : (
                    <div className='mainEmptyColumn'>
                        <div className='chatsEmptyTextBlock'>
                            <img src={chatsWindow} alt="No ads window" />
                            <p className='chatsEmptyText'>Тут еще пусто...</p>
                        </div>
                        <img src={mainGirlEmpty} alt="No ads illustration" className='mainEmptyImage' />
                    </div>
                )
            ) : (
                <div className='adsList'>
                    {filteredAds.map((item: IAds) => (
                        <AdCard key={item.id} id={item.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
