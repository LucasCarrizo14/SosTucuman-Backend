import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateArchivoDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsUrl({}, { message: 'La URL del archivo no tiene un formato válido' })
  @MaxLength(500, {
    message: 'La URL del archivo no puede superar los 500 caracteres',
  })
  @IsNotEmpty({ message: 'La URL del archivo es obligatoria' })
  url_archivo!: string;

  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @IsString({ message: 'El formato debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El formato no puede superar los 50 caracteres' })
  @IsNotEmpty({ message: 'El formato del archivo es obligatorio' })
  formato!: string;

  @IsInt({ message: 'El ID del reporte debe ser un número entero' })
  @IsPositive({ message: 'El ID del reporte debe ser un número positivo' })
  @IsNumber({}, { message: 'El ID del reporte debe ser un valor numérico' })
  @IsNotEmpty({ message: 'El ID del reporte es obligatorio' })
  id_reporte!: number;
}
