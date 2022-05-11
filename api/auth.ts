import { IUser } from "../utils/interfaces";
import $api from "./http";

const AUTH_API_URL = "/auth";

interface IAuth {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

class AuthService {
    static async login(email: string, password: string): Promise<{data: IAuth}> {
        return $api.post(AUTH_API_URL + "/login", {email, password});
    }

    static async registration(email: string, password: string): Promise<{data: IAuth}> {
        return $api.post(AUTH_API_URL + "/register", {email, password});
    }
}

export default AuthService;