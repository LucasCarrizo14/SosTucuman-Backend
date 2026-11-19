import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoriaDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString({
    message: 'El nombre de la categoría debe ser una cadena de texto',
  })
  @MinLength(3, {
    message: 'El nombre de la categoría debe tener al menos 3 caracteres',
  })
  @MaxLength(100, {
    message: 'El nombre de la categoría no puede superar los 100 caracteres',
  })
  @IsNotEmpty({ message: 'El nombre de la categoría es obligatorio' })
  nombre!: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  descripcion?: string;
}
