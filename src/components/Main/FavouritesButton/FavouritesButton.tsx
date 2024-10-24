import './FavouritesButton.css';
import favButton from "../../../assets/icons/favButton.svg";
import favButtonSmall from "../../../assets/icons/favButtonSmall.svg";

interface FavouritesButtonInterface {
    type: string;
}

export default function FavouritesButton({ type }: FavouritesButtonInterface) {
    return (type === 'onAdCard'
        ? <button className="favButtonSmall">
            <img src={favButtonSmall} alt="" />
        </button>
        : <button className="favButtonBig">
            <img src={favButton} alt="" />
        </button>)
}