import { actions } from '../actions/itemActions';


class ItemsReducer {
  static initialState = {
    currentItem: null,
    items: [],
    loading: false,
  }

  static reduce(state = ItemsReducer.initialState, action) {
    if (ItemsReducer[action.type])
      return ItemsReducer[action.type](state, action);
    return state
  }

  static [actions.QUERY_ITEMS_LOADING](state) {
    return {
      ...state,
      loading: true
    };
  }

  static [actions.QUERY_ITEMS_SUCCESS](state, action) {
    return {
      ...state,
      items: action.payload.items,
      loading: false,
    };
  }

  static [actions.CLEAR_ITEMS](state) {
    return {...state, items: [] };
  }

  static [actions.QUERY_ITEM_LOADING](state) {
    return {
      ...state,
      loading: true
    };
  }

  static [actions.QUERY_ITEM_SUCCESS](state, action) {
    return {
      ...state,
      currentItem: action.payload.item,
      loading: false,
    };
  }

  static [actions.CLEAR_ITEM](state) {
    return {...state, currentItem: null };
  }
}

export default ItemsReducer.reduce;
