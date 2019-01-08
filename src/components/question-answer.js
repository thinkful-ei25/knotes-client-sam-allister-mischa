import React from 'react';
import {connect} from 'react-redux';
// import fetchNotes from './actions/notes'

export class Question extends React.Component {
    componentDidMount() {
        console.log('component did mount')
        // this.props.dispatch(fetchNotes());
    }

    render() {
        
        return (
            <div>
                {/* <img src={this.props.notes.image} alt="note"></img> */}
                <label htmlFor="answer">Answer:</label>
                <input type="text" name="answer" id="answer"></input>
            </div>
            )
    }
}

export const mapStatetoProps = state => {
    console.log('questions:', state)
    return {
        // notes: this.state.notes
    }
}

export default connect(mapStatetoProps)(Question)
