import React from 'react';
import newsIcon from '../images/fire extinguisher.svg'

function NewsCard (props) {
    const {title, description, dateStart, dateEnd} = props;
    const today = dateStart === dateEnd ? 'Сегодня': '';
    const inMonth = dateStart !== dateEnd && dateStart.slice(3,5) === dateStart.slice(3,5) ? 'В этом месяце': '';
    return (
        <section className="card card__visible">
            <div className="card__info news__card">
                <h1 className="card__title">{title}</h1>
                <h2 className="card__subtitle news-card card__subtitle_grow">{description}</h2>
                <h3 className="card__period"> {today}{inMonth}</h3>
            </div>
            <img src={newsIcon} alt="icon" className="card__icon"/>
        </section>
    );
}

export default NewsCard;
