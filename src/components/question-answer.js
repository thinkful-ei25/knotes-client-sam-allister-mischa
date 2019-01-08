import React from 'react';
import {connect} from 'react-redux';
import {fetchNote, correctAnswer, incorrectAnswer} from '../actions/notes'

export class Question extends React.Component {
    componentDidMount() {
        console.log('component did mount')
        this.props.dispatch(fetchNote());
    }

    handleSubmit(e){
        e.preventDefault()
        let answer = e.target.answer.value
        console.log(answer)
        if (answer.toUpper() === this.props.currentNote.note.note) {
            this.props.dispatch(correctAnswer())
        } else {
            this.props.dispatch(incorrectAnswer())
        }
    }

    nextQuestion() {
        this.props.dispatch(nextQuestion())
    }

    render() {
        
        if (this.props.currentNote.note) {

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <img src={this.props ? this.props.currentNote.note.image : '#'} alt="note"></img>
                <label htmlFor="answer">Answer:</label>
                <input type="text" name="answer" id="answer"></input>
                <input type ="submit">Submit</input>
            </form>
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
        currentNote: state.note
    }
}

export default connect(mapStatetoProps)(Question)
