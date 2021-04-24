import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from 'src/file/file.module';
import { User, UserSchema } from 'src/user/schemas/user';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CommentSchema, Comment } from './schemas/comment.schema';
import { Product, ProductSchema } from './schemas/product.schema';


@Module({
    imports: [
        FileModule,
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})

export class ProductModule { }