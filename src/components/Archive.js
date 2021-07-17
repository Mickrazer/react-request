import React, {useEffect, useState} from 'react';
import '../index.css';
import api from '../api/api'
import CompletedRequest from './CompletedRequest'


function Archive() {
    const [completedRequest, setCompletedRequest] = useState([])
    useEffect(() => {
        api.getСompletedRequest().then((result)=>{
            let date=[];
            for (let i = 0; i < result.length; i++) {
                date.push(result[i].created.slice(0,10).split('-').reverse().join('.')+ ' ' + result[i].created.slice(11, 16));
                completedRequest.push({
                    'title': result[i].title,
                    'description': result[i].description,
                    'fulfilled': result[i].supportedByUser.fullName,
                    'date': date[i]
                })
            }
            setCompletedRequest([
                ...completedRequest.sort((a,b) => a.date > b.date ? 1 : -1)
            ])
        })
    }, [])
    return (
        <section className="archive">
            <div className="archive__header">
                <svg className="archive__svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 7.99991C16 9.66691 15.4901 11.2148 14.6178 12.4962L19.7072 17.5855C20.0977 17.9761 20.0977 18.6092 19.7072 18.9997L19.0001 19.7069C18.6095 20.0974 17.9764 20.0974 17.5858 19.7069L12.4966 14.6176C11.2151 15.49 9.66711 15.9999 8 15.9999C3.58172 15.9999 0 12.4182 0 7.99991C0 3.58163 3.58172 -9.15527e-05 8 -9.15527e-05C12.4183 -9.15527e-05 16 3.58163 16 7.99991ZM8 12.9999C10.7614 12.9999 13 10.7613 13 7.99991C13 5.23848 10.7614 2.99991 8 2.99991C5.23858 2.99991 3 5.23848 3 7.99991C3 10.7613 5.23858 12.9999 8 12.9999Z"
                        fill="#6F6F72"/>
                </svg>
                <input type="text" placeholder="Поиск" className="archive__input"></input>
                <div className="archive__block-select">
                    <svg className="archive__svg" width="20" height="16" viewBox="0 0 20 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1V2C20 2.55228 19.5523 3 19 3H1C0.447716 3 0 2.55228 0 2V1Z"
                            fill="#F6F4F5"/>
                        <path
                            d="M0 14C0 13.4477 0.447715 13 1 13H9C9.55228 13 10 13.4477 10 14V15C10 15.5523 9.55229 16 9 16H1C0.447716 16 0 15.5523 0 15V14Z"
                            fill="#F6F4F5"/>
                        <path
                            d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5V8.5C0 9.05228 0.447716 9.5 1 9.5H14C14.5523 9.5 15 9.05229 15 8.5V7.5C15 6.94772 14.5523 6.5 14 6.5H1Z"
                            fill="#F6F4F5"/>
                    </svg>
                    <select name="select" className="archive__select">
                        <option value="value1" defaultValue >По дате появления</option>
                        <option value="value2">Значение 2</option>
                        <option value="value3">Значение 3</option>
                    </select>
                </div>
            </div>
            <div className="archive__block">
                {completedRequest.map(({title, description, fulfilled, date}, index) => {
                    return(
                        <CompletedRequest key={index} title={title} description={description} date={date} fulfilled={fulfilled}/>
                    );
                })}
            </div>
        </section>
    );
}

export default Archive;
