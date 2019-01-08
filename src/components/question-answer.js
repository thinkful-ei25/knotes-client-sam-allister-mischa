import React from 'react';
import {connect} from 'react-redux';
import {fetchNote} from '../actions/notes'

export class Question extends React.Component {
    componentDidMount() {
        console.log('component did mount')
        this.props.dispatch(fetchNote());
    }

    onSubmit() {

    }

    render() {
        
        if (this.props.currentNote.note) {

        return (
            <div>
                <img src={this.props ? this.props.currentNote.note.image : '#'} alt="note"></img>
                <label htmlFor="answer">Answer:</label>
                <input type="text" name="answer" id="answer"></input>
                <button type="submit"></button>
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
        currentNote: state.note
    }
}

export default connect(mapStatetoProps)(Question)
