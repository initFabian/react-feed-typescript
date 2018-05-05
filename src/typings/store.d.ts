declare global {
  interface Post {
    id: UUID
    title: string
    type: PostType
    body: string
    liked: boolean
  }

  interface ErrorItem {
    id: UUID
    message: string
  }

  interface ErrorStore {
    errors: ErrorItem[]
  }

  interface PostStore {
    feed: Post[]
  }

  interface FilterStore {
    filter: PostType
  }

  interface StateStore extends ErrorStore, PostStore, FilterStore {}
}
export {}
