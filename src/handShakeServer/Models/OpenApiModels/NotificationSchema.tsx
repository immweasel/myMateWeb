interface INotification {
    notification_id: number,
    recipient_id: number,
    title: string,
    text: string,
    sended: boolean,
}

export type { INotification };