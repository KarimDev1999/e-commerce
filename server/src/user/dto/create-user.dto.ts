import { IsString, IsEmail, Length, IsNotEmpty } from 'class-validator'

export class СreateUserDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(4, 16, { message: 'пароль должен быть не меньше 4 и не больше 16 символов' })
    password: string;
}


