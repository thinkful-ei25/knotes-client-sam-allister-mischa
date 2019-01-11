import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires_login';
import {fetchProgress} from '../actions/notes';
import './progress.css';

class Progress extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(fetchProgress());
  }

  generateProgress(){
    const progressData = this.props.progress;
    function compare(a,b){
      if(a.note < b.note){
        return -1;
      }
      if(a.note > b.note){
        return 1;
      }
      return 0;
    }
    progressData.sort(compare);
    const progress = progressData.map((note, index)=>{
      let percentage = note.correct/(note.correct+note.incorrect);
      percentage = percentage ? percentage : 0;
      let color = (percentage >.7 ) ? "passing" : "failing";
      percentage = Math.floor(percentage*100)+'%';
      return (
        <tr key={index}>
          <td>{note.note}</td>
          <td>{note.correct}</td>
          <td>{note.incorrect}</td>
          <td className={color}>{percentage}</td>
        </tr>
      )
    });
    return progress;
  }
  
  render(){
    if(!this.props.progress){
      return null;
    } else {
      let progress = this.generateProgress();
      
      return(
        <div className="container">
          <table>
            <tbody>
              <tr>
                <th>Note</th>
                <th>Correct</th>
                <th>Incorrect</th>
                <th>Percentage</th>
              </tr>
              {progress}
            </tbody>
          </table>
        </div>
      );
    }
    
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.user,
    progress: state.note.progress
  };
}

export default requiresLogin()(connect(mapStateToProps)(Progress));