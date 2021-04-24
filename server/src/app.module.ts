import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb+srv://karim:12345@e-commerce.yztzr.mongodb.net/e-commerce?retryWrites=true&w=majority'),

    // ServeStaticModule.forRoot({
    //   rootPath: path.join(__dirname, 'static'),

    // }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', 'client'),
      exclude: ['api/*']
    }),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]

})
export class AppModule { }
