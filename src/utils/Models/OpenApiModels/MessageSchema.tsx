// interface IMessage {
//     message_id: number,
//     conversation_id: number,
//     sender_id: number,
//     text: string,
//     sending_time: Date | string,
//     sent: boolean,
//     received: boolean,
//     viewed: boolean,
// } // This looks in the Plan

interface IMessage {
    message_id: number,
    sender_id: number,
    content: string,
    timestamp: string
} // This looks in OpenApi.yaml

export type { IMessage };