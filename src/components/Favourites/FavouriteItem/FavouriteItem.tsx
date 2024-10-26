import { FavouritesInterface } from '../interfaces/interfaces';
import breakFavourite from "../../../assets/icons/breakHeart.svg";
import './FavouriteItem.css';

export default function FavouriteItem({ id, title, subtitle }: FavouritesInterface) {
    return <div className='favouriteItem'> 
        <div className='favouriteItemColumn'>
            <p className='favouriteItemTitle'>{title}</p>
            <p className='favouriteItemSubtitle'>{subtitle}</p>
        </div>
        <img src={breakFavourite} alt='' />
    </div>
};