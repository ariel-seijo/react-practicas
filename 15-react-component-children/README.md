# Ejercicio 15 – Component Children

## Objetivo

Aprender a utilizar la prop especial `children` para crear componentes contenedores que puedan recibir y renderizar contenido dinámico.

## Descripción

En este ejercicio se modificará el componente `Card` para que reciba contenido mediante la prop `children`.

En lugar de pasar `title` y `description` como props separadas, el contenido será escrito directamente dentro del componente.

Esto permite crear componentes más flexibles y reutilizables.

## Requisitos

- Modificar el componente `Card` para que reciba `children`.
- Renderizar el contenido de `children` dentro del componente.
- Utilizar el componente `Card` en `App`.
- Crear al menos **tres tarjetas** con contenido diferente.

## Ejemplo de uso esperado

```jsx
<Card>
  <h2>Naruto</h2>
  <p>Anime sobre ninjas</p>
</Card>

<Card>
  <h2>Bleach</h2>
  <p>Anime sobre shinigamis</p>
</Card>
```

## Estructura sugerida

src/

App.jsx

components/
    Card.jsx

## Comportamiento esperado

1. El componente `Card` debe renderizar un contenedor.
2. El contenido dentro de `Card` debe mostrarse utilizando `children`.
3. Cada tarjeta debe mostrar contenido diferente.

## Conceptos practicados

- props especiales en React
- `children`
- composición de componentes
- componentes contenedores
