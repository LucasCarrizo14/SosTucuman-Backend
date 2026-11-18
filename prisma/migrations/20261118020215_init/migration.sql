-- CreateTable
CREATE TABLE "roles" (
    "id_rol" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "id_rol" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id_categoria" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "ubicaciones" (
    "id_ubicacion" SERIAL NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "barrio" VARCHAR(100) NOT NULL,
    "latitud" DECIMAL(10,8) NOT NULL,
    "longitud" DECIMAL(11,8) NOT NULL,

    CONSTRAINT "ubicaciones_pkey" PRIMARY KEY ("id_ubicacion")
);

-- CreateTable
CREATE TABLE "reportes" (
    "id_reporte" SERIAL NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" VARCHAR(50) NOT NULL DEFAULT 'pendiente',
    "fecha_creacion" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_ubicacion" INTEGER NOT NULL,

    CONSTRAINT "reportes_pkey" PRIMARY KEY ("id_reporte")
);

-- CreateTable
CREATE TABLE "archivos" (
    "id_archivo" SERIAL NOT NULL,
    "url_archivo" VARCHAR(255) NOT NULL,
    "formato" VARCHAR(50) NOT NULL,
    "id_reporte" INTEGER NOT NULL,

    CONSTRAINT "archivos_pkey" PRIMARY KEY ("id_archivo")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "roles"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes" ADD CONSTRAINT "reportes_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes" ADD CONSTRAINT "reportes_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categorias"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reportes" ADD CONSTRAINT "reportes_id_ubicacion_fkey" FOREIGN KEY ("id_ubicacion") REFERENCES "ubicaciones"("id_ubicacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "archivos" ADD CONSTRAINT "archivos_id_reporte_fkey" FOREIGN KEY ("id_reporte") REFERENCES "reportes"("id_reporte") ON DELETE RESTRICT ON UPDATE CASCADE;
