import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../domain/services/users.service';
import { User } from '../domain/models/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':intraId')
  findOneByIntraId(@Param('intraId') intraId: string): Promise<User | null> {
    return this.usersService.findOneByIntraId(intraId);
  }
}
