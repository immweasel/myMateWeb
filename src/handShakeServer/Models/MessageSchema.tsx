interface IMessage {
    message_id: number,
    conversation_id: number,
    sender_id: number,
    text: string,
    sending_time: Date | string,
    sent: boolean,
    received: boolean,
    viewed: boolean,
}

export type { IMessage };