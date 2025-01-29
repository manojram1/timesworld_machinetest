import { configureStore } from '@reduxjs/toolkit';
import {reducer as homePageReducer} from '../modules/homepage/slice';
import logger from 'redux-logger';
import _ from "lodash"
import {STATE_REDUCER_KEY} from "../modules/homepage/constants"


const reducers = {};

const rootReducer = _.set(reducers, `${STATE_REDUCER_KEY}`, homePageReducer)

const store = configureStore({
 reducer:rootReducer,   
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;