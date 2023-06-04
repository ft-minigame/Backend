import { Controller, Get, Query, Redirect, Render } from '@nestjs/common';
import { AuthService } from '../domain/oauth.service';

@Controller('oauth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Redirect()
  login() {
    return { url: this.authService.getRedirectUrl() };
  }

  @Get('callback')
  @Render('welcome')
  async callback(@Query('code') code: string) {
    const userInfo = await this.authService.login(code);
    return { user: userInfo };
  }
}
