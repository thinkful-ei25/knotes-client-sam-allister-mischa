import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, answerAction, nextNote, fetchSound } from '../actions/notes'
import PlaySounds from './playSound';
import { throws } from 'assert';

export class Question extends React.Component {
	componentDidMount() {
		console.log('component did mount')
		if (!this.props.note.submitted) {
			this.props.dispatch(fetchNote());
			this.props.dispatch(fetchSound());
		}
		
		
	}

	handleSubmit(e) {;
		e.preventDefault();
		e.stopPropagation();
		let answer = e.target.answer.value
		answer = answer.toUpperCase()
		console.log(answer)
		if (answer && !this.props.note.submitted) {
			this.props.dispatch(answerAction(answer))
		}
		e.target.answer.value = ''

	}

	handleNext(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('next clicked')
		if (this.props.note.submitted) {
			this.props.dispatch(nextNote(this.props.note.next, this.props.note.feedbackNext))
			this.props.dispatch(fetchSound());
		}
	}

	render() {
		let color;
		if (this.props.note.feedback) {
			let arr = this.props.note.feedback.split(',');
			console.log(arr[0])
			if (arr[0] === "Correct") {
				color = "green";
			} else {
				color = "red";
			}
		}
		
		if (this.props.note) {
			return (
				<div className="container question-container">
					<div className="sound-container">
						{<PlaySounds sound={this.props.note.encodedMp3 ? this.props.note.encodedMp3 : ''} className="soundBtn" />}
					</div>
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<img src={this.props ? this.props.note.note : '#'} alt="note"></img>
						{this.props.note.submitted ?
							<div className="feedback-container">
								<p className={color}>{this.props.note.feedback}</p>
								<button onClick={(e) => this.handleNext(e)}>Next</button>
							</div> :
							<div className="answer-form">
								<label htmlFor="answer">Answer:</label>
								<input type="text" name="answer" id="answer"></input>
								<input type="submit" value="submit" className="answerBtn"></input>
							</div>
						}
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
