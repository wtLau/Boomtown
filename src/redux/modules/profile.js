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
    return { profileData: action.payload };
  default:
    return state;
  }
}


// Fetch Action, Thunk
export function fetchProfileData(profileId) {
  return function getProfile(dispatch) {
    Promise
      .all([
        'http://localhost:3001/items', 
        'http://localhost:3001/users']

      .map(url => (
        fetch(url)
          .then(response => response.json())

      ))).then(json => {
        const [items, users] = json;
        const profileWithOwners = items

          // .filter(it => it.itemOwner === id)
          .map(item => {
            const itemOwner = users.filter(
              user => user.id === item.itemOwner);
            item.itemOwner = itemOwner[0];
            return item;
          });
        dispatch(loadProfile(profileWithOwners));
      });
  };
}
