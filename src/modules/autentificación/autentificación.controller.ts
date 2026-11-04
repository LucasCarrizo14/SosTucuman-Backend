import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutentificaciónService } from './autentificación.service.js';
import { CreateAutentificaciónDto } from './dto/create-autentificación.dto.js';
import { UpdateAutentificaciónDto } from './dto/update-autentificación.dto.js';

@Controller('autentificación')
export class AutentificaciónController {
  constructor(private readonly autentificaciónService: AutentificaciónService) {}

  @Post()
  create(@Body() createAutentificaciónDto: CreateAutentificaciónDto) {
    return this.autentificaciónService.create(createAutentificaciónDto);
  }

  @Get()
  findAll() {
    return this.autentificaciónService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autentificaciónService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutentificaciónDto: UpdateAutentificaciónDto) {
    return this.autentificaciónService.update(+id, updateAutentificaciónDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autentificaciónService.remove(+id);
  }
}
