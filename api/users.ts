import axios from "axios";
import {IUser, IUserFilters, IUserSelectedFilters} from "../utils/interfaces";
import { API_URL } from "./constants";

const USERS_API_URL = API_URL + "/user";

class UserService {
    getUsers = async (filters?: IUserSelectedFilters): Promise<IUser[]> => {
        const user = await axios.post(USERS_API_URL + "/1", {filters});
        return user.data;        
    };

    getFilters = async (): Promise<IUserFilters> => {
        const filters = await axios.get(USERS_API_URL + "/filters/1");
        return filters.data;
    };

    getUserDetails = async (id: number): Promise<IUser> => {
        const user = await axios.get(USERS_API_URL + id);
        return user.data;
    }
}

export default UserService;