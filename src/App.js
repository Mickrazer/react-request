import React, {useState, useEffect} from 'react';
import './App.css';
import User from './components/User';
import Nav from './components/Nav';
import Main from './components/Main';
import Popup from './components/Popup';
import Archive from "./components/Archive";
import api from "./api/api";


function App() {

    const [popupOpen, setPopupOpen] = useState(false);
    const [activeBtn, setActiveBtn] = useState(true);
    const [userName, setUserName] = useState('')
    const [avatar, setAvatar] = useState('')

    function handleClickOpen() {
        setPopupOpen(true);
    }

    function closePopup () {
        setPopupOpen(false);
    }

    function toogleActiveBtn(){
        setActiveBtn(!activeBtn)
    }


    useEffect(() => {
        api.getUser().then((result) => {
            setUserName(result.firstName);
            setAvatar(result.userImage)
        });

    }, [])
    const popupIsOpen = popupOpen && <Popup handleClose={closePopup}/>

    //ошибка в Archive
    return (
        <div className="page">
            <Nav activeButton={activeBtn} handleActiveBtn={toogleActiveBtn}/>
            <div>
                <User name={userName} avatar={avatar}/>
                <section className={activeBtn ? "main__block" : 'main__block disabled'}>
                    <Main title="Действующие заявки" news={false} handleOpen={handleClickOpen}></Main>
                    <Main title="Новости" news={true}></Main>
                </section>
                <section className={!activeBtn? 'main__block': 'main__block disabled'}>
                    <Archive/>
                </section>
            </div>
            {popupIsOpen}
        </div>
    );
}

export default App;
