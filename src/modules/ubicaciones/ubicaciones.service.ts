import { Injectable } from '@nestjs/common';
import { CreateUbicacioneDto } from './dto/create-ubicacione.dto.js';
import { UpdateUbicacioneDto } from './dto/update-ubicacione.dto.js';

@Injectable()
export class UbicacionesService {
  create(createUbicacioneDto: CreateUbicacioneDto) {
    return 'This action adds a new ubicacione';
  }

  findAll() {
    return `This action returns all ubicaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ubicacione`;
  }

  update(id: number, updateUbicacioneDto: UpdateUbicacioneDto) {
    return `This action updates a #${id} ubicacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} ubicacione`;
  }
}
