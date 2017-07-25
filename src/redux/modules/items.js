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

