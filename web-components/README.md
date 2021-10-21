# Práctica 2: Web Components

## 1. Ciclo de vida del Web Component

La primera parte de esta práctica consiste en la comprensión del ciclo de vida de un Web Component (WC). Para ello se crea un Web Component y se pone un mensaje de log en cada vez que cambia su estado, esto corresponde a:

* Creación del WC -> no funciona, algún rollo que dice que es al cambiar de dom
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

