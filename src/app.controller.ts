import { Controller, Get, Redirect, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/')
  redirect(@Res() res) {
    return res.redirect('/auth/login')
  }

  @Get('dasbor')
  @Render('dasbor.hbs')
  root() {
    return { message: 'Hello App' };
  }
}
