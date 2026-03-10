# Ejercicio 12 – Button Component

## Objetivo

Aprender a crear **componentes reutilizables en React** utilizando **props** para modificar su comportamiento o contenido.

Este ejercicio introduce la idea fundamental de React: **construir interfaces usando componentes reutilizables**.

## Descripción

En lugar de escribir botones directamente en el componente `App`, se debe crear un **componente personalizado `Button`**.

Este componente recibirá un **texto mediante props** para mostrar diferentes botones reutilizando el mismo componente.

## Requisitos

- Crear un componente `Button`.
- El componente debe recibir una **prop llamada `text`**.
- El componente debe renderizar un botón mostrando el texto recibido.
- Importar y utilizar el componente en `App`.
- Renderizar al menos **tres botones distintos** usando el mismo componente.

## Ejemplo de uso esperado

```jsx
<Button text="Guardar" />
<Button text="Cancelar" />
<Button text="Eliminar" />
```

## Estructura sugerida

src/

App.jsx
components/
    Button.jsx

## Comportamiento esperado

1. El componente `Button` debe recibir el texto mediante props.
2. `App` debe importar el componente.
3. El mismo componente debe poder reutilizarse varias veces con diferentes textos.

## Conceptos practicados

- creación de componentes en React
- props
- reutilización de componentes
- organización básica de componentes
