import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'
import { Comment } from './comment.schema'
import { User } from 'src/user/schemas/user';
export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop()
    price: number;
    @Prop()
    image: string;
    @Prop()
    quantity: number;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    likes: User[];
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
    comments: Comment[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);