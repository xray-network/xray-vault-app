/**
 * Account Types
 */

export interface ILocalModel {
  xcoin: number
  levelClicks: number
  clicksPigBase: number
  clicksPigStarred: number
}

export interface IRemoteModel {
  createdAt: number
  accountType: string
  accountHash: string
  accountId: string
  accountName: string | null
  unlockKeys: number
  unlockedPigz: number[]
  refId: string | null
  refsIds: string[]
  refsCount: number
  cardanoAddress: string | null
  cardanoAddressUpdatedAt: number
  cardanoXcoin: number
  cardanoXdiamond: number
  cardanoXray: number
  xcoin: number
  xdiamond: number
  level: number
  levelClicks: number
  levelMaxClicks: number
  clicksTotal: number
  clicksPigBase: number
  clicksPigStarred: number
  clicksUpdatedAt: number
  reward: {
    base: {
      xcoin: number
      multiplier: number
    }
    starred: {
      xcoin: number
      multiplier: number
    }
  }
  multipliers: {
    earlyAdopter: number
    xcoin: number
    xdiamond: number
    xray: number
    level: number
    pigBase: number
    pigStarred: number
    referrals: number
  }
  starredPigId: number
  pigz: {
    id: number
    name: string
  }[]
  multiplierToXcoinRate: number
}

export interface ISettings {
  accountId: number | undefined
  selectedPigId: number
  isStarredPigSelected: boolean
  payPerClickXcoin: number
  payPerClickMultiplier: number
  locked: boolean
  localModel: ILocalModel
  remoteModel: IRemoteModel | undefined
}

/**
 * Account Actions
 */

export enum Enum {
  CLEAR = "account/CLEAR",
  INIT_ACCOUNT = "account/INIT_ACCOUNT",

  ACCOUNT_ID_SET = "account/ACCOUNT_ID_SET",
  ACCOUNT_INFO_UPDATE_SAGA = "account/ACCOUNT_INFO_UPDATE_SAGA",
  SELECTED_PIG_ID_SET = "account/SELECTED_PIG_ID_SET",
  IS_STARRED_PIG_SELECTED_SET = "account/IS_STARRED_PIG_SELECTED_SET",
  PAY_PER_CLICK_SET = "account/PAY_PER_CLICK_SET",
  LOCKED_SET = "account/LOCKED_SET",
  REMOTE_MODEL_SET = "account/REMOTE_MODEL_SET",
  LOCAL_MODEL_SET = "account/LOCAL_MODEL_SET",
  CLICK_UPDATE_SAGA = "account/CLICK_UPDATE_SAGA",
  COMMIT_CLICKS_SAGA = "account/COMMIT_CLICKS_SAGA",
}

export type AClear = {
  type: typeof Enum.CLEAR
}

export type AInitAccount = {
  type: typeof Enum.INIT_ACCOUNT
}

export type AAccountIdSet = {
  type: typeof Enum.ACCOUNT_ID_SET
  accountId: number
}

export type AAccountInfoUpdateSaga = {
  type: typeof Enum.ACCOUNT_INFO_UPDATE_SAGA
}

export type ASelectPigIdSet = {
  type: typeof Enum.SELECTED_PIG_ID_SET
  selectedPigId: number
}

export type AIsStarredPigSelectedSet = {
  type: typeof Enum.IS_STARRED_PIG_SELECTED_SET
  isStarredPigSelected: boolean
}

export type APayPerClickSet = {
  type: typeof Enum.PAY_PER_CLICK_SET
  payPerClickXcoin: number
  payPerClickMultiplier: number
}

export type ALockedSet = {
  type: typeof Enum.LOCKED_SET
  locked: boolean
}

export type ARemoteModelSet = {
  type: typeof Enum.REMOTE_MODEL_SET
  remoteModel: IRemoteModel
}

export type ALocalModelSet = {
  type: typeof Enum.LOCAL_MODEL_SET
  localModel: ILocalModel
}

export type AClickUpdateSaga = {
  type: typeof Enum.CLICK_UPDATE_SAGA
}

export type ACommitClicksSaga = {
  type: typeof Enum.COMMIT_CLICKS_SAGA
}

export type Actions =
  | AClear
  | AInitAccount
  | AAccountIdSet
  | AAccountInfoUpdateSaga
  | ASelectPigIdSet
  | AIsStarredPigSelectedSet
  | APayPerClickSet
  | ALockedSet
  | ARemoteModelSet
  | ALocalModelSet
  | AClickUpdateSaga
  | ACommitClicksSaga
