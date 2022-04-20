import axios from "axios";
import { IUser } from "../utils/interfaces";
import { API_URL } from "./constants";

const USERS_API_URL = API_URL + "/user";

class UserService {
    getUsers = async (): Promise<IUser[]> => {
        const user = await axios.get(USERS_API_URL + "/1");
        return user.data;        
    }
}

export default UserService;