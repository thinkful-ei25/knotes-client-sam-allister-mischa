import {
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_ERROR,
  FETCH_PROGRESS_ERROR,
  FETCH_PROGRESS_REQUEST,
  FETCH_PROGRESS_SUCCESS
} from '../actions/notes';

const initialState = {
  note : null,
  next: null,
  loading: false,
  error: null,
  progress: []
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
      note: action.note,
      error: null
    };
  } else if(action.type === FETCH_NOTE_ERROR){
    return {
      ...state,
      loading: false,
      note: null,
      error: action.error
    };
  } else if(action.type === FETCH_PROGRESS_REQUEST){
    return {
      ...state,
      loading: true,
      error: null,
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
  return state;
}