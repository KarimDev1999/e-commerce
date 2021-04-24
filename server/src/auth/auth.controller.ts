import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { СreateUserDto } from '../user/dto/create-user.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(@Body() user: СreateUserDto) {
        return this.authService.register(user);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req) {
        return this.authService.login(req.user)
    }


    @UseGuards(JwtAuthGuard)
    @Get('/checkToken')
    auth(@Request() req) {
        return this.authService.checkToken(req.user)
    }

}