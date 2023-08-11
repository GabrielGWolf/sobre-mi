# Calculadora simple

El proyecto es crear una calculadora simple que pueda operar con 2 numeros, realizando 4 operaciones matemáticas básicas: **Suma, Resta, Multiplicación y Divisón**.

## Comenzando 🚀

Dentro del marco de Argentina Programa, y especificamente dentro del curso "Paginas Web con Contenido Dinámico" dictado por FAMAF, este es el Practico1. 

Para visualizar esta calculadora sólo se necesita abrirla en un navegador. 
La calcula consta de 3 archivos conectados: Index.html, CalculadoraSimple.js y style.css


### Pre-requisitos 📋

No se necesita instalar nada especial para poder correr este programa, sólo con abrirlo en una pagina web debería ser suficiente. 
Para escribir el codigo se utilizó Visual Studio Code. 

### Caracteristicas del Programa

La calculadora permite realizar 4 operaciónes básicas: Suma, Resta, Multiplicación y División, las cuales pueden elegirse en un menu desplegable. 

El usuario sólo puede ingresar numeros, o utilizar el caracter . (punto) para determinar decimales. Si el usuario ingresa otro caracter que no sea un numero, le devuelve una alerta indicando que solo debe utilizar numeros. 

Si el usuario intenta dividir por 0, devuelve una alerta indicando que esta operación no es posible. 

Los resultados están limitados a un máximo de 20 caracteres. Si la respuesta excede esa cantidad de carateres, se emite una alerta diciendo que el resultado es demasiado "largo" para ser mostrado en la interfaz, u el resultado mostrado es siempre 0

## Ejecutando las pruebas ⚙️

Se realizaron pruebas con todos los operadores posibles. 
Las pruebas realizadas fueron:

se ingresaron simbolos en los campos (+, -, *, /) y devuelve el mensaje de alerta esperado

```
2+2 = devuelve resultado correcto
2-2 = devuelve resultado correcto
2*2 = devuelve resultado correcto
2/2 = devuelve resultado correcto
```

```
-2+-2 = devuelve resultado correcto
-2--2 = devuelve resultado correcto
-2*2 = devuelve resultado correcto
-2/-2 = devuelve resultado correcto
```

```
2/0 = devuelve mensaje de no se puede dividir por 0
```

```
123456789123456789123456789 + 123456789123456789123456789 = devuelve el alerta esperado
123456789123456789123456789 * 123456789123456789123456789 = devuelve el alerta esperado
-123456789123456789123456789 + -123456789123456789123456789 = devuelve el alerta esperado
```

## Caracteristicas de CSS 

* **Paleta de colores utilizada:** https://coolors.co/palette/fffcf2-ccc5b9-403d39-252422-eb5e28

* **Imagen de fondo:** Imagen de derechos libres sacada de una busqueda en Google - (no recuerdo la fuente)


## Construido con 🛠️

Se utilizaron los lenguajes HTML, CSS y JAVASCRIPT. 

Utilicé ChatGTP para hacer preguntas sobre todo de CSS con algunos conceptos que no sabía utilizar, contrastando las respuestas con w3school para entender el funcionamiento del código devuelto por la IA

## Contribuyendo 🖇️

## Versionado 📌

Esta sería la versión 1.0

## Autores ✒️

* **Grabiel G. Wolf** - [GabrielGWolf](https://github.com/GabrielGWolf)

## Licencia 📄

Protecto sin licencia. Código Libre 

## Expresiones de Gratitud 🎁

* Gracias a Nehuen Ragone, profesor de clases prácticas por sus explicaciones y apoyo en este proyecto.