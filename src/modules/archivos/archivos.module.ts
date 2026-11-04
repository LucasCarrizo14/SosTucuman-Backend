import { Module } from '@nestjs/common';
import { ArchivosService } from './archivos.service.js';
import { ArchivosController } from './archivos.controller.js';

@Module({
  controllers: [ArchivosController],
  providers: [ArchivosService],
})
export class ArchivosModule {}
