import { IDepartment } from "./department";

interface IRole {
    id: number;
    role: string;
}

interface ISkill {
    id: number;
    skill: string;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age?: string;
    photo?: string;
    position?: string;
    skills?: ISkill[];
    role: IRole;
}

export interface ITableUser extends IUser {
    key: number;
}

export interface IUserSelectedFilters {
    skills: number;
    roles: number;
    departments: number;
}

export interface IUserFilters {
    skills: ISkill[];
    roles: IRole[];
    departments: IDepartment[];
}