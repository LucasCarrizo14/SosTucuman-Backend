import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AutentificacionController } from './autentificacion.controller.js';
import { AutentificacionService } from './autentificacion.service.js';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      useFactory: () => {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
          throw new Error('Falta configurar JWT_SECRET en el archivo .env');
        }
        return {
          secret,
          signOptions: { expiresIn: '1d' },
        };
      },
    }),
  ],
  controllers: [AutentificacionController],
  providers: [AutentificacionService],
})
export class AutentificacionModule{ }