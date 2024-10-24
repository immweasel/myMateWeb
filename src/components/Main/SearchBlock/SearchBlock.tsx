import searchIcon from "../../../assets/icons/search.svg";
import { useState } from "react";

export default function SearchBlock() {

    const [search, setSearch] = useState<string>('');

    return (
        <div className='mainHeaderSearchBlock'>
            <input
                placeholder='Найти соседа'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='mainHeaderSearchInput'
            />
            <img src={searchIcon} alt="Search" className='mainHeaderSearchIcon' />
        </div>
    );
}
