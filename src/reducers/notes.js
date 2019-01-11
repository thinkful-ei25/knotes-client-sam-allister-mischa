import {
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_ERROR,
  FETCH_PROGRESS_ERROR,
  FETCH_PROGRESS_REQUEST,
  FETCH_PROGRESS_SUCCESS,
  ANSWER_ACTION_SUCCESS,
  NEXT_NOTE,
  FETCH_SOUND_ERROR,
  FETCH_SOUND_REQUEST,
  FETCH_SOUND_SUCCESS
} from '../actions/notes';

const initialState = {
  note : null,
  next: null,
  loading: false,
  error: null,
  progress: [],
  encodedMp3: null,
  nextSound: null
}

export default function noteReducer(state=initialState, action){
  if(action.type === FETCH_NOTE_REQUEST){
    return {
      ...state,
      loading: true,
      error: null,
      submitted: false
    };
  } else if(action.type === FETCH_NOTE_SUCCESS){
    return {
      ...state,
      loading: false,
      note: action.note.note,
      next: action.note.next,
      error: null,
      submitted: false
    };
  } else if(action.type === FETCH_NOTE_ERROR){
    return {
      ...state,
      loading: false,
      note: null,
      error: action.error,
      submitted: false
    };
  } else if(action.type === FETCH_PROGRESS_REQUEST){
    return {
      ...state,
      loading: true,
      error: null,
      submitted: false
    };
  } else if(action.type === FETCH_PROGRESS_ERROR){
    return {
      ...state,
      loading: false,
      progress: [],
      error: action.error
    };
  } else if(action.type === FETCH_PROGRESS_SUCCESS){
    return {
      ...state,
      loading: false,
      progress: action.progress,
      error: null
    };
  }
  else if(action.type === ANSWER_ACTION_SUCCESS) {
    return {
      ...state,
      loading: false,
      feedback: action.note.feedback,
      feedbackNext: action.note.next,
      submitted: true
    }
  }
  else if (action.type === NEXT_NOTE) {
    return {
      ...state,
      note: action.next,
      next: action.nextnext,
      submitted: false,
      feedback: null,
      feedbackNext: null
    }
  } else if (action.type === FETCH_SOUND_ERROR){
    return {
      ...state,
      encodedMp3: null,
      error: action.error
    };
  } else if (action.type === FETCH_SOUND_SUCCESS){
    return {
      ...state,
      encodedMp3: action.sound,
      error: null,
      loading: null
    };
  } else if (action.type === FETCH_SOUND_REQUEST){
    return {
      ...state,
      encodedMp3: null,
      loading: true
    };
  }
  return state;
}