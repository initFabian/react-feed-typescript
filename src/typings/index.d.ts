declare global {
  type UUID = 'UUID'

  interface ErrorItem {
    id: UUID
    message: string
  }

  interface ErrorAction {
    type: string
    payload: string
  }

  interface ErrorStore {
    errors: ErrorItem[]
  }

  interface StateStore extends ErrorStore {}
}
export {}
