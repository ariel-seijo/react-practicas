# Ejercicio 13 – Card Component

## Objetivo

Aprender a crear **componentes reutilizables con múltiples props** para construir interfaces más complejas.

En este ejercicio se implementará un **componente `Card`** que mostrará información utilizando diferentes propiedades.

## Descripción

Se debe crear un componente llamado `Card` que represente una tarjeta de información.

La tarjeta debe mostrar un **título y una descripción**, los cuales se recibirán mediante **props**.

El componente `App` debe reutilizar el componente `Card` varias veces con distintos datos.

Este ejercicio introduce el concepto de **componentes reutilizables con múltiples propiedades**, algo muy común en aplicaciones reales.

## Requisitos

- Crear un componente `Card`.
- El componente debe recibir las props:
  - `title`
  - `description`

- Mostrar el `title` dentro de un `h2`.
- Mostrar la `description` dentro de un `p`.
- Importar el componente en `App`.
- Renderizar al menos **tres tarjetas distintas**.

## Ejemplo de uso esperado

```jsx
<Card
  title="Naruto"
  description="Anime sobre ninjas que buscan convertirse en Hokage."
/>

<Card
  title="One Piece"
  description="Historia de piratas en busca del tesoro más grande."
/>

<Card
  title="Attack on Titan"
  description="Humanidad luchando por sobrevivir contra gigantes."
/>
```

## Estructura sugerida

src/

App.jsx
components/
    Card.jsx

## Comportamiento esperado

1. `App` importa el componente `Card`.
2. Cada `Card` recibe información mediante props.
3. Cada tarjeta muestra su propio título y descripción.

## Conceptos practicados

- creación de componentes
- props múltiples
- reutilización de componentes
- composición de interfaces
