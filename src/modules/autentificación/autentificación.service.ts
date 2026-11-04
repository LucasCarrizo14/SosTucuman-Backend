import { Injectable } from '@nestjs/common';
import { CreateAutentificaciónDto } from './dto/create-autentificación.dto.js';
import { UpdateAutentificaciónDto } from './dto/update-autentificación.dto.js';

@Injectable()
export class AutentificaciónService {
  create(createAutentificaciónDto: CreateAutentificaciónDto) {
    return 'This action adds a new autentificación';
  }

  findAll() {
    return `This action returns all autentificación`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autentificación`;
  }

  update(id: number, updateAutentificaciónDto: UpdateAutentificaciónDto) {
    return `This action updates a #${id} autentificación`;
  }

  remove(id: number) {
    return `This action removes a #${id} autentificación`;
  }
}
