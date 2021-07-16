import React, {useState, useEffect} from 'react';
import Card from './Card'
import NewsCard from './NewsCard';
import api from '../api/api'

function Main(props) {
    const {title, news, handleOpen} = props;

    const [newsCard, setNewsCard] = useState([])
    const [request, setRequest] = useState([])

    useEffect(()=>{
        api.dataRequest().then((result) => {
            let dateArr = [];
            for (let i = 0; i < result.length; i++) {
                dateArr.push(result[i].created.slice(0,10).split('-').reverse().join('.') + ' ' + result[i].created.slice(11, 16));
                request.push({
                    'description': result[i].description,
                    'place': result[i].place.place,
                    'date':  dateArr[i],
                    'status': result[i].statusId
                })
            }
            setRequest([
                ...request.sort((a,b) => a.status < b.status ? 1 : -1)
            ])
        })
    }, [])

    useEffect(() => {
        api.getFeed().then((result) => {
            let dateStartArr=[];
            let dateEndArr=[];
            for (let i = 0; i < result.length; i++) {
                dateStartArr.push(result[i].dateStart.slice(0,10).split('-').reverse().join('.'));
                dateEndArr.push(result[i].dateEnd.slice(0,10).split('-').reverse().join('.'));
                newsCard.push({
                    'title': result[i].title,
                    'description': result[i].description,
                    'dateStart': dateStartArr[i],
                    'dateEnd': dateEndArr[i]
                })
            }
            setNewsCard([
                ...newsCard
            ])
        })
    }, [])


    const newspaper = news && newsCard.map(({ title, description, dateStart, dateEnd}, index) => {
        return (
            <NewsCard key={index} title={title} description={description} dateStart={dateStart} dateEnd={dateEnd}/>//переделать ключь на id
        );
    });

    const requestCard = !news && request.map(({description, place, date, status }, index) => {
        return(
            <Card key={index} description={description} place={place} date={date} status={status} isOpen={handleOpen}/>
        );
    })
    return (
        <div className="main">
            <h1 className="main__title">{title}</h1>
            <div className="main__cards">
                {newspaper}
                {requestCard}
            </div>
        </div>
    );
}

export default Main;
