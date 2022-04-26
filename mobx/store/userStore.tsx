import { makeAutoObservable, runInAction } from "mobx";
import UserService from "../../api/users";
import {IUser, ITableUser, IUserFilters, IUserSelectedFilters} from "../../utils/interfaces";

const initialSelectedFilters: IUserSelectedFilters = {
    departments: null,
    roles: null,
    skills: null
};

class Users {
    selectedFilters = initialSelectedFilters;
    constructor() {
        makeAutoObservable(this);
        this.selectedFilters = initialSelectedFilters;
    }

    userService = new UserService();

    isLoading = false;
    users: IUser[];

    filters: IUserFilters;

    getUsersAsync = async (filters?: IUserSelectedFilters): Promise<void> => {
        this.isLoading = true;
        try {
            const users = await this.userService.getUsers(filters);
            runInAction(() => {
                this.users = users;
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
            console.log(e);
        }
    }

    getFiltersAsync = async (): Promise<void> => {
        this.isLoading = true;
        try {
            const filters = await this.userService.getFilters();
            runInAction(() => {
                this.filters = filters;
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
        }
    }

    onSelectFilter = (type: string, value: number): void => {
        this.selectedFilters[type] = value;
    }

    clearFilters = (): void => {
        this.selectedFilters = initialSelectedFilters;
    }

    get tableUsers(): ITableUser[] {
        if (this.users) {
            return this.users.map(user => ({...user, key: user.id, position: user?.role?.role}));
        }
    }

}

const usersStore = new Users();
export { usersStore };