import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateRoleDto } from './dto/create-role.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) { }

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.roles.create({
      data: createRoleDto,
    });
  }

  findAll() {
    return this.prisma.roles.findMany();
  }

  async findOne(id: number) {
    const rol = await this.prisma.roles.findUnique({
      where: { id_rol: id },
    });
    if (!rol) {
      throw new NotFoundException(`No se encontró el rol con ID ${id}`);
    }
    return rol;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.findOne(id);
    return this.prisma.roles.update({
      where: { id_rol: id },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.roles.delete({
      where: { id_rol: id },
    });
  }
}