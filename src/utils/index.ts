export const amountWithCommas = (number: number | string | bigint): string => {
  const value = number.toString()
  const [integerPart, decimalPart] = value.split(".")
  const integer = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const decimal = decimalPart ? `.${decimalPart}` : ""
  return `${integer}${decimal}`
}

export const amountFormat = (value: number, decimals: number = 6) => {
  const fixedValue = value.toFixed(decimals)
  const [integerPart, decimalPart] = fixedValue.split(".")
  const a = Number(integerPart).toLocaleString("en") || 0
  const b = decimalPart || 0
  const c = `${a}.${b}`

  return { a, b, c }
}

export const amountFormatSplit = (value: number, decimals?: number) => {
  const fixedValue = value.toString()
  const [integerPart, decimalPart] = fixedValue.split(".")
  const a = Number(integerPart).toLocaleString("en") || 0
  const b = decimals ? (decimalPart || 0).toString().padEnd(decimals, "0") : decimalPart || 0
  const c = `${a}.${b}`

  return { a, b, c }
}

// export const amountFormatBigint = (value: bigint, decimals: number, pad?: boolean) => {
//   const integerPart = value.toString().slice(0, -decimals)
//   const decimalPart = value.toString().slice(-decimals)
//   const a = integerPart ? amountWithCommas(integerPart) : "0"
//   const b = pad ? (decimalPart || "0").padStart(decimals, "0") : decimalPart || "0"
//   const c = `${a}.${b}`

//   return { a, b, c }
// }
