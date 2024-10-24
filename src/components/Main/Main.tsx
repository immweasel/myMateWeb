import { useState, useEffect, useRef } from 'react';
import './Main.css';
import mainGirlEmpty from "../../assets/images/mainGirlEmpty.png";
import chatsWindow from "../../assets/images/chatsWindow.svg";
import sortIcon from "../../assets/icons/sortIcon.svg";
import checkMark from "../../assets/icons/checkMark.svg";
import SearchBlock from './SearchBlock/SearchBlock';

interface SortItem {
    text: string;
    state: string;
}

const itemSort: SortItem[] = [
    { text: 'По алфавиту (возр)', state: 'alphabetUp' },
    { text: 'По алфавиту (убыв)', state: 'alphabetDown' }
];

export default function Main() {
    const [ads, setAds] = useState<any[]>([]);    
    const [sort, setSort] = useState<string>('alphabetUp');
    const [sortOpen, setSortOpen] = useState<boolean>(false);

    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

    return (
        <div className='mainColumn'>
            <div className='mainHeader'>
                <SearchBlock />

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

            {ads.length === 0 ? (
                <div className='mainEmptyColumn'>
                    <div className='chatsEmptyTextBlock'>
                        <img src={chatsWindow} alt="No ads window" />
                        <p className='chatsEmptyText'>Тут еще пусто...</p>
                    </div>
                    <img src={mainGirlEmpty} alt="No ads illustration" className='mainEmptyImage' />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
