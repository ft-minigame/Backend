import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  private readonly client_id = process.env.CLIENT_ID;
  private readonly client_secret = process.env.CLIENT_SECRET;
  private readonly redirect_uri = process.env.REDIRECT_URI;

  constructor(private httpService: HttpService) {}

  getRedirectUrl() {
    const url = new URL('https://api.intra.42.fr/oauth/authorize');
    url.searchParams.append('client_id', this.client_id);
    url.searchParams.append('redirect_uri', this.redirect_uri);
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('scope', 'public');
    return url.toString();
  }

  async login(code: string) {
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: this.client_id,
      client_secret: this.client_secret,
      code: code,
      redirect_uri: this.redirect_uri,
    });

    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    const response = await this.httpService
      .post('https://api.intra.42.fr/oauth/token', params.toString(), {
        headers,
      })
      .toPromise();
    const accessToken = response.data.access_token;

    const userInfo = await this.httpService
      .get('https://api.intra.42.fr/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .toPromise();

    return userInfo.data;
  }
}
