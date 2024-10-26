interface IUser {
    user_id: number,
    surname: string,
    first_name: string,
    photo: string,
    gender: string,
    date_of_birth: Date | string // change if the request doesn't work
}

export type { IUser };