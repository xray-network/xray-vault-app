import { all } from "redux-saga/effects"
import app from "./app/sagas"
import account from "./account/sagas"

export default function* rootSaga() {
  yield all([app(), account()])
}
