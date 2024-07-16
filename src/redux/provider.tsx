import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { select, call } from "redux-saga/effects"
import type { CallEffect, SagaReturnType } from "redux-saga/effects"
import createSagaMiddleware from "redux-saga"

import rootReducers from "./reducers"
import rootSagas from "./sagas"
import Runner from "./effects"

export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch

// typed redux hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// typed saga select
export const typedSelect = function* <TSelected>(
  selector: (state: RootState) => TSelected
): Generator<any, TSelected, TSelected> {
  return yield select(selector)
}

// typed saga call
type SagaGenCall<T extends (...args: any[]) => any> = Generator<CallEffect<SagaReturnType<T>>, SagaReturnType<T>, any>
export const typedCall = function* <Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): SagaGenCall<Fn> {
  return yield call(fn, ...args)
}

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSagas)

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Runner>{children}</Runner>
    </Provider>
  )
}

export default ReduxProvider
