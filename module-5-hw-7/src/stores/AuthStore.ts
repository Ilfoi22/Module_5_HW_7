import { makeAutoObservable} from "mobx";
import * as authApi from "../api/modules/auth";

class AuthStore {
    token = "";
    email = "";

    constructor() {
        makeAutoObservable(this);
    }

    async login(email: string, password: string) {
        const result = await authApi.login({email, password});
        this.token = result.token;
        this.email = email;
    }

    async registration(email: string, password: string) {
        const result = await authApi.register({email, password});
        this.token = result.token;
        this.email = email;
    }

    async logout() {
        this.token = "";
    }
}

export default AuthStore;