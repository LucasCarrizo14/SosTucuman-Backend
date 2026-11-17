import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateArchivoDto {
    @IsUrl()
    @IsNotEmpty()
    url_archivo!: string;

    @IsString()
    @IsNotEmpty()
    formato!: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    id_reporte!: number;
}