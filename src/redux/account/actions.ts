import { AccountTypes } from "./"

export function CLEAR(): AccountTypes.AClear {
  return { type: AccountTypes.Enum.CLEAR }
}

export function INIT_ACCOUNT(): AccountTypes.AInitAccount {
  return { type: AccountTypes.Enum.INIT_ACCOUNT }
}

export function ACCOUNT_ID_SET(accountId: number): AccountTypes.AAccountIdSet {
  return { type: AccountTypes.Enum.ACCOUNT_ID_SET, accountId }
}

export function ACCOUNT_INFO_UPDATE_SAGA(): AccountTypes.AAccountInfoUpdateSaga {
  return { type: AccountTypes.Enum.ACCOUNT_INFO_UPDATE_SAGA }
}

export function SELECTED_PIG_ID_SET(selectedPigId: number): AccountTypes.ASelectPigIdSet {
  return { type: AccountTypes.Enum.SELECTED_PIG_ID_SET, selectedPigId }
}

export function IS_STARRED_PIG_SELECTED_SET(isStarredPigSelected: boolean): AccountTypes.AIsStarredPigSelectedSet {
  return { type: AccountTypes.Enum.IS_STARRED_PIG_SELECTED_SET, isStarredPigSelected }
}

export function PAY_PER_CLICK_SET(
  payPerClickXcoin: number,
  payPerClickMultiplier: number
): AccountTypes.APayPerClickSet {
  return { type: AccountTypes.Enum.PAY_PER_CLICK_SET, payPerClickXcoin, payPerClickMultiplier }
}

export function LOCKED_SET(locked: boolean): AccountTypes.ALockedSet {
  return { type: AccountTypes.Enum.LOCKED_SET, locked }
}

export function REMOTE_MODEL_SET(remoteModel: AccountTypes.IRemoteModel): AccountTypes.ARemoteModelSet {
  return { type: AccountTypes.Enum.REMOTE_MODEL_SET, remoteModel }
}

export function LOCAL_MODEL_SET(localModel: AccountTypes.ILocalModel): AccountTypes.ALocalModelSet {
  return { type: AccountTypes.Enum.LOCAL_MODEL_SET, localModel }
}

export function CLICK_UPDATE_SAGA(): AccountTypes.AClickUpdateSaga {
  return { type: AccountTypes.Enum.CLICK_UPDATE_SAGA }
}

export function COMMIT_CLICKS_SAGA(): AccountTypes.ACommitClicksSaga {
  return { type: AccountTypes.Enum.COMMIT_CLICKS_SAGA }
}
