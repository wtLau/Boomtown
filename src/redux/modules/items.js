// Action Constants
const LOAD_ITEMS_LIST = 'LOAD_ITEMS_LIST';
const ITEM_FILTER_SELECTION = 'ITEM_FILTER_SELECTION';

// Action Creators
export function loadItemsList(itemsWithOwners) {
  return {
    type: LOAD_ITEMS_LIST,
    payload: itemsWithOwners
  };
}

export function itemListFilter(itemFilter) {
  return {
    type: ITEM_FILTER_SELECTION,
    payload: itemFilter
  };
}

// Reducers
const initialState = {
  loading: true,
  itemsData: [],
  itemFilter: []
};

export function CardRenderer(state = initialState, action) {
  switch (action.type) {
  case LOAD_ITEMS_LIST:
    return { loading: false, itemsData: action.payload };
  default:
    return state;
  case ITEM_FILTER_SELECTION:
    const theFilter = {
      ...state,
      itemFilter: action.payload
    };
    return theFilter;
  }
}

// Fetch Action, Thunk
export function fetchItemData() {
  return function (dispatch) {
    Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
    fetch(url).then(response => response.json())
  ))).then(json => {
    const [items, users] = json;
    const itemsWithOwners = items.map(item => {
      const itemOwner = users.filter(
        user => user.id === item.itemOwner);
      item.itemOwner = itemOwner[0];
      return item;
    });
    dispatch(loadItemsList(itemsWithOwners));
  });
  };
}

