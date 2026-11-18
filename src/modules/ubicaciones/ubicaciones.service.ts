import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateUbicacioneDto } from './dto/create-ubicacione.dto.js';
import { UpdateUbicacioneDto } from './dto/update-ubicacione.dto.js';

@Injectable()
export class UbicacionesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUbicacioneDto: CreateUbicacioneDto) {
    return this.prisma.ubicaciones.create({
      data: createUbicacioneDto,
    });
  }

  findAll() {
    return this.prisma.ubicaciones.findMany();
  }

  async findOne(id: number) {
    const ubicacion = await this.prisma.ubicaciones.findUnique({
      where: { id_ubicacion: id },
    });
    if (!ubicacion) {
      throw new NotFoundException(`No se encontró la ubicación con ID ${id}`);
    }
    return ubicacion;
  }

  async update(id: number, updateUbicacioneDto: UpdateUbicacioneDto) {
    await this.findOne(id);
    return this.prisma.ubicaciones.update({
      where: { id_ubicacion: id },
      data: updateUbicacioneDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.ubicaciones.delete({
      where: { id_ubicacion: id },
    });
  }
}
