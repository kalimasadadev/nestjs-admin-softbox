import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('login')
export class LoginController {
    constructor(private readonly appService: AppService) {}

    @Get('index')
    @Render('login.hbs')
    root() {
        return { message: 'Login App' }
    }
}
