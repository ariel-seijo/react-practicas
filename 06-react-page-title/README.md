# Ejercicio 06 – useEffect y título dinámico

## Objetivo

Practicar el uso del hook `useEffect` para ejecutar efectos secundarios en una aplicación de React.

## Descripción

Crear un contador simple que actualice el **título de la pestaña del navegador** cada vez que el valor del contador cambie.

## Requisitos

* Crear un estado `count` usando `useState`.
* Mostrar el valor del contador en pantalla.
* Agregar un botón que aumente el contador.
* Usar `useEffect` para actualizar el título del documento (`document.title`) cada vez que el contador cambie.

## Comportamiento esperado

* Al cargar la aplicación, el título de la página debe reflejar el valor inicial del contador.
* Cada vez que el usuario haga clic en el botón para aumentar el contador, el título del navegador debe actualizarse automáticamente.

Ejemplo de título en la pestaña:

Contador: 0
Contador: 1
Contador: 2

## Conceptos practicados

* `useState`
* `useEffect`
* dependencias en `useEffect`
* efectos secundarios en React
