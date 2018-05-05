declare global {
  type UUID = 'UUID'

  interface PostInterface {
    title: string
    type: 'All' | 'Text' | 'Video' | 'Image'
    body: string
  }

  interface PostProps {
    body: string
  }
}
export {}
