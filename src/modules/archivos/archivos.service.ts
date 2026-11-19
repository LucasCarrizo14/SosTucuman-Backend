import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateArchivoDto } from './dto/create-archivo.dto.js';
import { UpdateArchivoDto } from './dto/update-archivo.dto.js';

@Injectable()
export class ArchivosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createArchivoDto: CreateArchivoDto) {
    return this.prisma.archivos.create({
      data: createArchivoDto,
    });
  }

  findAll() {
    return this.prisma.archivos.findMany({
      include: { reporte: true },
    });
  }

  async findOne(id: number) {
    const archivo = await this.prisma.archivos.findUnique({
      where: { id_archivo: id },
      include: { reporte: true },
    });
    if (!archivo) {
      throw new NotFoundException(`No se encontró el archivo con ID ${id}`);
    }
    return archivo;
  }

  async update(id: number, updateArchivoDto: UpdateArchivoDto) {
    await this.findOne(id);
    return this.prisma.archivos.update({
      where: { id_archivo: id },
      data: updateArchivoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.archivos.delete({
      where: { id_archivo: id },
    });
  }
}