import { AppTypes } from "."

export function CLEAR(): AppTypes.AClear {
  return { type: AppTypes.Enum.CLEAR }
}

export function INIT_APP(): AppTypes.AInitApp {
  return { type: AppTypes.Enum.INIT_APP }
}

export function LOCK_SET(locked: boolean): AppTypes.ALockSet {
  return { type: AppTypes.Enum.LOCK_SET, locked }
}

export function LOADED_SET(loaded: boolean): AppTypes.ALoadedSet {
  return { type: AppTypes.Enum.LOADED_SET, loaded }
}

export function COOKIES_VIEWED_SET(cookiesViewed: boolean): AppTypes.ACookiesViewedSet {
  return { type: AppTypes.Enum.COOKIES_VIEWED_SET, cookiesViewed }
}

export function THEME_SET(theme: AppTypes.Theme): AppTypes.AThemeSet {
  return { type: AppTypes.Enum.THEME_SET, theme }
}

export function THEME_UPDATE_SAGA(theme: AppTypes.Theme): AppTypes.AThemeUpdateSaga {
  return { type: AppTypes.Enum.THEME_UPDATE_SAGA, theme }
}

export function SCALE_SET(scale: AppTypes.Scale): AppTypes.AScaleSet {
  return { type: AppTypes.Enum.SCALE_SET, scale }
}

export function SCALE_UPDATE_SAGA(scale: AppTypes.Scale): AppTypes.AScaleUpdateSaga {
  return { type: AppTypes.Enum.SCALE_UPDATE_SAGA, scale }
}

export function TG_LAUNCH_PARAMS_SET(launchParams: AppTypes.ILaunchParams): AppTypes.ATgLaunchParamsSet {
  return { type: AppTypes.Enum.TG_LAUNCH_PARAMS_SET, launchParams }
}

export function MODAL_ACCOUNT_SET(modalAccount: boolean): AppTypes.AModalAccountSet {
  return { type: AppTypes.Enum.MODAL_ACCOUNT_SET, modalAccount }
}

export function MODAL_BOOST_SET(modalBoost: boolean): AppTypes.AModalBoostSet {
  return { type: AppTypes.Enum.MODAL_BOOST_SET, modalBoost }
}

export function MODAL_UNLOCK_SET(opened: boolean, id: number): AppTypes.AModalUnlockSet {
  return { type: AppTypes.Enum.MODAL_UNLOCK_SET, opened, id }
}

export function SOUND_MUSIC_SET(soundMusic: boolean): AppTypes.ASoundMusicSet {
  return { type: AppTypes.Enum.SOUND_MUSIC_SET, soundMusic }
}

export function SOUND_EFFECTS_SET(soundEffects: boolean): AppTypes.ASoundEffectsSet {
  return { type: AppTypes.Enum.SOUND_EFFECTS_SET, soundEffects }
}

export function HAPTIC_FEEDBACK_SET(hapticFeedback: boolean): AppTypes.AHapticFeedbackSet {
  return { type: AppTypes.Enum.HAPTIC_FEEDBACK_SET, hapticFeedback }
}

export function CONFETTI_EFFECT_SET(confettiEffect: boolean): AppTypes.AConfettiEffectSet {
  return { type: AppTypes.Enum.CONFETTI_EFFECT_SET, confettiEffect }
}
