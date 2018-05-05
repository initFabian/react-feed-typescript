declare global {
  interface Post {
    id: UUID
    title: string
    type: 'All' | 'Text' | 'Video' | 'Image'
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
    filter: 'All' | 'Text' | 'Video' | 'Image'
  }

  interface StateStore extends ErrorStore, PostStore, FilterStore {}
}
export {}
