import {API_BASE_URL} from '../config';

export const FETCH_NOTE_REQUEST = 'FETCH_NOTE_REQUEST';
export const fetchNoteRequest = () => ({
  type: FETCH_NOTE_REQUEST
});

export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const fetchNoteSuccess = notes => ({
  type: FETCH_NOTE_SUCCESS,
  notes
});

export const FETCH_NOTE_ERROR = 'FETCH_NOTE_ERROR';
export const fetchNoteError = error => ({
  type: FETCH_NOTE_ERROR,
  error
});

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