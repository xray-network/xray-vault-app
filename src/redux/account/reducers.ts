import { AccountTypes } from "./"
import { getPersistSettings, setPersistSetting } from "@/services/localstorage"
import { LOCAL_STORAGE_PREFIX_GLOBAL } from "@/config"

const LOCAL_STORAGE_PREFIX = LOCAL_STORAGE_PREFIX_GLOBAL + "account."
const setLocalstorage = (key: string, value: any) => {
  setPersistSetting(LOCAL_STORAGE_PREFIX, key, value)
}

const initialState: AccountTypes.ISettings = {
  accountId: undefined,
  selectedPigId: 0,
  isStarredPigSelected: false,
  payPerClickXcoin: 0,
  payPerClickMultiplier: 0,
  locked: false,
  localModel: {
    xcoin: 0,
    levelClicks: 0,
    clicksPigBase: 0,
    clicksPigStarred: 0,
  },
  remoteModel: undefined,
}

export default (
  state: AccountTypes.ISettings = { ...getPersistSettings(LOCAL_STORAGE_PREFIX, initialState) },
  action: AccountTypes.Actions
): AccountTypes.ISettings => {
  switch (action.type) {
    case AccountTypes.Enum.CLEAR:
      return initialState

    case AccountTypes.Enum.ACCOUNT_ID_SET:
      return {
        ...state,
        accountId: action.accountId,
      }

    case AccountTypes.Enum.SELECTED_PIG_ID_SET:
      setLocalstorage("selectedPigId", action.selectedPigId)
      return {
        ...state,
        selectedPigId: action.selectedPigId,
      }

    case AccountTypes.Enum.IS_STARRED_PIG_SELECTED_SET:
      return {
        ...state,
        isStarredPigSelected: action.isStarredPigSelected,
      }

    case AccountTypes.Enum.PAY_PER_CLICK_SET:
      return {
        ...state,
        payPerClickXcoin: action.payPerClickXcoin,
        payPerClickMultiplier: action.payPerClickMultiplier,
      }

    case AccountTypes.Enum.LOCKED_SET:
      setLocalstorage("locked", action.locked)
      return {
        ...state,
        locked: action.locked,
      }

    case AccountTypes.Enum.REMOTE_MODEL_SET:
      return {
        ...state,
        remoteModel: action.remoteModel,
      }

    case AccountTypes.Enum.LOCAL_MODEL_SET:
      return {
        ...state,
        localModel: action.localModel,
      }

    default:
      return state
  }
}
