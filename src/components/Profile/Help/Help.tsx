import { useState } from 'react';
import TopWithArrow from '../Common/TopWithArrow';
import myAdsWindow from "../../../assets/images/myAdsWindow.svg";
import mySupGirl from "../../../assets/images/supGirl.png";
import QRVK from "../../../assets/images/QRVk.png";
import './Help.css';
import { Link } from 'react-router-dom';

interface AdInterface {
    id: number;
    title: string;
};

export default function MyAds() {

    const [ads, setAds] = useState<AdInterface[]>([]);

    return (
        <div className='mainHelp'>
            <TopWithArrow link='/profile' />
            <div className='myHelpContent'>
                <div className='myHelpContentHeader'>
                    <p className='myHelpContentHeaderTitle'>Помощь</p>
                </div>
                
                <div className='myHelpContentHeader'>
                    <div className='myHelpContentHeaderTitle'>
                        <div className='QR'>
                            <img src={QRVK}  width=" 122" height=" 120"></img>
                            <a href='https://vk.com/moitovarish' className='linkNolineCreate' >
                                <button className='myHelpContentHeaderButton'>Перейти в группу Вк</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div className='Names'>
                        <p>Или вы можете связаться с нами <br></br>по почте:</p>
                    </div>
                
                <div className='Nams'>
                        <p><b>тут_наш_адрес_почты@почта.ру</b></p>
                    </div>

                 <div className='myHelpEmptyColumn'>
                    <img src={mySupGirl} alt="No chats illustration" className='myHelpEmptyImage' />
                </div>
            </div>
        </div>
    );
};
