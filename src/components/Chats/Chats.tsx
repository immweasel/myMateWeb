import { useState } from 'react';
import './Chats.css';
import chatsGirl from "../../assets/images/chatsGirl.png";
import chatsWindow from "../../assets/images/chatsWindow.svg";

interface Chat {
    id: number;
    message: string;
    sender: string;
};

export default function Chats() {

    const [chats, setChats] = useState<Chat[]>([]);

    return (
        <div className='chatsMain'>
            <p className='chatsTitle'>Диалоги</p>
            {chats.length === 0
                ? <div className='chatsEmptyColumn'>
                    <div className='chatsEmptyTextBlock'>
                        <img src={chatsWindow} alt="No chats window" />
                        <p className='chatsEmptyText'>Пока сообщений нет</p>
                    </div>
                    <img src={chatsGirl} alt="No chats illustration" className='chatsEmptyImage' />
                </div>
                : <></>}
        </div>
    );
}
