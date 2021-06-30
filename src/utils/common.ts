import unfetch from 'isomorphic-unfetch'

export const isGenericInputValidated = (type: string, value: string, maxLength: number): boolean => {
  const numberRegExp = new RegExp(`^[0-9]{1,${maxLength}}$`)

  if (type === 'number' && !numberRegExp.test(value)) { return false }

  if (value.length > maxLength) { return false }

  return true
}

export const requestThroughProxy = (url: string) => {
  return `https://cors-anywhere.herokuapp.com/${url}`
}

export const debounce = (fn: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout

  return (...args: any[]) => {
    const later = () => {
      clearTimeout(timeout)
      fn(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const isServer = () => typeof window === 'undefined'
