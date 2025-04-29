# 🕵️‍♂️ Aplicación de Comunicación Segura para Agentes Secretos

## 🎯 Objetivo

Crear una aplicación web que permita enviar mensajes encriptados y archivos entre 2 agentes secretos de manera segura.



## 📝 Descripción

Tu equipo forma parte de un grupo élite de agentes secretos. Todos los sistemas de comunicación están comprometidos, por lo que deben desarrollar una nueva solución segura que permita:

- Compartir mensajes encriptados
- Compartir archivos
- Enviar mensajes en tiempo real (chat)



## ⏱ Tiempo estimado

**Duración:** 90 minutos  
**Equipo:** 2 a 3 personas



## ✅ Requerimientos

### 📁 Archivos

- Los agentes deben poder compartir archivos que se almacenarán en un bucket de **S3**
- Tipos de archivo permitidos: `.txt`, `.pdf`, imágenes (`.jpg`, `.png`, etc.)
- Los archivos deben poder descargarse y visualizarse desde la aplicación

### 📧 Correos

- Un agente debe poder enviar un correo cifrado a otro agente
- El mensaje debe estar encriptado y solo debe poder leerse desde la aplicación (habrá una pantalla para desencriptar)

### 💬 Chat

- Se debe implementar un sistema de **chat en tiempo real** para comunicación entre agentes



## ⭐ Puntos Adicionales

- Crear un **dashboard** con información clave de la misión:
  - Estado de los miembros del equipo (en línea vs. desconectados)
  - Lista de archivos compartidos
  - Últimos mensajes enviados
  - Registro de correos enviados (remitente, destinatario, fecha)

- La aplicación asignará automáticamente nombres de agente al conectarse (por ejemplo: `Alpha`, `Tango`, `Águila 1`, `Rojo 1`, etc.)

- Un **usuario líder** podrá agregar agentes al equipo utilizando su correo electrónico. La autenticación puede realizarse mediante:
  - Invitaciones
  - Lista blanca (whitelist)
  - Usuario y contraseña
  - Otro método decidido por el equipo



## ⚙️ Pre-requisitos para Envío de Correos

Para poder enviar correos desde una cuenta de Gmail:

1. Habilitar la **verificación en dos pasos (2FA)**.
2. Generar una **contraseña de aplicación (App Password)** desde la cuenta de Google.



¡Buena suerte, agentes! 🕶️
