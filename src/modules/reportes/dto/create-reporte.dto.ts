import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateReporteDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(100)
    titulo!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    descripcion!: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    estado?: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    id_usuario!: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    id_categoria!: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    id_ubicacion!: number;
}