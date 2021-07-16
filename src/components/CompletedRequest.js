import React from 'react';

function CompletedRequest (props) {
    const {title, description, date, fulfilled} = props;
    return (
        <section className="card card__completed">
            <div className="card__info news__card">
                <h3 className="card__subtitle card__date card__subtitle_grow">№ 159753 — {date} </h3>
                <h1 className="card__title">{description}</h1>
                <h2 className="card__subtitle">{title}</h2>
            </div>
            <h4 className="card__subtitle card__author">Выполнил(а): {fulfilled} — {date}</h4>
        </section>
    );
}

export default CompletedRequest;
