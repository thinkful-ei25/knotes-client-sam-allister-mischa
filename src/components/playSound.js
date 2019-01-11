import React from 'react';

const handleSubmit = (audio) => {
	const note = new Audio("data:audio/wav;base64," + audio);
	note.play();
}
export default function PlaySounds(props){
		if(props.sound){
			return(
				<button onClick={() => handleSubmit(props.sound.sound)}>Play Note</button>
				)
		}else{
			return null
		}
			

}
