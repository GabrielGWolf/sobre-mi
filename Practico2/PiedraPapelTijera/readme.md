# Piedra Papel o Tijera
Es un juego simple de opciones multiples, que suele jugarse con las manos. 

## Para el Usuario

### Reglas

Las reglas que se aplican son las clasicas del juego de manos Piedra Papel Tijera:
Piedra destruye a Tijera
Tijera corta a Papel
Palpel envuelve a Piedra.
De esta forma, el juego se vuelve "triangular" donde una opción siempre le gana a una, y pierde contra otra. 

## Para quien corrije los prácticos

### HTML 

Tuve que hacer varias versiones hasta conseguir la versión de ordenado actual, la cual de todas formas me gustaría mejorar más. 
Es funcional a todo lo necesario, pero preferiría hacer algunas cosas diferentes. 
Quedan pendientes para futuras oportunidades.

### CSS

Se aplicó el formato Grid para la pagina en general, tomando 3 columnas. La primera para los datos del usuario, la segunda para el juego en sí y los botones necesarios, y la tercera para la visualización de resultados en forma de tabla.
En cuanto a los botones de eleccion de las opciones del usuario (Piedra, Papel, Tijera), se aplican colores diferentes y efectos para hacerlos atractivos en el :hover:.
En cuanto a los botones de funcionalidades (Iniciar el juego, Jugar y Limpiar), se aplican efectos de color y transformación en el :hover:  

#### Paleta de colores 

Utilizando la fuente: https://coolors.co elegí 2 paletas de colores para trabajar: 
- Fondos y colores de la pagina: https://coolors.co/palette/0a0908-22333b-eae0d5-c6ac8f-5e503f 
- Botones: https://coolors.co/palette/011627-fdfffc-2ec4b6-e71d36-ff9f1c


### JS

Se aplican funciones para:
- obtener el nombre del jugador y poder utilizarlo luego para el saludo de inicio del juego
- Al hacer click en la opcion elegida, guardar la opción elegida por el usuario.
- Crear una forma aleatoria de juego para la eleccion de la computadora.
- Calcular el resultado en base a ambas elecciones.
- Habilitar o deshabilitar botones en base a la necesidad de cada momento del juego. 
- Crear la tabla de resultados, que a su vez agrega una nueva linea con cada iteración.
- Habilitar o deshabilitar el sector de juego luego del ingreso del nombre del usuario. 
- Habilitar o deshabilitar el PopUp con el resultado final.




