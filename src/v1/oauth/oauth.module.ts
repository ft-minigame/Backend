import { Module } from '@nestjs/common';
import { AuthController } from './controllers/oauth.controllers';
import { AuthService } from './domain/oauth.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
