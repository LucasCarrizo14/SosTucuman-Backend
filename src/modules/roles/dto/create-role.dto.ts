import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateRoleDto {
    @Transform(({ value }) =>
        typeof value === 'string' ? value.trim().toLowerCase() : value,
    )
    @IsString({ message: 'El nombre del rol debe ser una cadena de texto' })
    @MinLength(3, {
        message: 'El nombre del rol debe tener al menos 3 caracteres',
    })
    @MaxLength(50, {
        message: 'El nombre del rol no puede superar los 50 caracteres',
    })
    @IsNotEmpty({ message: 'El nombre del rol es obligatorio' })
    nombre!: string;
}