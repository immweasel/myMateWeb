import { useEffect, useState } from 'react';
import './Chats.css';
import chatsGirl from "../../assets/images/chatsGirl.png";
import chatsWindow from "../../assets/images/chatsWindow.svg";
import { IChat } from './interfaces/interfaces';
import ChatsItem from './ChatsItem/ChatsItem';
import chatsItemMan from "../../assets/images/chatsItemMan.png";

export default function Chats() {

    const [chats, setChats] = useState<IChat[]>([]);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        setChats([{ id: 123, name: 'Андрей Николаев', cover: chatsItemMan }, { id: 124, name: 'Андрей Николаев', cover: chatsItemMan }, { id: 125, name: 'Андрей Николаев', cover: chatsItemMan }]);
    };

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
                : <div className='chatsColumnItems'>
                    {chats.map((item, index) => (
                        <ChatsItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            cover={item.cover}
                            state={chats.length - 1 !== index} // передаем state как булево значение
                        />
                    ))}
                </div>}
        </div>
    );
}
