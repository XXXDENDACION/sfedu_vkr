import { IUser } from "./users";

interface IBaseEvent {
    title: string;
    description?: string;
    ownerId: number;
    start: Date;
    end: Date;
}

export interface IEventCreate extends IBaseEvent {
    participants: number[];
}

export interface IEvent extends IBaseEvent {
    participants: IUser[];
}

export interface IEventDetails extends IBaseEvent {
    users: IUser[];
}