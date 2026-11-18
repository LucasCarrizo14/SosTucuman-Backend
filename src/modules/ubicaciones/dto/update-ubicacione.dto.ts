import { PartialType } from '@nestjs/mapped-types';
import { CreateUbicacioneDto } from './create-ubicacione.dto.js';

export class UpdateUbicacioneDto extends PartialType(CreateUbicacioneDto) {}
