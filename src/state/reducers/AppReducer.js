import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import ItemsReducer from './ItemsReducer';

const AppReducer = combineReducers({
  item: ItemsReducer,
  form: formReducer,
  router: routerReducer,
});

export default AppReducer;
