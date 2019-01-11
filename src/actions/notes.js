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
});

export const NEXT_NOTE = 'NEXT_NOTE';
export const nextNote = (next, nextnext, sound) => ({
  type: NEXT_NOTE,
  next,
  nextnext,
  sound
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
      return res;
    })
    .then(res=>res.json())
    .then(notes=>dispatch(fetchNoteSuccess(notes)))
    .catch(err=>dispatch(fetchNoteError(err)));
};

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
};


export const FETCH_PROGRESS_REQUEST = 'FETCH_PROGRESS_REQUEST';
export const fetchProgressRequest = () => ({
  type: FETCH_PROGRESS_REQUEST
});

export const FETCH_PROGRESS_SUCCESS = 'FETCH_PROGRESS_SUCCESS';
export const fetchProgressSuccess = progress => ({
  type: FETCH_PROGRESS_SUCCESS,
  progress
});

export const FETCH_PROGRESS_ERROR = 'FETCH_PROGRESS_ERROR';
export const fetchProgressError = error => ({
  type: FETCH_PROGRESS_ERROR,
  error
});

export const fetchProgress = () => (dispatch, getState) => {
  dispatch(fetchProgressRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/notes/progress`,{
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
      return res;
    })
    .then(res=>res.json())
    .then(arr=>dispatch(fetchProgressSuccess(arr)))
    .catch(err=>dispatch(fetchProgressError(err)));
}

export const FETCH_SOUND_REQUEST = 'FETCH_SOUND_REQUEST';
export const fetchSoundRequest = () => ({
  type: FETCH_SOUND_REQUEST
});

export const FETCH_SOUND_SUCCESS = 'FETCH_Sound_SUCCESS';
export const fetchSoundSuccess = (sound) => ({
  type: FETCH_SOUND_SUCCESS,
  sound
});

export const FETCH_SOUND_ERROR = 'FETCH_SOUND_ERROR';
export const fetchSoundError = error => ({
  type: FETCH_SOUND_ERROR,
  error
});

export const fetchSound = () => (dispatch, getState) => {
  dispatch(fetchSoundRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/notes/sound`,{
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
      return res;
    })
    .then(res=>res.json())
    .then(sound=>dispatch(fetchSoundSuccess(sound)))
    .catch(err=>dispatch(fetchSoundError(err)));
}