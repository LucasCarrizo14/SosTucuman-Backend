import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUbicacioneDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  @MinLength(3, {
    message: 'La dirección debe tener al menos 3 caracteres',
  })
  @MaxLength(255, {
    message: 'La dirección no puede superar los 255 caracteres',
  })
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  direccion!: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString({ message: 'El barrio debe ser una cadena de texto' })
  @MinLength(3, {
    message: 'El barrio debe tener al menos 3 caracteres',
  })
  @MaxLength(100, {
    message: 'El barrio no puede superar los 100 caracteres',
  })
  @IsNotEmpty({ message: 'El barrio es obligatorio' })
  barrio!: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'La latitud debe ser un valor numérico' })
  @Min(-90, { message: 'La latitud no puede ser menor a -90' })
  @Max(90, { message: 'La latitud no puede ser mayor a 90' })
  @IsNotEmpty({ message: 'La latitud es obligatoria' })
  latitud!: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'La longitud debe ser un valor numérico' })
  @Min(-180, { message: 'La longitud no puede ser menor a -180' })
  @Max(180, { message: 'La longitud no puede ser mayor a 180' })
  @IsNotEmpty({ message: 'La longitud es obligatoria' })
  longitud!: number;
}
