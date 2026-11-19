import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { isPrismaUniqueConstraintError } from '../../prisma/prisma-error.util.js';
import { hashPassword } from '../autentificacion/password.util.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';

const USUARIO_SELECT = {
  id_usuario: true,
  nombre: true,
  apellido: true,
  email: true,
  id_rol: true,
  fecha_registro: true,
  rol: true,
} as const;

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.usuarios.findMany({
      select: USUARIO_SELECT,
      orderBy: { id_usuario: 'asc' },
    });
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuarios.findUnique({
      where: { id_usuario: id },
      select: USUARIO_SELECT,
    });

    if (!usuario) {
      throw new NotFoundException(`No se encontró el usuario con ID ${id}.`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id);

    const { password, ...datosActualizables } = updateUsuarioDto;
    const password_hash = password ? await hashPassword(password) : undefined;

    try {
      return await this.prisma.usuarios.update({
        where: { id_usuario: id },
        data: {
          ...datosActualizables,
          ...(password_hash ? { password_hash } : {}),
        },
        select: USUARIO_SELECT,
      });
    } catch (error) {
      if (isPrismaUniqueConstraintError(error)) {
        throw new ConflictException(
          'Ya existe una cuenta con ese correo electrónico.',
        );
      }

      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.usuarios.delete({
      where: { id_usuario: id },
      select: USUARIO_SELECT,
    });
  }
}
