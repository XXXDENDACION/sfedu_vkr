import axios from "axios";
import { IEventCreate, IEvent } from "../utils/interfaces";
import { API_URL } from "./constants";

const EVENT_API_URL = API_URL + "/event";

class EventService {
    createEvent = async (event: IEventCreate): Promise<IEventCreate> => {
        const company = await axios.post(EVENT_API_URL, event);
        return company.data;        
    };

    getEventsByUser = async (userId: number): Promise<IEvent> => {
        const events = await axios.get(EVENT_API_URL + `/${userId}`);
        return events.data;
    }
}

export default EventService;