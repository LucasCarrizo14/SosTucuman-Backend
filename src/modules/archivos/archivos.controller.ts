import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArchivosService } from './archivos.service.js';
import { CreateArchivoDto } from './dto/create-archivo.dto.js';
import { UpdateArchivoDto } from './dto/update-archivo.dto.js';

@Controller('archivos')
export class ArchivosController {
  constructor(private readonly archivosService: ArchivosService) {}

  @Post()
  create(@Body() createArchivoDto: CreateArchivoDto) {
    return this.archivosService.create(createArchivoDto);
  }

  @Get()
  findAll() {
    return this.archivosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.archivosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArchivoDto: UpdateArchivoDto) {
    return this.archivosService.update(+id, updateArchivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.archivosService.remove(+id);
  }
}
