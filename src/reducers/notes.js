import {
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_ERROR,
  ANSWER_ACTION_SUCCESS
} from '../actions/notes';

const initialState = {
  note : null,
  next: null,
  loading: false,
  error: null
}

export default function noteReducer(state=initialState, action){
  if(action.type === FETCH_NOTE_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if(action.type === FETCH_NOTE_SUCCESS){
    return {
      ...state,
      loading: false,
      note: action.note.note,
      next: action.note.next,
      error: null
    };
  } else if(action.type === FETCH_NOTE_ERROR){
    return {
      ...state,
      loading: false,
      note: null,
      error: action.error
    };
  }
  else if(action.type === ANSWER_ACTION_SUCCESS) {
    return {
      ...state,
      loading: false,
      feedback: action.note.feedback,
      feedbackNext: action.note.next
    }
  }
  return state;
}