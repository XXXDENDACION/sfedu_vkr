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
    selectedUserId: number;

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

    // getUserAsync = async (id): Promise<void> => {
    //     this.isLoading = true;
    //     try {
    //         const user = await this.userService.getUserDetails(id);
    //         runInAction(() => {
    //             this.isLoading = false;
    //         });
    //     } catch (e) {
    //         this.isLoading = false;
    //         console.log(e);
    //     }
    // }

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

    handleSelectUserId = (id: number): void => {
        this.selectedUserId = id;
    }

    get tableUsers(): ITableUser[] {
        if (this.users) {
            return this.users.map(user => ({...user, key: user.id, position: user?.role?.role}));
        }
    }

    get selectedUser(): IUser {
        if (this.selectedUserId && this.users?.length > 0) {
            return this.users.find(user => user.id === this.selectedUserId);
        }
    }

    get fullName(): string {
        if (this.selectedUserId && this.users?.length > 0) {
            const user = this.users.find(user => user.id == this.selectedUserId);
            return user.firstName + " " + user.lastName;
        }
    }

}

const usersStore = new Users();
export { usersStore };