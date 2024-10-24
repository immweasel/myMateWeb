import './Favourites.css';
import { useState } from 'react';
import favouritesMan from "../../assets/images/favouritesMan.png";
import chatsWindow from "../../assets/images/chatsWindow.svg";

interface FavouritesInterface {
    id: number;
    message: string;
    sender: string;
};

export default function Favourites() {

    const [favourites, setFavourites] = useState<FavouritesInterface[]>([]);

    return (
        <div className='favouritesMain'>
            <p className='chatsTitle'>Избранное</p>
            {favourites.length === 0
                ? <div className='chatsEmptyColumn'>
                    <div className='chatsEmptyTextBlock'>
                        <img src={chatsWindow} alt="No chats window" />
                        <p className='favouritesEmptyText'>Ты еще ничего не лайкнул...</p>
                    </div>
                    <img src={favouritesMan} alt="No chats illustration" className='favouritesEmptyImage' />
                </div>
                : <></>}
        </div>
    );
};