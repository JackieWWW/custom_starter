import React from 'react';

const FavePage = (props) => (
	<ul>
		{props.faves.map((item, idx) => <FaveItem key={idx} spot={item}/>)}
	</ul>
)

const FaveItem = (props) => (
	<li>{props.spot.name} <img  height="50px" width="50px" src={props.spot.image_url} /></li>
)

export default FavePage