import { Module } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service.js';
import { AutentificacionController } from './autentificacion.controller.js';

@Module({
  controllers: [AutentificacionController],
  providers: [AutentificacionService],
})
export class AutentificacionModule {}
