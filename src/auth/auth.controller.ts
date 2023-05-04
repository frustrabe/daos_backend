import {
  Controller,
  Post,
  Request as Request2,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private auService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request2() req) {
    console.log(req.user);

    return this.auService.loginUser(req.user);
  }
  /*  @Post('auth/login')
  async loginUser(@Req() request: Request, @Body() body): Promise<Profile> {
    console.log(request);
    const result: Profile = await this.auService.loginUser(body.email);
    console.log(result);

    return result;
  } */
}
