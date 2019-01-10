import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, answerAction } from '../actions/notes'

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

	}

	handleNext(e) {
		e.preventDefault()
		console.log('next clicked')
		// this.props.dispatch(nextNote())
	}

	render() {

		if (this.props.note) {

			return (
				<div>
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<img src={this.props ? this.props.note.note : '#'} alt="note"></img>
						<label htmlFor="answer">Answer:</label>
						<input type="text" name="answer" id="answer"></input>
						<input type="submit" value="submit"></input>
						<button onClick={(e) => this.handleNext(e)}>Next</button>
					</form>
					<p>{this.props.note.feedback}</p>
				</div>
			)
		} else {
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
