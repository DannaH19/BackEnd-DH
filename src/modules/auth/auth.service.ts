import { AuthRepository } from "./auth.repository";
import { User } from "../users/users.model";
import { hashPassword } from "../../libs/bcrypt";

export class AuthService {

    private repository = new AuthRepository();

    async register(user: User) {
        const exists = await this.repository.findEmail(user.email);

        if (exists) {
            throw new Error('el usuario ya existe');
        }

        const hashedPassword = await hashPassword(user.password);

        user.password = hashedPassword;

        const result = await this.repository.create(user);

        console.log(result);
    }

}