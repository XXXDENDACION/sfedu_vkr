import { IUser } from "./users";

interface IBaseEvent {
    title: string;
    description?: string;
    ownerId: number;
}

export interface IEventCreate extends IBaseEvent {
    participants: number[];
}

export interface IEvent extends IBaseEvent {
    participants: IUser[];
}