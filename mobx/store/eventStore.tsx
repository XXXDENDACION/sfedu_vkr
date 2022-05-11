import {makeAutoObservable, runInAction} from "mobx";
import EventService from "../../api/events";
import { IEvent, IEventCreate } from "../../utils/interfaces";

class Event {
    constructor() {
        makeAutoObservable(this);
        this.eventService = new EventService();
    }

    eventService;
    eventsUser: IEvent[];
    isLoading = false;

    getEventsByUser = async (id: number): Promise<void> => {
        this.isLoading = true;
        try {
            const events = await this.eventService.getEventsByUser(id);
            runInAction(() => {
                this.eventsUser = events;
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
            console.log(e);
        }
    }

    createEvent = async (event: IEventCreate): Promise<void> => {
        this.isLoading = true;
        try {
            await this.eventService.createEvent(event);
            await this.getEventsByUser(1);
            runInAction(() => {
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
            console.log(e);
        }
    }
}

const eventStore = new Event();
export {eventStore};