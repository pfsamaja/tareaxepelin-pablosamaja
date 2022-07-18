# Pruebas de razonamiento logico
Para evaluar las pruebas de razonamiento logico se debe entrar en cada una de las carpetas, instalar las dependencias de Node con npm i y correr npm run test para correr todos los test

# MVP
Para inicializar el MVP se debe abrir la carpeta de MVP-back, instalar las dependencias de Node con npm i, correr npm run build y npm run start para inicializar el servidor. El back tiene la conexion a la API de google a traves de una cuenta de servicio harcodeada, la llamada al hook de xapier y un servicio para crear cuentas con un name y una password encriptada con JWT. Si se quiere crear un nuevo user, se puede usar el endpoint localhost:5000/api/auth/signup con un name y una password en el body. Si no, se encuentra el user "xepelin" y password "xepe" para usar en el cliente.

Para el front, se debe abrir la carpeta de mvp-front, nuevamente instalar las dependencias de Node con npm i y correr npm run start. 

Se encontraran en el login, el cual se puede utilizar las credenciales indicadas anteriormente y luego se debe ingresar el ID de alguna spreadsheet que cuente con permisos publicos para acceder. Eso traera un listado con la tabla como se exigia en la tarea y te permite editar las tasas y gatillar el correo solicitado. 


