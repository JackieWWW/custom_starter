import React from 'react';

const DumpList = (props) => (
	<ul>
		{props.dumps.map((item, idx) => <DumpItem save={props.save} key={idx} spot={item}/>)}
	</ul>
)

const DumpItem = (props) => (
	<li><button onClick={() => props.save(props.spot)}>Save!</button>{props.spot.name} <img  height="50px" width="50px" src={props.spot.image_url} /></li>
)

export default DumpList