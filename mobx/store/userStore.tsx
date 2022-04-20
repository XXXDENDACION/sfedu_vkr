import { makeAutoObservable } from "mobx";

class User {
    constructor() {
        makeAutoObservable(this);
    }

    isAuth = false;
    count = 0;

    changeAuth = (): void => {
        this.count++;
        this.count++;
    }

    get
}

const userStore = new User();
export { userStore };