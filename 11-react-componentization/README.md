# Ejercicio 11 – Componentización de la aplicación

## Objetivo

Refactorizar la Todo App creada en el ejercicio anterior para **separar la interfaz en componentes reutilizables**.

La aplicación debe mantener todas sus funcionalidades, pero ahora el código estará **organizado en múltiples componentes**, siguiendo una estructura más clara y escalable.

## Descripción

En este ejercicio se toma la **Todo App completa** del ejercicio anterior y se reorganiza el código para dividir la interfaz en componentes independientes.

En lugar de tener toda la lógica y el JSX dentro de `App`, se crean componentes específicos para manejar distintas partes de la interfaz.

Esto permite que el código sea **más fácil de leer, mantener y reutilizar**.

## Requisitos

- Mantener todas las funcionalidades de la Todo App:
  - agregar tareas
  - eliminar tareas
  - editar tareas
  - marcar tareas como completadas
  - persistencia con `localStorage`

- Crear un componente `TaskList` para mostrar la lista de tareas.

- Crear un componente `TaskItem` para representar cada tarea individual.

- Pasar la información necesaria a los componentes mediante **props**.

- Mantener el **estado principal en `App`**.

- Usar `map` dentro de `TaskList` para renderizar los componentes `TaskItem`.

## Estructura sugerida

src/

App.jsx
components/
    TaskList.jsx
    TaskItem.jsx

## Comportamiento esperado

1. La aplicación debe funcionar exactamente igual que en el ejercicio anterior.
2. `App` mantiene el estado y las funciones principales.
3. `TaskList` recibe la lista de tareas y la recorre usando `map`.
4. `TaskItem` representa cada tarea y recibe la información por props.
5. Las acciones de editar, eliminar y completar tareas siguen funcionando correctamente.

## Conceptos practicados

- Componentes en React
- Props
- separación de responsabilidades
- organización de proyectos en React
- reutilización de componentes
- arquitectura básica de aplicaciones React
