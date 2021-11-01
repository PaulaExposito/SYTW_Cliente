export class Lifecycle extends HTMLElement {

    get styles() {
        return `
            .component {
                width: 100px;
                height: 100px;
                background-color: green;  
                margin-top: 10px;      
            }
        `;
    }

    constructor() {
        super();        
        this.attachShadow({ mode: 'open' });

        //this.setAttribute('name', 'tutu');
        this.render();
    }

    setName(newName) {
        this.setAttribute('name', newName);
    }

    adoptedCallback() {
        console.log('¡WebComponent creado!');
    }

    connectedCallback() {
        console.log('¡WebComponent añadido al DOM!')
    }

    disconnectedCallback() {
        console.log('¡WebComponent quitado del DOM :\'( !');
    }

    attributeChangedCallback() {
        console.log('¡Atributo cambiado!');
    }

    static get observedAttributes() {
        return ['name'];
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style> ${this.styles} </style>
            <div class="component"></div>
        `;
    }
}
