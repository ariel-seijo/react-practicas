# Ejercicio 09 – Editar tareas

## Objetivo

Extender la lista de tareas creada en el ejercicio anterior para permitir **editar tareas existentes**, manteniendo la persistencia en `localStorage`.

## Descripción

Modificar la aplicación de lista de tareas para que cada tarea tenga un botón **Editar**.  
Cuando el usuario presione ese botón, el texto de la tarea debe convertirse en un **input editable**, permitiendo modificar el contenido y guardar los cambios.

La aplicación debe seguir guardando las tareas en `localStorage` para que los cambios se mantengan al recargar la página.

## Requisitos

- Mantener el estado `task` para controlar el input de nuevas tareas.
- Mantener el estado `list` para almacenar las tareas.
- Crear un estado `editingIndex` para saber qué tarea se está editando.
- Crear un estado `editingText` para controlar el texto durante la edición.
- Cada tarea debe tener un botón **Editar**.
- Al presionar **Editar**, el texto de la tarea debe convertirse en un input.
- Permitir modificar el contenido de la tarea.
- Agregar un botón **Guardar** para confirmar los cambios.
- Al guardar, actualizar la tarea correspondiente dentro del array.
- Seguir permitiendo eliminar tareas.
- Mantener la persistencia en `localStorage` usando `useEffect`.

## Comportamiento esperado

1. El usuario agrega tareas normalmente.
2. Cada tarea tiene un botón **Editar**.
3. Al presionar **Editar**, la tarea se transforma en un input editable.
4. El usuario modifica el texto y presiona **Guardar**.
5. La tarea se actualiza en la lista.
6. Si el usuario recarga la página, los cambios se mantienen porque se guardan en `localStorage`.

## Conceptos practicados

- `useState`
- `useEffect`
- render condicional
- actualización de elementos dentro de arrays
- `map`
- `filter`
- `localStorage`
- persistencia de datos en el navegador
