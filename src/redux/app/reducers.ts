import { AppTypes } from "."
import { getPersistSettings, setPersistSetting } from "@/services/localstorage"
import { LOCAL_STORAGE_PREFIX_GLOBAL } from "@/config"

const LOCAL_STORAGE_PREFIX = LOCAL_STORAGE_PREFIX_GLOBAL + "app."
const setLocalstorage = (key: string, value: any) => {
  setPersistSetting(LOCAL_STORAGE_PREFIX, key, value)
}

const initialState: AppTypes.ISettings = {
  loaded: false,
  locked: false,
  cookiesViewed: false,
  theme: "default",
  scale: "default",
  launchParams: undefined,
  modalAccount: false,
  modalBoost: false,
  modalUnlock: {
    opened: false,
    id: -1,
  },
  soundMusic: true,
  soundEffects: true,
  hapticFeedback: true,
  confettiEffect: true,
}

export default (
  state: AppTypes.ISettings = { ...getPersistSettings(LOCAL_STORAGE_PREFIX, initialState) },
  action: AppTypes.Actions
): AppTypes.ISettings => {
  switch (action.type) {
    case AppTypes.Enum.CLEAR:
      return initialState

    case AppTypes.Enum.LOADED_SET:
      return { ...state, loaded: action.loaded }

    case AppTypes.Enum.LOCK_SET:
      return { ...state, locked: action.locked }

    case AppTypes.Enum.COOKIES_VIEWED_SET:
      setLocalstorage("cookiesViewed", action.cookiesViewed)
      return { ...state, cookiesViewed: action.cookiesViewed }

    case AppTypes.Enum.THEME_SET:
      setLocalstorage("theme", action.theme)
      return { ...state, theme: action.theme }

    case AppTypes.Enum.SCALE_SET:
      setLocalstorage("scale", action.scale)
      return { ...state, scale: action.scale }

    case AppTypes.Enum.TG_LAUNCH_PARAMS_SET:
      return {
        ...state,
        launchParams: action.launchParams,
      }

    case AppTypes.Enum.MODAL_ACCOUNT_SET:
      return { ...state, modalAccount: action.modalAccount }

    case AppTypes.Enum.MODAL_BOOST_SET:
      return { ...state, modalBoost: action.modalBoost }

    case AppTypes.Enum.MODAL_UNLOCK_SET:
      return {
        ...state,
        modalUnlock: {
          opened: action.opened,
          id: action.id,
        },
      }

    case AppTypes.Enum.SOUND_MUSIC_SET:
      setLocalstorage("soundMusic", action.soundMusic)
      return { ...state, soundMusic: action.soundMusic }

    case AppTypes.Enum.SOUND_EFFECTS_SET:
      setLocalstorage("soundEffects", action.soundEffects)
      return { ...state, soundEffects: action.soundEffects }

    case AppTypes.Enum.HAPTIC_FEEDBACK_SET:
      setLocalstorage("hapticFeedback", action.hapticFeedback)
      return { ...state, hapticFeedback: action.hapticFeedback }

    case AppTypes.Enum.CONFETTI_EFFECT_SET:
      setLocalstorage("confettiEffect", action.confettiEffect)
      return { ...state, confettiEffect: action.confettiEffect }

    default:
      return state
  }
}
