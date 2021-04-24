import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from './product.schema';
import { User } from 'src/user/schemas/user';
export type CommentDocument = Comment & Document;


@Schema()
export class Comment {
    @Prop()
    username: string;
    @Prop()
    comment: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    product: Product
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User
}

export const CommentSchema = SchemaFactory.createForClass(Comment);