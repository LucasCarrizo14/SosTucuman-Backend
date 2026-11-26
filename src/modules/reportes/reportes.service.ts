import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateReporteDto } from './dto/create-reporte.dto.js';
import { UpdateReporteDto } from './dto/update-reporte.dto.js';

@Injectable()
export class ReportesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReporteDto: CreateReporteDto) {
    return this.prisma.reportes.create({
      data: createReporteDto,
      include: {
        usuario: true,
        categoria: true,
        ubicacion: true,
      },
    });
  }

  findAll() {
    return this.prisma.reportes.findMany({
      include: {
        usuario: true,
        categoria: true,
        ubicacion: true,
        archivos: true,
      },
    });
  }

  async findOne(id: number) {
    const reporte = await this.prisma.reportes.findUnique({
      where: { id_reporte: id },
      include: {
        usuario: true,
        categoria: true,
        ubicacion: true,
        archivos: true,
      },
    });
    if (!reporte) {
      throw new NotFoundException(`No se encontró el reporte con ID ${id}`);
    }
    return reporte;
  }

  async update(id: number, updateReporteDto: UpdateReporteDto) {
    await this.findOne(id);
    return this.prisma.reportes.update({
      where: { id_reporte: id },
      data: updateReporteDto,
      include: {
        usuario: true,
        categoria: true,
        ubicacion: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.reportes.delete({
      where: { id_reporte: id },
    });
  }
}
