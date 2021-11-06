import { Lifecycle } from './Lifecycle.js'; 
import { Course } from './Course.js'; 

customElements.define('course-component', Course);
customElements.define('lifecycle-component', Lifecycle);

const lifecycle = new Lifecycle();

const lifecycleContainer = document.querySelector('.container');
const coursesContainer = document.querySelector('.courses');

const addWCButton = document.querySelector('.addWC');
const removeWCButton = document.querySelector('.removeWC');
const setNameButton = document.querySelector('.setName');


addWCButton.addEventListener('click', () => {
    console.log("Clicked add WC");
    lifecycleContainer.appendChild(lifecycle);
});

removeWCButton.addEventListener('click', () => {
    console.log("Clicked remove WC");
    lifecycleContainer.removeChild(lifecycle);
});

setNameButton.addEventListener('click', () => {
    console.log("Clicked setNameButton");
    lifecycle.setName("marcos");
});


fetch('http://jsonstub.com/courses', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "JsonStub-User-Key": "11d04126-0b43-4fa6-80cd-46cc93cea147",
            "JsonStub-Project-Key": "ed03fca2-9260-471f-93a7-c76f2f2e185b"
        }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(course => {
            const courseWC = new Course(course);
            coursesContainer.appendChild(courseWC);
        });
    })
    .catch(err => console.log(err));
