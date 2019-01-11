import React from 'react';
import base64 from 'base-64';

const handleSubmit = (audio) => {
	const note = new Audio("data:audio/wav;base64," + audio);
	note.play();
}
export default function PlaySounds(props){
		// console.log(mp3)
		if(props.sound){
			return(
				<button onClick={() => handleSubmit(props.sound.sound)}>Play Note ♪</button>
			)
		}else{
			return null
		}
}
