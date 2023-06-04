import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/domain/services/users.service';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';

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

  async getProfile(accessToken: string): Promise<any> {
    try {
      const ftProfileResponse = await axios.get(
        `https://api.intra.42.fr/v2/me`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (ftProfileResponse.status !== 200) {
        throw new ConflictException('Failed to fetch profile from 42 API');
      }

      return ftProfileResponse.data;
    } catch (err) {
      // console.error(err);
      throw new ConflictException(err, '42 api 호출 중 에러가 발생했습니다.');
    }
  }

  async getToken(code: string): Promise<any> {
    return await this.ftFetch(code);
  }

  private async ftFetch(code: string) {
    const UID =
      'u-s4t2ud-38550761e834c25fce3bd7272f71cdab32f65acead8e2d2373a7770fdeb05175';
    const SECRET =
      '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';
    const REDIRECT_URI = 'http://localhost:3000/redirect';
    const URL = `https://api.intra.42.fr/oauth/token`;

    try {
      const ftTokenResponse = await axios.post(URL, {
        grant_type: 'authorization_code',
        client_id: UID,
        client_secret: SECRET,
        code,
        redirect_uri: REDIRECT_URI,
      });
      if (ftTokenResponse.status !== 200) {
        throw new ConflictException('Failed to fetch token from 42 API');
      }

      return ftTokenResponse.data;
    } catch (err) {
      // console.error(err);
      throw new UnauthorizedException();
    }
  }
}
