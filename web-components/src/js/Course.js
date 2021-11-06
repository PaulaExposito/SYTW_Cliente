export class Course extends HTMLElement {
    get styles() {
        return `
            .course {
                width: 500px;
                height: 200px;
                background-color: rgba(0, 0, 0, 0.85);
                color: rgb(242, 242, 242);
                margin: 15px;
            }

            #course {
                width: 120px;
                height: 200px;
                object-fit: cover;
            }

            #arrow {
                width: 42px;
                height: 42px; 
                color: rgb(242, 242, 242);
                filter: invert(100%);
            }

            .more {
                height: 100%;
                width: 40px;
                background-color: rgba(0, 0, 0, 0.2);
            }

            .flex {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .mainInformation {
                margin: 20px;
                float: left;
                width: 296px;
            }

            .name {
                font-size: 25px;
                font-weight: bold;
            }
            
            .speaker {
                font-size: 18px;
                margin: 5px 0 20px 0;
            }
            
            .event {
                font-size: 20px;
            }

            .course:hover {
                cursor: pointer;
            }
            
            .course-expanded {
                width: 900px;
                animation: expand 0.5s ease;
            }
            
            .course-unexpanded {
                width: 500px;
                animation: unexpand 0.5s ease;
            }
          
            @keyframes expand {
                0% { width: 500px; }
                100% { width: 900px; }
            }
            
            @keyframes unexpand {
                0% { width: 900px; }
                100% { width: 500px; }
            }

            .expanded {
                display: none;
                width: 400px;
                background-color: rgba(145, 145, 48, 0.5);
                transition: all 0.5s linear;
                opacity: 1;
                padding: 15px;
                align-items: center;
                flex-direction: column;
            }

            .description {
                font-size: 16px;
            }

            .date {
                margin-top: 10px; 
                font-size: 20px;
            }
        `;
    }

    constructor(data) {
        super();
        this.attachShadow({ mode: 'open' });

        this.name = data.name;
        this.image = data.image;
        this.event = data.event;
        this.speaker = data.speaker;
        this.description = data.description;
        this.date = data.date;

        this.render();
    }

    toggleCardExpand() {
        const course = this.shadowRoot.querySelector('.course');
        const expanded = this.shadowRoot.querySelector('.expanded');
        const arrow = this.shadowRoot.querySelector('#arrow');

        course.classList.toggle('course-expanded');


        if (!course.classList.contains('course-expanded')) { // al cerrar
            course.classList.toggle('course-unexpanded');
            arrow.src = "../assets/chevron_right.png";
            expanded.style.display = 'none';
        }
        else if (course.classList.contains('course-expanded') && course.classList.contains('course-unexpanded')) { // abrir
            course.classList.toggle('course-unexpanded');
            arrow.src = "../assets/chevron_left.png";
            expanded.style.display = 'flex';
        }
        else if (course.classList.contains('course-expanded') && !course.classList.contains('course-unexpanded')) {
            arrow.src = "../assets/chevron_left.png";
            expanded.style.display = 'flex';
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style> ${this.styles} </style>

            <div class="flex course">
                <img id="course" src=${this.image} />
            	<div class="mainInformation">
                    <div class="name">${this.name}</div>
                    <div class="speaker">${this.speaker}</div>
                    <div class="event">${this.event}</div>
                </div>
                <div class="flex expanded">
                    <div class="description">${this.description}</div>
                    <div class="date">${this.date}</div>
                </div>
                <div class="flex more">
                    <img id="arrow" src="../assets/chevron_right.png"/>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('#arrow').addEventListener('click', () => {
            this.toggleCardExpand();
        });

    }
}