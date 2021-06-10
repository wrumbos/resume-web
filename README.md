# resume-web

web for create and management resume

## Tópicos
*  **[📝 Requerimientos / tecnologias](#-requerimientos)**
*  **[🚀 Solucion](#-Solucion)**
*  **[🗂 Estructura de Directorios](#-estructura-de-directorios)**

## 📝 Requerimientos / Tecnologias
```
Nodejs 14.16.0
Angular 11.2.4
rxjs 6.6.0
```
## 🚀 Solucion

Utilizando el framework Angular bajo un servidor nodejs se construye una web dinámica para la construcción y creación 
de un curriculum online, la aplicación se comunica con una rest api a través de services y la librería rxjs, para 
la manipulación de la data, la aplicación web contempla los siguientes tópicos
```
1. Registro de usuario
2. Login
3. Información personal
4. Carta de presentación
5. Educacion
6. Trabajo
7. Habilidades
8. Foto
9. Curriculum online
10. Curriculum online a través de un nombre de usuario
```


## 🗂 Estructura de Directorios
```
📦 resume-api 
│
│  
└─📁 src                  Código fuente
│ │
│ └─📁 app               componentes, módulos, servicios, utils
│ │
│ └─📁 assets            archivos
│ │       
│ └─📁 environments      Configuracion de ambientes
│
└─📄 README.md            Documentacion del software

