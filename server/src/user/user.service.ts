import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { СreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

    async createUser(user: СreateUserDto): Promise<User> {
        const newUser = await this.userModel.create(user);
        newUser.save();
        return newUser
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email })
    }
}