export const INCREMENT ='INCREMENT'
export const DECREMENT ='DECREMENT'
export const GETVALUE='GETVALUE'

export function increment () {
  return {
    type: INCREMENT
  }
}

export function decrement () {
  return {
    type: DECREMENT
  }
}

export function getValue(username) {
    return {
      type:GETVALUE,
      username
    }
}