// Action Constants
const LOAD_PROFILE = 'LOAD_PROFILE';


// Action Creators
export function loadProfile(profileWithOwners) {
  return {
    type: LOAD_PROFILE,
    payload: profileWithOwners
  };
}


// Reducers
const initialState = {
  profileData: []
};

export function ProfileRenderer(state = initialState, action) {
  switch (action.type) {
  case LOAD_PROFILE:
    return { ...state, loading: false, profileData: action.payload };
  default:
    return state;
  }
}


// Fetch Action, Thunk
// export function fetchProfileData(profileId) {
//   return function getProfile(dispatch) {
//     fetch(`http://localhost:3001/users/${profileId}`)
//       .then(response => response.json())
//       .then(json => {
//         const users = json;
//         dispatch(loadProfile(users));
//       });
//   };
// }
