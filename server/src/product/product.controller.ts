import { Body, Controller, Get, Post, UseInterceptors, UploadedFiles, Param, Delete, Query, Put } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto.';
import { ProductService } from './product.service';
import { CreateCommentDto } from "./dto/create-comment.dto";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getAll(@Query('page') page = 1, @Query('limit') limit = 8) {
        return this.productService.getAll(+page, +limit);
    }

    @Get('search')
    search(@Query('query') query: string) {
        return this.productService.search(query)
    }

    @Post('comment')
    addComment(@Body() comment: CreateCommentDto) {
        return this.productService.addComment(comment)
    }
    @Delete('comment/:id')
    removeComment(@Param('id') commentId) {
        return this.productService.removeComment(commentId)
    }

    @UseInterceptors(FileFieldsInterceptor([
        { name: 'image', maxCount: 1 }
    ]))
    @Post()
    create(@UploadedFiles() files, @Body() product: CreateProductDto) {
        const { image } = files
        return this.productService.create(product, image[0]);
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.productService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.productService.delete(id);
    }

    @Post('like')
    addLike(@Body() { userId, productId }) {
        return this.productService.addLike(userId, productId)
    }
    @Post('unlike')
    removeLike(@Body() { userId, productId }) {
        return this.productService.removeLike(userId, productId)
    }


}