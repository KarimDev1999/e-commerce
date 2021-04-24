import { Injectable } from "@nestjs/common";
import { User } from "src/user/schemas/user";
import { UserService } from "src/user/user.service";
import { HttpException, HttpStatus } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.userService.findByEmail(email)
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (user && isValidPassword) {
            return user
        }
        return null;
    }
    async register(user: User): Promise<any> {
        const candidate = await this.userService.findByEmail(user.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(user.password, 5);
        const newUser = await this.userService.createUser({ ...user, password: hashedPassword });
        return { user: newUser, ...await this.generateToken(newUser) }
    }

    async login(user: any): Promise<any> {
        return { user: user, ...await this.generateToken(user) }
    }

    async generateToken(user): Promise<any> {
        const payload = { email: user.email, sub: user._id }
        return { access_token: await this.jwtService.sign(payload) }
    }

    async checkToken(payload): Promise<User> {
        const user = await this.userService.findByEmail(payload.email);
        return user
    }

}