import { all, takeEvery, put, call, select, fork, takeLatest, delay, cancelled } from "redux-saga/effects"
import { notification } from "antd"
import { AccountActions, AccountTypes } from "./"
import { typedSelect, typedCall } from "../provider"
// import { getAccount, commitClicks } from "@/services/api"

export function* ACCOUNT_INFO_UPDATE_SAGA() {
  // const { initDataRaw } = yield* typedSelect((state) => state.app.launchParams!)
  // const remoteModel = yield* typedCall(getAccount, initDataRaw!)
  // if (remoteModel.message === "Unauthorized") {
  //   alert("Unauthorized")
  //   return
  // }
  // yield put(AccountActions.REMOTE_MODEL_SET(remoteModel))
}

export function* CLICK_UPDATE_SAGA() {
  // const localModel = yield* typedSelect((state) => state.account.localModel)
  // const isStarredPigSelected = yield* typedSelect((state) => state.account.isStarredPigSelected)
  // const payPerClickXcoin = yield* typedSelect((state) => state.account.payPerClickXcoin)
  // yield put(
  //   AccountActions.LOCAL_MODEL_SET({
  //     xcoin: localModel.xcoin + payPerClickXcoin,
  //     levelClicks: localModel.levelClicks + 1,
  //     clicksPigBase: localModel.clicksPigBase + (isStarredPigSelected ? 0 : 1),
  //     clicksPigStarred: localModel.clicksPigStarred + (isStarredPigSelected ? 1 : 0),
  //   })
  // )
}

export function* COMMIT_CLICKS_SAGA() {
  // const { initDataRaw } = yield* typedSelect((state) => state.app.launchParams!)
  // const localModel = yield* typedSelect((state) => state.account.localModel)
  // if (localModel.levelClicks) {
  //   const remoteModel = yield* typedCall(
  //     commitClicks,
  //     initDataRaw!,
  //     localModel.clicksPigBase,
  //     localModel.clicksPigStarred
  //   )
  //   yield put(
  //     AccountActions.LOCAL_MODEL_SET({
  //       xcoin: 0,
  //       levelClicks: 0,
  //       clicksPigBase: 0,
  //       clicksPigStarred: 0,
  //     })
  //   )
  //   if (remoteModel.error) {
  //     notification.error({
  //       message: null,
  //       description: remoteModel.error,
  //       placement: "top",
  //       duration: 20,
  //     })
  //     return
  //   }
  //   yield put(AccountActions.REMOTE_MODEL_SET(remoteModel))
  // }
}

export function* INIT_ACCOUNT() {}

export default function* rootSaga() {
  yield all([
    INIT_ACCOUNT(),
    takeLatest(AccountTypes.Enum.ACCOUNT_INFO_UPDATE_SAGA, ACCOUNT_INFO_UPDATE_SAGA),
    takeLatest(AccountTypes.Enum.CLICK_UPDATE_SAGA, CLICK_UPDATE_SAGA),
    takeLatest(AccountTypes.Enum.COMMIT_CLICKS_SAGA, COMMIT_CLICKS_SAGA),
  ])
}
