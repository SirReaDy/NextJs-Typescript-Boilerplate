export type Action<P> = {
  type: string
  payload: P | undefined
}

export type AnyAction = Action<any>