import axios from "axios";
import {makeAutoObservable, runInAction} from "mobx";
import AuthService from "../../api/auth";
import { API_URL } from "../../api/constants";

export interface AuthStore {
    store: Auth;
}

class Auth {
    constructor() {
        makeAutoObservable(this);
        this.authService = new AuthService();
    }

    authService;
    user;
    isAuth = false;
    isLoading = false;
    isCompletedCheck = false;

    setAuth(isAuth: boolean): void {
        this.isAuth = isAuth;
    }

    setUser(user): void {
        this.user = user;
    }

    async login(email: string, password: string): Promise<void> {
        try {
            this.isLoading = true;
            const response = await AuthService.login(email, password);
            console.log(response);
            runInAction(() => {
                localStorage.setItem("token", response.data.accessToken);
                this.setAuth(true);
                this.setUser(response.data.user);
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
            console.log(e);
        }
    }

    async checkAuth(): Promise<void> {
        this.isCompletedCheck = false;
        try {
            this.isLoading = true;
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true});
            runInAction(() => {
                localStorage.setItem("token", response.data.accessToken);
                this.setAuth(true);
                this.setUser(response.data.user);
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
            console.log(e);
        } finally {
            this.isCompletedCheck = true;
        }
    }
}

const authStore = new Auth();
export {authStore};