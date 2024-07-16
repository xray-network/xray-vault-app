import { LaunchParams } from "@tma.js/sdk-react"

/**
 * App Types
 */
export interface ILaunchParams extends LaunchParams {}
export type Theme = "default" | "dark"
export type Scale = "small" | "default" | "large" | "xlarge"

export interface ISettings {
  loaded: boolean
  locked: boolean
  launchParams: ILaunchParams | undefined
  cookiesViewed: boolean
  theme: Theme
  scale: Scale
  modalAccount: boolean
  modalBoost: boolean
  modalUnlock: {
    opened: boolean
    id: number
  }
  soundMusic: boolean
  soundEffects: boolean
  hapticFeedback: boolean
  confettiEffect: boolean
}

/**
 * App Actions
 */

export enum Enum {
  CLEAR = "app/CLEAR",
  INIT_APP = "app/INIT_APP",

  LOADED_SET = "app/LOADED_SET",
  LOCK_SET = "app/LOCK_SET",
  COOKIES_VIEWED_SET = "app/COOKIES_VIEWED_SET",
  THEME_SET = "app/THEME_SET",
  THEME_UPDATE_SAGA = "app/THEME_UPDATE_SAGA",
  SCALE_SET = "app/SCALE_SET",
  SCALE_UPDATE_SAGA = "app/SCALE_UPDATE_SAGA",
  TG_LAUNCH_PARAMS_SET = "app/TELEGRAM_CONFIG_SET",
  MODAL_ACCOUNT_SET = "app/MODAL_ACCOUNT_SET",
  MODAL_BOOST_SET = "app/MODAL_BOOST_SET",
  MODAL_UNLOCK_SET = "app/MODAL_UNLOCK_SET",
  SOUND_MUSIC_SET = "app/SOUND_MUSIC_SET",
  SOUND_EFFECTS_SET = "app/SOUND_EFFECTS_SET",
  HAPTIC_FEEDBACK_SET = "app/HAPTIC_FEEDBACK_SET",
  CONFETTI_EFFECT_SET = "app/CONFETTI_EFFECT_SET",
}

export type AClear = {
  type: typeof Enum.CLEAR
}

export type AInitApp = {
  type: typeof Enum.INIT_APP
}

export type ALoadedSet = {
  type: typeof Enum.LOADED_SET
  loaded: boolean
}

export type ALockSet = {
  type: typeof Enum.LOCK_SET
  locked: boolean
}

export type ACookiesViewedSet = {
  type: typeof Enum.COOKIES_VIEWED_SET
  cookiesViewed: boolean
}

export type AThemeSet = {
  type: typeof Enum.THEME_SET
  theme: Theme
}

export type AThemeUpdateSaga = {
  type: typeof Enum.THEME_UPDATE_SAGA
  theme: Theme
}

export type AScaleSet = {
  type: typeof Enum.SCALE_SET
  scale: Scale
}

export type AScaleUpdateSaga = {
  type: typeof Enum.SCALE_UPDATE_SAGA
  scale: Scale
}

export type ATgLaunchParamsSet = {
  type: typeof Enum.TG_LAUNCH_PARAMS_SET
  launchParams: ILaunchParams
}

export type AModalAccountSet = {
  type: typeof Enum.MODAL_ACCOUNT_SET
  modalAccount: boolean
}

export type AModalBoostSet = {
  type: typeof Enum.MODAL_BOOST_SET
  modalBoost: boolean
}

export type AModalUnlockSet = {
  type: typeof Enum.MODAL_UNLOCK_SET
  opened: boolean
  id: number
}

export type ASoundMusicSet = {
  type: typeof Enum.SOUND_MUSIC_SET
  soundMusic: boolean
}

export type ASoundEffectsSet = {
  type: typeof Enum.SOUND_EFFECTS_SET
  soundEffects: boolean
}

export type AHapticFeedbackSet = {
  type: typeof Enum.HAPTIC_FEEDBACK_SET
  hapticFeedback: boolean
}

export type AConfettiEffectSet = {
  type: typeof Enum.CONFETTI_EFFECT_SET
  confettiEffect: boolean
}

export type Actions =
  | AClear
  | AInitApp
  | ALoadedSet
  | ALockSet
  | ATgLaunchParamsSet
  | ACookiesViewedSet
  | AThemeSet
  | AThemeUpdateSaga
  | AScaleSet
  | AScaleUpdateSaga
  | AModalAccountSet
  | AModalBoostSet
  | AModalUnlockSet
  | ASoundMusicSet
  | ASoundEffectsSet
  | AHapticFeedbackSet
  | AConfettiEffectSet
