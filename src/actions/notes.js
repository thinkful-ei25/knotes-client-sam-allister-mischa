import {API_BASE_URL} from '../config';

export const FETCH_NOTE_REQUEST = 'FETCH_NOTE_REQUEST';
export const fetchNoteRequest = () => ({
  type: FETCH_NOTE_REQUEST
});

export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const fetchNoteSuccess = (note) => ({
  type: FETCH_NOTE_SUCCESS,
  note
});

export const FETCH_NOTE_ERROR = 'FETCH_NOTE_ERROR';
export const fetchNoteError = error => ({
  type: FETCH_NOTE_ERROR,
  error
});

export const ANSWER_ACTION_SUCCESS = 'ANSWER_ACTION_SUCCESS';
export const answerActionSuccess = (note) => ({
  type: ANSWER_ACTION_SUCCESS,
  note
})

export const fetchNote = () => (dispatch, getState) => {
  dispatch(fetchNoteRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/notes`,{
    method: 'GET',
    headers: {AUthorization: `Bearer ${authToken}`}
  })
    .then((res)=>{
      if(!res.ok){
        const contentType = res.headers.get('content-type');
        if(contentType && contentType.startsWith('application/json')){
          return res.json().then(err=> Promise.reject(err));
        }

        const error = new Error(res.status);
        error.code = res.status;
        return Promise.reject(error);
      }
      console.log(res);
      return res;
    })
    .then(res=>res.json())
    .then(notes=>dispatch(fetchNoteSuccess(notes)))
    .catch(err=>dispatch(fetchNoteError(err)));
}

export const answerAction = (answer) => (dispatch, getState) => {
  console.log('answerinsideaction:', answer)
  dispatch(fetchNoteRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/notes`,{
    method: 'PUT',
    body: JSON.stringify({answer : answer }),
    headers: {AUthorization: `Bearer ${authToken}`, 'Content-Type': 'application/json'}
  })
  .then((res)=>{
    if(!res.ok){
      const contentType = res.headers.get('content-type');
      if(contentType && contentType.startsWith('application/json')){
        return res.json().then(err=> Promise.reject(err));
      }

      const error = new Error(res.status);
      error.code = res.status;
      return Promise.reject(error);
    }
    console.log(res);
    return res;
  })
  .then(res=>res.json())
  .then(notes=>dispatch(answerActionSuccess(notes)))
  .catch(err=>dispatch(fetchNoteError(err)));
}

