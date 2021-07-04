import { combineReducers } from 'redux'

import { scrollReducer } from './reducers/scrollReducer'

export const rootReducer = combineReducers({
    scroll: scrollReducer
})
