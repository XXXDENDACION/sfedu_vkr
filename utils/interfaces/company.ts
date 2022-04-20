import { IDepartment } from "./department";
import { IUser } from "./users";

export interface ICompany {
    id: number;
    name: string;
    departments: IDepartment[];
    owner: IUser;
}