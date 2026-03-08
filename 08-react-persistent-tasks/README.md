# Ejercicio 08 – Lista de tareas persistente

## Objetivo

Construir una lista de tareas en React que permita agregar y eliminar tareas, manteniendo la información guardada en `localStorage` para que no se pierda al recargar la página.

## Descripción

Crear una aplicación simple de lista de tareas donde el usuario pueda escribir una tarea, agregarla a una lista y eliminarla cuando ya no sea necesaria.
La lista debe guardarse automáticamente en `localStorage` para que las tareas permanezcan incluso si el usuario recarga la página.

## Requisitos

- Crear un estado `task` para controlar el input.
- Crear un estado `list` que almacene las tareas en un array.
- Permitir al usuario escribir una tarea en un input.
- Agregar un botón para añadir la tarea a la lista.
- Mostrar las tareas utilizando `map`.
- Permitir eliminar tareas de la lista.
- Usar `useEffect` para guardar la lista en `localStorage` cada vez que cambie.
- Al iniciar la aplicación, cargar las tareas guardadas en `localStorage`.

## Comportamiento esperado

1. El usuario escribe una tarea en el input.
2. Al presionar el botón, la tarea se agrega a la lista.
3. Cada tarea tiene un botón para eliminarla.
4. Si el usuario recarga la página, la lista se mantiene porque se guarda en `localStorage`.

## Conceptos practicados

- `useState`
- `useEffect`
- manejo de listas con `map`
- eliminación de elementos con `filter`
- `localStorage`
- persistencia de datos en el navegador
