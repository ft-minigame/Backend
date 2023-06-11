import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/domain/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('/callback')
  async callback(@Query('code') code: string) {
    const { access_token: accessToken } = await this.authService.getToken(code);
    const profile = await this.authService.getProfile(accessToken);
    let user = await this.usersService.findOneByIntraId(profile.login);

    if (!user) {
      const coalitions = await this.authService.getCoalition(
        accessToken,
        profile.id,
      );

      user = await this.usersService.createAndSave({
        intraId: profile.login,
        coalitions,
      });
    }

    return this.jwtService.sign({
      username: user,
    });
  }
}
