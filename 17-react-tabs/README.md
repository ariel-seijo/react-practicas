# Ejercicio 17 – Tabs

## Objetivo

Aprender a crear interfaces interactivas utilizando `useState` para controlar qué contenido se muestra en pantalla.

## Descripción

En este ejercicio se implementará un sistema de pestañas (tabs).

La aplicación tendrá varios botones que representarán diferentes pestañas.
Cuando el usuario haga clic en un botón, el contenido mostrado cambiará según la pestaña seleccionada.

## Requisitos

- Crear un estado `activeTab` usando `useState`.
- Crear al menos **tres pestañas**.
- Cada pestaña debe ser un botón.
- Al hacer clic en un botón, debe cambiar el estado `activeTab`.
- Mostrar contenido diferente según la pestaña activa.

## Ejemplo de pestañas

- Perfil
- Configuración
- Seguridad

## Estructura sugerida

src/

App.jsx

## Comportamiento esperado

1. La aplicación muestra tres botones que representan pestañas.
2. Al hacer clic en una pestaña, cambia el estado `activeTab`.
3. El contenido mostrado en pantalla cambia según la pestaña seleccionada.

## Conceptos practicados

- `useState`
- renderizado condicional
- interfaces interactivas
- manejo de eventos
