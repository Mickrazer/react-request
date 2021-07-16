import React from 'react';
import '../index.css';
import api from "../api/api";

function User (props) {
	const {name, avatar} = props;
	const imageUrl = `${api.url}${avatar}`;
	return (
		<div className="user">
	      <img src={imageUrl} alt="avatar" className="user__avatar" />
	      <h1 className="user__title">Здравствуйте, <span className="user__name">{name}</span></h1>
	    </div>
	);
}

export default User;
