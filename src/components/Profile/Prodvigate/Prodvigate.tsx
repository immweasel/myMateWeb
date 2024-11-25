import { useState } from 'react';
import TopWithArrow from '../Common/TopWithArrow';
import QRVK from "../../../assets/images/QRVk.png";
import './Prodvigate.css';
import { Link } from 'react-router-dom';
/*
interface AdInterface {
    id: number;
    title: string;
};
*/
export default function Prodvigate() {

    //const [ads, setAds] = useState<AdInterface[]>([]);

    return (
        <div className='mainProdvigate'>
            <TopWithArrow link='/profile/myAds' />
            <div className='myProdvigateContent'>
                <div className='myProdvigateContentHeader'>
                    <p className='myProdvigateContentHeaderTitle'>Выберите продвижение</p>
                </div>
                
                <div className='myProdvigateContentHeader'>
                    <div className='myProdvigateContentHeaderTitle'>
                        <div className='QR'>
                            <img src={QRVK}  width=" 122" height=" 120"></img>
                            <a href='https://vk.com/moitovarish' className='linkNolineCreate' >
                                <button className='myProdvigateContentHeaderButton'>Перейти в группу Вк</button>
                            </a>
                        </div>
                    </div>

                </div>
            <button className='myProdvigateContentButton'>Оплатить</button>
                
            </div>
        </div>
    );
};
