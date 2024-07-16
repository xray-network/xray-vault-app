import store from "store"

export const getPersistSettings = (prefix: string, storedSettings: any) => {
  const settings: any = {}
  Object.keys(storedSettings).forEach((key) => {
    settings[key] = store.get(`${prefix}${key}`, storedSettings[key])
  })
  return settings
}

export const setPersistSetting = (prefix: string, key: string, value: any) => {
  store.set(`${prefix}${key}`, value)
}
