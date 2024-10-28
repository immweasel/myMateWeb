import './Favourites.css';
import { useEffect, useState } from 'react';
import favouritesMan from "../../assets/images/favouritesMan.png";
import chatsWindow from "../../assets/images/chatsWindow.svg";
import { FavouritesInterface } from './interfaces/interfaces';
import FavouriteItem from './FavouriteItem/FavouriteItem';
import adAppartment1 from "../../assets/images/adAppartment1.png";

export default function Favourites() {

    const [favourites, setFavourites] = useState<FavouritesInterface[]>([]);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        setFavourites([{ id: 123, title: 'Ищу соседа в район Чистые пруды', subtitle: 'Квартира найдена, двушка, 50 кв.м., современный ремонт', cover: adAppartment1 }, { id: 123, title: 'Ищу соседа в район Чистые пруды', subtitle: 'Квартира найдена, двушка, 50 кв.м., современный ремонт', cover: adAppartment1  }, { id: 123, title: 'Ищу соседа в район Чистые пруды', subtitle: 'Квартира найдена, двушка, 50 кв.м., современный ремонт', cover: adAppartment1  }]);
    };

    return (
        <div className='favouritesMain'>
            <p className='chatsTitle'>Избранное</p>
            {favourites.length === 0
                ? <div className='favourotesEmptyColumn'>
                    <div className='chatsEmptyTextBlock'>
                        <img src={chatsWindow} alt="No chats window" />
                        <p className='favouritesEmptyText'>Ты еще ничего не лайкнул...</p>
                    </div>
                    <img src={favouritesMan} alt="No chats illustration" className='favouritesEmptyImage' />
                </div>
                : <div className='favouritesColumn'>
                    {favourites.map(item => <FavouriteItem id={item.id} title={item.title} subtitle={item.subtitle} cover={item.cover} />)}
                </div>}
        </div>
    );
};