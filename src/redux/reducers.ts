import { combineReducers } from "redux"
import app from "./app/reducers"
import account from "./account/reducers"

const rootReducers = combineReducers({
  app,
  account,
})

export default rootReducers
