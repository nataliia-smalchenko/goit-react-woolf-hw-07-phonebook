import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/slice';
import { filterReducer } from './filterSlice/slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persisedReducer = persistReducer(config, contactsReducer);

export const reducer = combineReducers({
  contacts: persisedReducer,
  filter: filterReducer,
});
