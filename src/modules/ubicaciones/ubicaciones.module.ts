import { Module } from '@nestjs/common';
import { UbicacionesService } from './ubicaciones.service.js';
import { UbicacionesController } from './ubicaciones.controller.js';

@Module({
  controllers: [UbicacionesController],
  providers: [UbicacionesService],
})
export class UbicacionesModule {}
