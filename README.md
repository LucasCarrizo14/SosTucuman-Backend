# SosTucumán — Backend API

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_7-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

## Descripción del Proyecto

**SosTucumán** Es una aplicación web interactiva que conecta las necesidades de los vecinos con la gestión urbana municipal. Permite a los ciudadanos identificar problemas en la vía pública, categorizarlos, consultar los pasos de resolución, visualizar reclamos activos de otros vecinos y votar sobre la urgencia de los mismos.
Este repositorio contiene el **Backend (API REST)** encargado de gestionar la autenticación de usuarios, la validación de datos de entrada, el registro de reportes, la administración de categorías y la vinculación de evidencias multimedia con persistencia relacional en **PostgreSQL**.

---

## Equipo de Desarrollo

| Integrantes | 

| **María Sol Gerónimo** 
| **Lucas Maximiliano Carrizo** 

---

## Teconologias Utilizadas

* **Entorno de ejecución:** Node.js
* **Framework Backend:** NestJS (arquitectura modular)
* **Lenguaje:** TypeScript
* **ORM y Migraciones:** Prisma 7 (`@prisma/client` + `@prisma/adapter-pg`)
* **Motor de Base de Datos:** PostgreSQL
* **Validación y Transformación:** `class-validator` y `class-transformer`
* **Pruebas de Endpoints:** Postman

---

##  Arquitectura y Estructura del Proyecto

El backend implementa una arquitectura en capas donde cada solicitud HTTP sigue el flujo:
**`Cliente (Postman/Frontend) ➔ DTO (Validación) ➔ Controller (Rutas) ➔ Service (Lógica + Prisma) ➔ PostgreSQL`**

```text
SosTucuman-Backend/
├── prisma/
│   ├── migrations/              # Historial de migraciones SQL versionadas
│   └── schema.prisma            # Definición de modelos, tipos y relaciones
├── src/
│   ├── generated/prisma/        # Cliente tipado generado por Prisma 7
│   ├── prisma/                  # PrismaService y PrismaModule globales
│   ├── modules/
│   │   ├── app/                 # Módulo raíz de la aplicación
│   │   ├── archivos/            # Gestión de imágenes/evidencias de reportes
│   │   ├── autentificacion/     # Validación de credenciales de acceso
│   │   ├── categorias/          # Clasificación de tipos de incidentes
│   │   ├── reportes/            # Núcleo de gestión de reportes ciudadanos
│   │   ├── roles/               # Perfiles de usuario (Ciudadano, Admin)
│   │   ├── ubicaciones/         # Direcciones, barrios y coordenadas GPS
│   │   └── usuarios/            # Alta, consulta y gestión de usuarios
│   └── main.ts                  # Punto de entrada y ValidationPipe global
├── prisma.config.ts             # Configuración de datasource y CLI de Prisma 7
├── .env                         # Variables de entorno (excluido en .gitignore)
└── package.json
