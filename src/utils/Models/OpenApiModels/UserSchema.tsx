interface IUser {
    user_id: number,
    surname: string,
    name: string,
    photo: string,
    gender: string,
    DateOfBirth: Date | string // change if the request doesn't work
}

export type { IUser };