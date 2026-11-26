import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { RegisterAuthDto } from './dto/register-auth.dto.js';

@Controller('autentificacion')
export class AutentificacionController {
  constructor(
    private readonly autentificacionService: AutentificacionService,
  ) {}

  @Post('register')
  register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.autentificacionService.register(registerAuthDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.autentificacionService.login(loginAuthDto);
  }
}