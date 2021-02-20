import { User } from '../models/user';

export class UserController {
    private userModel : User;

    constructor() {
        this.userModel = new User();
    }

    login (content: any) {
        return this.userModel.login(content.user, content.password);
    }
}