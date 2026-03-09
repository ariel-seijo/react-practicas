# Ejercicio 10 – Todo App completa

## Objetivo

Construir una **aplicación completa de lista de tareas** combinando todas las funcionalidades desarrolladas en los ejercicios anteriores.

La aplicación debe permitir **agregar, eliminar y editar tareas**, manteniendo la información guardada en `localStorage`.

## Descripción

En este ejercicio se integran los conceptos aprendidos previamente para crear una **Todo App funcional**.

El usuario podrá escribir tareas, agregarlas a una lista, eliminarlas cuando ya no sean necesarias y editar su contenido cuando quiera modificarlo.

Las tareas deben guardarse automáticamente en `localStorage` para que la información permanezca incluso si el usuario recarga la página.

## Requisitos

- Crear un estado `task` para controlar el input de nuevas tareas.
- Crear un estado `list` que almacene las tareas en un array.
- Crear estados `editingIndex` y `editingText` para manejar la edición de tareas.
- Permitir al usuario escribir una tarea en un input.
- Agregar un botón para añadir la tarea a la lista.
- Mostrar las tareas utilizando `map`.
- Permitir eliminar tareas utilizando `filter`.
- Permitir editar tareas existentes.
- Usar render condicional para mostrar el input de edición.
- Usar `useEffect` para guardar la lista en `localStorage` cada vez que cambie.
- Al iniciar la aplicación, cargar las tareas guardadas en `localStorage`.

## Comportamiento esperado

1. El usuario escribe una tarea en el input.
2. Al presionar **Agregar**, la tarea se añade a la lista.
3. Cada tarea tiene un botón **Editar** y un botón **Eliminar**.
4. Al presionar **Editar**, la tarea se convierte en un input editable.
5. El usuario modifica el texto y presiona **Guardar**.
6. La tarea se actualiza en la lista.
7. Si el usuario recarga la página, las tareas se mantienen porque están guardadas en `localStorage`.

## Conceptos practicados

- `useState`
- `useEffect`
- manejo de listas con `map`
- actualización de elementos en arrays
- eliminación de elementos con `filter`
- render condicional
- `localStorage`
- persistencia de datos en el navegador
