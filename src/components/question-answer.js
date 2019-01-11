import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, answerAction, nextNote } from '../actions/notes'
import PlaySounds from './playSound';

export class Question extends React.Component {
	componentDidMount() {
		console.log('component did mount')
		this.props.dispatch(fetchNote());
	}

	handleSubmit(e) {
		e.preventDefault()
		let answer = e.target.answer.value
		answer = answer.toUpperCase()
		console.log(answer)
		if (answer && !this.props.note.submitted) {
			this.props.dispatch(answerAction(answer))
		}
		e.target.answer.value = ''

	}

	handleNext(e) {
		e.preventDefault()
		console.log('next clicked')
		if (this.props.note.submitted) {
			this.props.dispatch(nextNote(this.props.note.next, this.props.note.feedbackNext))
		}
	}

	render() {

		if (this.props.note) {
			return (
				<div>
					{<PlaySounds sound={this.props.note.encodedMp3 ? this.props.note.encodedMp3 : ''}/>}
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<img src={this.props ? this.props.note.note : '#'} alt="note"></img>
						{this.props.note.submitted ? 
						<div>
						<p>{this.props.note.feedback}</p>
						<button onClick={(e) => this.handleNext(e)}>Next</button>
						</div> : 
						<div>
						<label htmlFor="answer">Answer:</label>
						<input type="text" name="answer" id="answer"></input>
						<input type="submit" value="submit"></input>
						</div>}
						
					</form>
					
				</div>
			)
		
		
		}
		 
		
		else {
			return (
				<div><p>loading...</p></div>
			)
		}
	}

}

export const mapStatetoProps = state => {
	console.log('questions:', state)
	return {
		note: state.note,

	
		
	}
}

export default connect(mapStatetoProps)(Question)
