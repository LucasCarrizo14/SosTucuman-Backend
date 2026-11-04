import { Module } from '@nestjs/common';
import { AutentificaciónService } from './autentificación.service.js';
import { AutentificaciónController } from './autentificación.controller.js';

@Module({
  controllers: [AutentificaciónController],
  providers: [AutentificaciónService],
})
export class AutentificaciónModule {}
