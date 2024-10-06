import { Body, Controller, Get, HttpCode, HttpStatus, Post, Render } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        // return this.authService.signIn(signInDto.username, signInDto.password);
        return this.authService.signInDb(signInDto.username, signInDto.password);
    }

    @Get('login')
    @Render('login.hbs')
    loginPage() {
        return { message: 'Login App' }
    }
}
