import React from 'react';
import './Card.css';

const Card = ({title, para, target, url, value}) => {
	return (
		<div class="card text-bg-dark overflow-hidden text-center m-auto">
			<img
				src={url}
				class="card-img"
				alt="..."
			/>
			<div class="card-img-overlay">
				<h5 class="card-title">{title}</h5>
				<p class="card-text">{para}</p>
				<a href={target} class="btn btn-primary">
					{value}
				</a>
			</div>
		</div>
	);
};

export default Card;
