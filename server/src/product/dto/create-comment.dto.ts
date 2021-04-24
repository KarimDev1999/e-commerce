import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateCommentDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    comment: string;
    @IsNotEmpty()
    user: ObjectId;
    @IsNotEmpty()
    product: ObjectId;
}