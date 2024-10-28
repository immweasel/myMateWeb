import { IChat } from "../interfaces/interfaces";
import './ChatsItem.css';

interface ChatsItemProps extends IChat {
    state: boolean;
};

export default function ChatsItem({ id, name, cover, state }: ChatsItemProps) {
    return (
        <div className="chatsItemBlock">
            <div className="chatsItem" >
                <div className="chatsItemDataLine" >
                    <img src={cover} alt="" className="chatsItemCover" />
                    <p className="chatsItemName">{name}</p>
                </div>
                <button className="chatsItemButton">Перейти</button>
            </div>
            {state && <hr className="chatsItemHr" />}
        </div>
    );
};
