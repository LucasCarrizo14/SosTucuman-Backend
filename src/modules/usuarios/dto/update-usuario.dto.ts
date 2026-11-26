import {
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString({ message: 'El nombre debe ser un texto.' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
  @MaxLength(80, { message: 'El nombre no puede superar los 80 caracteres.' })
  nombre?: string;

  @IsOptional()
  @IsString({ message: 'El apellido debe ser un texto.' })
  @MinLength(2, { message: 'El apellido debe tener al menos 2 caracteres.' })
  @MaxLength(80, { message: 'El apellido no puede superar los 80 caracteres.' })
  apellido?: string;

  @IsOptional()
  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener un formato válido.' },
  )
  email?: string;

  @IsOptional()
  @IsString({ message: 'La contraseña debe ser un texto.' })
  @MinLength(8, {
    message: 'La contraseña debe tener al menos 8 caracteres.',
  })
  @MaxLength(128, {
    message: 'La contraseña no puede superar los 128 caracteres.',
  })
  password?: string;

  @IsOptional()
  @IsInt({ message: 'El rol debe ser un número entero.' })
  @IsPositive({ message: 'El rol debe ser un ID válido.' })
  id_rol?: number;
}
