# Ejercicio 07 – Persistencia con localStorage

## Objetivo

Practicar el uso de `useEffect` para guardar información en el navegador utilizando `localStorage`, permitiendo que los datos persistan incluso después de recargar la página.

## Descripción

Crear una aplicación de contador en React que guarde automáticamente el valor actual del contador en `localStorage`.
Cuando la página se vuelva a cargar, la aplicación debe recuperar ese valor y mostrarlo en pantalla.

## Requisitos

* Crear un estado `count` usando `useState`.
* Mostrar el valor del contador en la interfaz.
* Agregar un botón que aumente el contador.
* Usar `useEffect` para guardar el valor del contador en `localStorage` cada vez que cambie.
* Al iniciar la aplicación, leer el valor guardado en `localStorage` y usarlo como valor inicial del contador.

## Comportamiento esperado

1. El contador comienza en `0` si no hay datos guardados.
2. Cada vez que el usuario aumente el contador, el valor se guarda en `localStorage`.
3. Si el usuario recarga la página, el contador mantiene el último valor guardado.

## Conceptos practicados

* `useState`
* `useEffect`
* dependencias en `useEffect`
* `localStorage`
* persistencia de datos en el navegador

