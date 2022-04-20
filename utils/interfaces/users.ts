export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age?: string;
    photo?: string;
    position?: string;
    skills?: string[];
}

export interface ITableUser extends IUser {
    key: number;
}