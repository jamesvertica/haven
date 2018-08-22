// takes the previous state and an update and applies teh update
  // returns the new state

// should be a pure function
// no side effects
// should be immutable
  // return a new object

import { combineReducers } from 'redux'
  
import { UPDATE_USER, UPDATE_CONTACT } from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_USER: return merge(state, action.payload)
    case UPDATE_CONTACT: return merge(state, { prevContact: action.payload })
    default: return state
  }
}

const contactReducer = (state = {}, action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  return state
}

const reducer = combineReducers({
  user: userReducer, //combineReducers can be nested//composable!
  contacts: contactReducer
})

export default reducer