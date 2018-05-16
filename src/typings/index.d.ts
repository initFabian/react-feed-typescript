declare global {
  type UUID = 'UUID'

  interface IPostInterface {
    title: string
    type: PostType
    body: string
  }

  interface IPostProps {
    body: string
  }
}
export {}
