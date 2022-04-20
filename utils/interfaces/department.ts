import { IUser } from "./users";

export interface IDepartment {
    id: number;
    name: string;
    members: IUser[];
}