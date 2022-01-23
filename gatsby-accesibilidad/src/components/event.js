import React from "react"
import PropTypes from "prop-types"

function Event({eventName, date, description, image}) {
    return (
        <div className="container w-full text-center" tabIndex="0" aria-label="Evento">
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mb-8">
                <img 
                    tabIndex="0"
                    role="presentation"
                    className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
                    src={image} 
                    alt="Poster del evento" 
                    width="384" 
                    height="512"
                    style={{ objectFit: "cover" }}/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <h1 className="space-y-4" tabIndex="0">{ eventName }</h1><br/>

                    { !description && <p className="text-lg font-semibold" tabIndex="0">{ Event.defaultProps.description } </p> }
                    { description && <p className="text-lg font-semibold" tabIndex="0">{ description } </p> }
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-gray-500">
                        <p tabIndex="0" aria-label="Fecha del evento">{ date }</p>
                    </div>
                </figcaption>
                </div>
            </figure>
        </div>
    )
}

Event.defaultProps = {
    eventName: "Oh oh, not event name set",
    date: "Oh oh, not date set",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/11/critica-grinch.jpg?itok=nPa2w_cN"
}

Event.propTypes = {
    eventName: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

export default Event