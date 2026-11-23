import { Transform } from 'class-transformer';
import {
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateReporteDto {
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    @IsString({ message: 'El título debe ser una cadena de texto' })
    @MinLength(5, {
        message: 'El título debe tener al menos 5 caracteres',
    })
    @MaxLength(100, {
        message: 'El título no puede superar los 100 caracteres',
    })
    @IsNotEmpty({ message: 'El título es obligatorio' })
    titulo!: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    @IsString({ message: 'La descripción debe ser una cadena de texto' })
    @MinLength(10, {
        message: 'La descripción debe tener al menos 10 caracteres',
    })
    @IsNotEmpty({ message: 'La descripción es obligatoria' })
    descripcion!: string;

    @Transform(({ value }) =>
        typeof value === 'string' ? value.trim().toLowerCase() : value,
    )
    @IsOptional()
    @IsString({ message: 'El estado debe ser una cadena de texto' })
    @MaxLength(50, {
        message: 'El estado no puede superar los 50 caracteres',
    })
    @IsNotEmpty({ message: 'El estado no puede estar vacío si se envía' })
    estado?: string;

    @IsInt({ message: 'El ID del usuario debe ser un número entero' })
    @IsPositive({ message: 'El ID del usuario debe ser un número positivo' })
    @IsNumber({}, { message: 'El ID del usuario debe ser un valor numérico' })
    @IsNotEmpty({ message: 'El ID del usuario es obligatorio' })
    id_usuario!: number;

    @IsInt({ message: 'El ID de la categoría debe ser un número entero' })
    @IsPositive({ message: 'El ID de la categoría debe ser un número positivo' })
    @IsNumber({}, { message: 'El ID de la categoría debe ser un valor numérico' })
    @IsNotEmpty({ message: 'El ID de la categoría es obligatorio' })
    id_categoria!: number;

    @IsInt({ message: 'El ID de la ubicación debe ser un número entero' })
    @IsPositive({ message: 'El ID de la ubicación debe ser un número positivo' })
    @IsNumber({}, { message: 'El ID de la ubicación debe ser un valor numérico' })
    @IsNotEmpty({ message: 'El ID de la ubicación es obligatorio' })
    id_ubicacion!: number;
}