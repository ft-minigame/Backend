import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import axios from 'axios';
import { FtProfileInterface } from './interface/ft-profile.interface';
import { EUserCoalitions } from '../users/domain/models/user.entity';

@Injectable()
export class AuthService {
  async getProfile(accessToken: string): Promise<FtProfileInterface> {
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
      console.error(err);
      throw new ConflictException(err, '42 api 호출 중 에러가 발생했습니다.');
    }
  }

  async getToken(code: string): Promise<any> {
    const REDIRECT_URI = `${process.env.FT_AUTH_SECRET}/${process.env.REDIRECT_PARAMS}`;

    try {
      const ftTokenResponse = await axios.post(
        `https://api.intra.42.fr/oauth/token`,
        {
          grant_type: 'authorization_code',
          client_id: process.env.FT_AUTH_UID,
          client_secret: process.env.FT_AUTH_SECRET,
          code,
          redirect_uri: REDIRECT_URI,
        },
      );

      if (ftTokenResponse.status !== 200) {
        throw new ConflictException('Failed to fetch token from 42 API');
      }

      return ftTokenResponse.data;
    } catch (err) {
      console.error(err);
      throw new UnauthorizedException();
    }
  }

  async getCoalition(
    accessToken: string,
    id: number,
  ): Promise<EUserCoalitions> {
    try {
      const coalitionResponse = await axios.get(
        `https://api.intra.42.fr/v2/users/${id}/coalitions`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (coalitionResponse.status !== 200) {
        throw new ConflictException('Failed to fetch profile from 42 API');
      }

      return coalitionResponse.data[0].slug;
    } catch (err) {
      throw new ConflictException(err, '42 api 호출 중 에러가 발생했습니다.');
    }
  }
}
