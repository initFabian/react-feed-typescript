declare global {
  interface IPost {
    id: UUID
    title: string
    type: PostType
    body: string
    liked: boolean
  }

  interface IErrorItem {
    id: UUID
    message: string
  }

  interface IErrorStore {
    errors: IErrorItem[]
  }

  interface IPostStore {
    feed: IPost[]
  }

  interface IFilterStore {
    filter: PostType
  }

  interface IStateStore extends IErrorStore, IPostStore, IFilterStore {}
}
export {}
