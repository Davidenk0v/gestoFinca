# GestoFinca

![GestoFinca Inicio](https://github.com/user-attachments/assets/29708360-4287-4735-a3c4-675e3bed174a)
[Ir a la página](https://gesto-finca.vercel.app/)

GestoFinca es una plataforma de gestión de propiedades y administración de alquileres vacacionales. Desarrollada con [Astro](https://astro.build/), [React](https://react.dev/) y [TailwindCSS](https://tailwindcss.com/), ofrece una experiencia rápida, moderna y adaptable para propietarios y administradores de fincas.

## Características principales

- **Administración de fincas**: Gestión completa de propiedades con información detallada.
- **Gestión de alquileres vacacionales**: Control de reservas, disponibilidad y mantenimiento de alojamientos.
- **Sistema de envío de correos**: Integrado con [Resend](https://resend.com/) para comunicación eficiente con los clientes.
- **Vistas disponibles**:
  - Administración de fincas
  - Gestión de alquileres vacacionales
  - Nosotros
  - Contacto
  - Presupuestos
- **Internacionalización**: Disponible en español, inglés y alemán.

## Tecnologías utilizadas

- **Astro**: Framework para la creación de sitios web rápidos y optimizados.
- **React**: Componentes interactivos y dinámicos dentro de Astro.
- **TailwindCSS**: Diseño moderno y adaptable con clases utilitarias.
- **Resend**: Envío de correos electrónicos confiable y eficiente.

## Colores corporativos

- **greenFinca**: `#7EDA55`
- **blueFinca**: `#25C0D8`

## Instalación y configuración

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Davidenk0v/gestoFinca.git
   cd gestoFinca
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno:
   - Crear un archivo `.env` en la raíz del proyecto con los siguientes valores:
     ```env
     RESEND_API_KEY=tu_api_key
     ```
4. Iniciar el entorno de desarrollo:
   ```sh
   npm run dev
   ```

## Despliegue

La aplicación está desplegada en [Vercel](https://vercel.com/) y puede accederse en línea.

## Licencia

Este proyecto está bajo la licencia MIT. Para más información, consulta el archivo `LICENSE`.

## Tareas Pendientes

- [ ] Carrousel con un solo eslogan y un poco más grande.
- [ ] Elemento de contacto en medio de los servicios con degradado azul-verde.
- [ ] Títulos en azul.
- [ ] Líneas del header en verde junto con el logo.
- [ ] Botón del carrousel verde y transparente.
- [x] Botones de los servicios en naranja.
- [x] Iconos y datos de email y teléfono.
- [x] Formulario al final de todas las páginas.

---
