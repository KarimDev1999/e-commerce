import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { FileService } from "src/file/file.service";
import { Product, ProductDocument } from "./schemas/product.schema";
import { CommentDocument, Comment } from './schemas/comment.schema'
import { User, UserDocument } from "src/user/schemas/user";


@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
        @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>,
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        private readonly fileService: FileService
    ) { }

    async getAll(page: number, limit: number): Promise<{}> {
        const all = await this.productModel.find();
        const paginatedProducts = await this.productModel.find().limit(limit).skip((page - 1) * limit);
        return { paginatedProducts: paginatedProducts, total: all.length }
    }
    async getOne(id: ObjectId): Promise<Product> {
        const product = await this.productModel.findById(id).populate('comments')
        return product
    }
    async create(product, image): Promise<Product> {
        const imagePath = this.fileService.createFile(image)
        const newProduct = await this.productModel.create({ ...product, likes: [], image: imagePath })
        return newProduct;
    }
    async search(query): Promise<Product[]> {
        const products = await this.productModel.find({
            name: { $regex: new RegExp(query, 'i') }
        })
        return products;
    }
    async addComment(comment): Promise<Comment> {
        const product = await this.productModel.findById(comment.product);
        const user = await this.userModel.findById(comment.user)
        const newComment = await this.commentModel.create({ ...comment });
        newComment.product = product._id;
        newComment.user = user._id;
        product.comments.unshift(newComment._id);
        await product.save()
        await newComment.save();
        return newComment;
    }
    async delete(id: ObjectId): Promise<ObjectId> {
        const deletedProduct = await this.productModel.findByIdAndDelete(id);
        deletedProduct.comments.forEach(async commentId => {
            const comment = await this.commentModel.findByIdAndDelete(commentId)
            comment.save()
        })
        return deletedProduct._id
    }
    async addLike(userId: ObjectId, productId: ObjectId): Promise<ObjectId | null> {
        const product = await this.productModel.findById(productId);
        const user = await this.userModel.findById(userId);
        if (product.likes.includes(user._id)) {
            return null
        }
        product.likes.push(user._id);
        product.save();
        return userId;
    }
    async removeLike(userId: ObjectId, productId: ObjectId): Promise<User[]> {
        const product = await this.productModel.findById(productId);
        const user = await this.userModel.findById(userId);
        product.likes.splice(product.likes.indexOf(user._id), 1);
        product.save();
        return product.likes
    }
    async removeComment(commentId: ObjectId): Promise<{ commentId: ObjectId, productId: ObjectId }> {
        const comment = await this.commentModel.findByIdAndDelete(commentId);
        const product = await this.productModel.findById(comment.product);
        product.comments = product.comments.filter(c => c.toString() !== comment._id.toString());
        product.save();
        return { commentId, productId: product._id }
    }
}