import React from 'react';
import logoStatus from '../images/Union.svg'
import cardDone from '../images/card done.svg'
import cardCenceled from '../images/card cenceled.svg'

function Card (props) {
    const {description, place, date, status, isOpen} = props;

    return (
        <section className={`card${status} card cursor`} onClick={isOpen}>
            <div className={`card__border card__border${status}`}></div>
            <div className="card__info">
                <h1 className="card__title">{description}</h1>
                <h2 className="card__subtitle">{place} <span className="card__date">&bull; {date}</span></h2>
            </div>
            <img src={status === 6 ? cardDone : status === 8 ? cardCenceled :logoStatus} alt="status"/>
        </section>
    );
}

export default Card;
