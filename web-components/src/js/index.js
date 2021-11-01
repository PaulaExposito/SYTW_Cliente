import { Lifecycle } from './Lifecycle';

customElements.define('lifecycle-component', Lifecycle);

function addWC() {
    container.appendChild(component);
}

function removeWC() {
    container.removeChild(component);
}

function setName() {
    component.setName("marcos");
}


const container = document.querySelector('.container');
const component = new Lifecycle();


