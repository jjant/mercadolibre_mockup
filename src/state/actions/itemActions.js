import api from '../../misc/api';

export const actions = {
  CLEAR_ITEMS: 'CLEAR_ITEMS',
  QUERY_ITEMS_LOADING: 'QUERY_ITEMS_LOADING',
  QUERY_ITEMS_SUCCESS: 'QUERY_ITEMS_SUCCESS',
  CLEAR_ITEM: 'CLEAR_ITEM',
  QUERY_ITEM_LOADING: 'QUERY_ITEM_LOADING',
  QUERY_ITEM_SUCCESS: 'QUERY_ITEM_SUCCESS',
};

export function queryItems(query) {
  const request = api.queryItems(query);

  return async (dispatch) => {
    dispatch({ type: actions.QUERY_ITEMS_LOADING });

    const response = await request;
    dispatch({
      type: actions.QUERY_ITEMS_SUCCESS,
      payload: response,
    });
  }
};

export function clearItems() {
  return {
    type: actions.CLEAR_ITEMS,
  };
}


export function queryItem(itemId) {
  const request = api.queryItem(itemId);

  return async (dispatch) => {
    dispatch({ type: actions.QUERY_ITEM_LOADING });

    const response = await request;
    dispatch({
      type: actions.QUERY_ITEM_SUCCESS,
      payload: response,
    });
  };
}

export function clearItem() {
  return {
    type: actions.CLEAR_ITEM,
  };
}
