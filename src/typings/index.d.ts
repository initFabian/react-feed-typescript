declare global {
  type UUID = 'UUID'

  interface PostInterface {
    title: string
    type: PostType
    body: string
  }

  interface PostProps {
    body: string
  }
}
export {}
