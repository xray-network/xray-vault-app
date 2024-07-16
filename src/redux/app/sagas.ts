import { all, takeEvery, put, call, select, fork, takeLatest, delay, cancelled } from "redux-saga/effects"
import { initViewport, retrieveLaunchParams, initUtils, initMiniApp } from "@tma.js/sdk"
import { AppActions, AppTypes } from "."
import { AccountActions, AccountTypes } from "@/redux/account"
import { typedSelect, typedCall, RootState } from "@/redux/provider"

export function* THEME_UPDATE_SAGA({ theme }: AppTypes.AThemeUpdateSaga) {
  if (global.document) {
    const html = global.document.querySelector("html")!
    html.setAttribute("data-disable-transitions", "true")
    html.setAttribute("data-theme", theme)
    setTimeout(() => {
      html.removeAttribute("data-disable-transitions")
    }, 500)
    yield put(AppActions.THEME_SET(theme))
  }
}

export function* SCALE_UPDATE_SAGA({ scale }: AppTypes.AScaleUpdateSaga) {
  if (global.document) {
    const html = global.document.querySelector("html")!
    html.setAttribute("data-disable-transitions", "true")
    html.setAttribute("data-scale", scale)
    setTimeout(() => {
      html.removeAttribute("data-disable-transitions")
    }, 500)
    yield put(AppActions.SCALE_SET(scale))
  }
}

export function* INIT_APP() {
  // try {
  //   // Init TG environment
  //   const launchParams = retrieveLaunchParams()
  //   const viewport = yield* typedCall(async () => await initViewport()?.[0])
  //   const miniApp = initMiniApp()?.[0]

  //   yield miniApp.setBgColor("#040713") // set background color
  //   yield miniApp.setHeaderColor("#0e0e18") // set header color
  //   yield viewport.expand() // Expand viewport

  //   if (AVAILABLE_PLATFORMS.includes(launchParams.platform)) {
  //     yield put(AppActions.TG_LAUNCH_PARAMS_SET(launchParams))
  //     yield put(AccountActions.ACCOUNT_ID_SET(launchParams.initData!.user!.id)) // Set account User ID
  //   } else {
  //     yield put(AppActions.LOCK_SET(true)) // Lock the app if needed
  //   }
  // } catch {
  //   if (global.document) {
  //     yield put(AppActions.LOCK_SET(true)) // Lock the app if needed
  //   }
  // }

  // Init theme
  const theme: AppTypes.Theme = yield select((state: RootState) => state.app.theme)
  yield put(AppActions.THEME_UPDATE_SAGA(theme))

  // Init scale
  const scale: AppTypes.Scale = yield select((state: RootState) => state.app.scale)
  yield put(AppActions.SCALE_UPDATE_SAGA(scale))
}

export default function* rootSaga() {
  yield all([
    INIT_APP(),
    takeLatest(AppTypes.Enum.THEME_UPDATE_SAGA, THEME_UPDATE_SAGA),
    takeLatest(AppTypes.Enum.SCALE_UPDATE_SAGA, SCALE_UPDATE_SAGA),
  ])
}
