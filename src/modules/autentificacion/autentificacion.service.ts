import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service.js';
import { isPrismaUniqueConstraintError } from '../../prisma/prisma-error.util.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { hashPassword, verifyPassword } from './password.util.js';

@Injectable()
export class AutentificacionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }
  async register(registerAuthDto: RegisterAuthDto) {
    const password_hash = await hashPassword(registerAuthDto.password);

    try {
      const usuario = await this.prisma.usuarios.create({
        data: {
          nombre: registerAuthDto.nombre,
          apellido: registerAuthDto.apellido,
          email: registerAuthDto.email,
          password_hash,
          id_rol: registerAuthDto.id_rol ?? 1,
        },
        select: {
          id_usuario: true,
          nombre: true,
          apellido: true,
          email: true,
          id_rol: true,
          fecha_registro: true,
          rol: true,
        },
      });

      return usuario;
    } catch (error) {
      if (isPrismaUniqueConstraintError(error)) {
        throw new ConflictException(
          'Ya existe una cuenta con ese correo electrónico.',
        );
      }

      throw error;
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    const usuario = await this.prisma.usuarios.findUnique({
      where: { email: loginAuthDto.email },
      include: { rol: true },
    });

    if (
      !usuario ||
      !(await verifyPassword(loginAuthDto.password, usuario.password_hash))
    ) {
      throw new UnauthorizedException('Correo o contraseña incorrectos.');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: usuario.id_usuario,
      email: usuario.email,
      rol: usuario.rol.nombre,
    });

    return {
      access_token: accessToken,
      usuario: {
        id_usuario: usuario.id_usuario,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        fecha_registro: usuario.fecha_registro,
        rol: usuario.rol,
      },
    };
  }
}