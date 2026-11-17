import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { ArchivosModule } from '../archivos/archivos.module.js';
import { CategoriasModule } from '../categorias/categorias.module.js';
import { ReportesModule } from '../reportes/reportes.module.js';
import { UbicacionesModule } from '../ubicaciones/ubicaciones.module.js';
import { UsuariosModule } from '../usuarios/usuarios.module.js';
import { Autentificacion } from '../autentificacion/entities/autentificacion.entity.js';
import { AutentificacionModule } from '../autentificacion/autentificacion.module.js';
import { RolesModule } from '../roles/roles.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    RolesModule,
    ArchivosModule,
    AutentificacionModule,
    CategoriasModule,
    ReportesModule,
    UbicacionesModule,
    UsuariosModule,
    ConfigModule.forRoot(),
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'sos-tucuman-backend',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
