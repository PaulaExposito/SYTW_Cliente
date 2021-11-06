# Práctica 2: Web Components

## 1. Ciclo de vida del Web Component

La primera parte de esta práctica consiste en la comprensión del ciclo de vida de un Web Component (WC). Para ello se crea un Web Component y se pone un mensaje de log en cada vez que cambia su estado, esto corresponde a:

* Creación del WC -> no funciona

* Adjuntar WC al DOM

```javascript
connectedCallback() {
    console.log('¡WebComponent añadido al DOM!')
}
```

* Separación del WC del DOM

```javascript
disconnectedCallback() {
    console.log('¡WebComponent quitado del DOM :\'( !');
}
```

* Cambio en alguno de los atributos del WC

```javascript
attributeChangedCallback() {
    console.log('¡Atributo cambiado!');
}
```


## 2. Web Component de un curso

La siguiente parte de la práctica es crear un web component que encapsule la información referente a un curso (nombre, ponente, descripción, imagen, etc.). Este WC lo podemos encontrar [aquí](./src/js/Course.js).

Lo más destacable de este componente es que al hacer click sobre él se expande la información del curso.

Para ejecutar el programa:

```
npm run dev
```


* **Nota:** Para la realización de esta parte de la práctica se ha utilizado la herramiente JSON Stub, debido a ello no se ha podido subir la práctica a GitHub Pages, ya que JSON Stub no permite que se le hagan peticiones desde HTTPS y GitHub Pages solo permite hacer peticiones desde HTTPS. 
