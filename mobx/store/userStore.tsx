import { makeAutoObservable, runInAction } from "mobx";
import UserService from "../../api/users";
import { IUser, ITableUser } from "../../utils/interfaces";

class Users {
    constructor() {
        makeAutoObservable(this);
    }

    userService = new UserService();
    isLoading = false;
    users: IUser[];

    getUsersAsync = async (): Promise<void> => {
        this.isLoading = true;
        try {
            const users = await this.userService.getUsers();
            runInAction(() => {
                this.users = users;
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
            console.log(e);
        }
    }

    get tableUsers(): ITableUser[] {
        if (this.users) {
            return this.users.map(user => ({...user, key: user.id}));
        }
    }

}

const usersStore = new Users();
export { usersStore };