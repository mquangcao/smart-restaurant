import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { LoginRequestDto } from '../dtos/login-request.dto';
import { AccountAuthenticateService } from '../services/account-authenticate.service';

@ApiTags('Account / Authenticate')
@Controller('api/account/auth')
export class AccountAuthenticateController {
  constructor(private readonly authenticateService: AccountAuthenticateService) {}

  @Post('login')
  @ApiOperation({
    summary: 'User login',
    description: 'Authenticate user and return access/refresh tokens',
  })
  @ApiBody({ type: LoginRequestDto })
  async login(@Body() loginDto: LoginRequestDto, @Req() req: Request) {
    const userAgent = req.headers['user-agent'];
    const ipAddress = (req as any).ip || (req as any).connection.remoteAddress;

    const loginResponse = await this.authenticateService.login(loginDto, userAgent, ipAddress);

    return loginResponse;
  }
}
