import { PartialType } from '@nestjs/mapped-types';
import { CreateAutentificaciónDto } from './create-autentificación.dto.js';

export class UpdateAutentificaciónDto extends PartialType(CreateAutentificaciónDto) {}
