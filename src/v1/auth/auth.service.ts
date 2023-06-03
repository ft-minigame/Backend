import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/domain/services/users.service';
import { JwtService } from '@nestjs/jwt';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  create_at: number;
}

interface ProfileResponse {
  intraId: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(intraId, pass) {
    const user = await this.usersService.findOneByIntraId(intraId);

    if (!user) {
      //TODO: add user to db
    }

    const payload = {};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getProfile(accessToken: string): Promise<ProfileResponse> {
    try {
      const ftProfileResponse = await fetch(
        `https://api.intra.42.fr/v2/me?access_token=${accessToken}`,
        {
          method: 'POST',
        },
      );

      if (ftProfileResponse.status !== 200) {
        throw new ConflictException('Failed to fetch profile from 42 API');
      }

      return ftProfileResponse.json();
    } catch (err) {
      throw new ConflictException(err, '42 api 호출 중 에러가 발생했습니다.');
    }
  }

  async getToken(code: string): Promise<TokenResponse> {
    return await this.ftFetch(code);
  }

  private async ftFetch(code: string): Promise<TokenResponse> {
    try {
      const ftTokenResponse = await fetch(
        `https://api.intra.42.fr/oauth/token?code=${code}`,
        {
          method: 'POST',
        },
      );

      if (ftTokenResponse.status !== 200) {
        throw new ConflictException('Failed to fetch token from 42 API');
      }

      return ftTokenResponse.json();
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException();
    }
  }
}
