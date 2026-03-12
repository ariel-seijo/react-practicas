# Ejercicio 16 – Product List

## Objetivo

Aprender a renderizar listas dinámicas en React utilizando arrays de datos y el método `map()`.

## Descripción

En este ejercicio se creará una lista de productos representados como objetos dentro de un array.

Cada producto se renderizará utilizando un componente `ProductCard`.

El objetivo es transformar los datos del array en componentes visuales.

## Requisitos

- Crear un array `products` con al menos tres productos.
- Cada producto debe tener:
  - `id`
  - `name`
  - `price`

- Utilizar `map()` para renderizar los productos.
- Crear un componente `ProductCard`.
- Pasar los datos del producto como props al componente.
- Utilizar una prop `key` única para cada elemento renderizado.

## Ejemplo de datos

```jsx
const products = [
  { id: 1, name: "Mouse", price: 10 },
  { id: 2, name: "Teclado", price: 25 },
  { id: 3, name: "Monitor", price: 200 },
];
```

## Estructura sugerida

src/

App.jsx

components/
    ProductCard.jsx

## Comportamiento esperado

1. La aplicación debe mostrar un título "Productos".
2. Debajo del título debe aparecer una lista de productos.
3. Cada producto debe mostrarse usando el componente `ProductCard`.

## Conceptos practicados

- arrays de objetos
- renderizado de listas
- `map()` en React
- props dinámicas
- `key` en listas
- generación dinámica de componentes
