import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.prisma.categorias.create({
      data: createCategoriaDto,
    });
  }

  findAll() {
    return this.prisma.categorias.findMany();
  }

  async findOne(id: number) {
    const categoria = await this.prisma.categorias.findUnique({
      where: { id_categoria: id },
    });
    if (!categoria) {
      throw new NotFoundException(`No se encontró la categoría con ID ${id}`);
    }
    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.findOne(id);
    return this.prisma.categorias.update({
      where: { id_categoria: id },
      data: updateCategoriaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.categorias.delete({
      where: { id_categoria: id },
    });
  }
}
