import React, { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "./provider"
import { AccountActions, AccountTypes } from "./account"
import { AppActions, AppTypes } from "./app"
import { set } from "store"

let soundTrackStarted: boolean = false

const Runner = ({ children }: { children: any }) => {
  const dispatch = useAppDispatch()
  const accountId = useAppSelector((state) => state.account.accountId)
  const selectedPigId = useAppSelector((state) => state.account.selectedPigId)
  const remoteModel = useAppSelector((state) => state.account.remoteModel)

  // Account info update
  // useEffect(() => {
  //   if (accountId) {
  //     dispatch(AccountActions.ACCOUNT_INFO_UPDATE_SAGA())
  //   }
  // }, [accountId])

  // Update state on pig change
  // useEffect(() => {
  //   if (remoteModel) {
  //     const isStarredPigSelected = selectedPigId === remoteModel.starredPigId
  //     dispatch(AccountActions.IS_STARRED_PIG_SELECTED_SET(isStarredPigSelected))
  //     isStarredPigSelected
  //       ? dispatch(
  //           AccountActions.PAY_PER_CLICK_SET(
  //             remoteModel.reward.starred.xcoin,
  //             remoteModel?.reward.starred.multiplier || 0
  //           )
  //         )
  //       : dispatch(
  //           AccountActions.PAY_PER_CLICK_SET(remoteModel.reward.base.xcoin, remoteModel?.reward.base.multiplier || 0)
  //         )
  //   }
  // }, [selectedPigId, remoteModel])

  // Commit taps interval
  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch(AccountActions.COMMIT_CLICKS_SAGA())
  //   }, COMMIT_INTERVAL)
  // }, [])

  return children
}

export default Runner
