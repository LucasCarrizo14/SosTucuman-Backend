import { IsNotEmpty, IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateUbicacioneDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    direccion!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    barrio!: string;

    @IsNumber()
    @Min(-90)
    @Max(90)
    @IsNotEmpty()
    latitud!: number;

    @IsNumber()
    @Min(-180)
    @Max(180)
    @IsNotEmpty()
    longitud!: number;
}
