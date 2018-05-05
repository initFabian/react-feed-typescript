import * as React from 'react'
import * as ReactDOM from 'react-dom'
import TextPost from '../../components/post-types/Text'
import VideoPost from '../../components/post-types/Video'
import ImagePost from '../../components/post-types/Image'

interface ItemFactoryProps {
  post: Post
}

export default (props: ItemFactoryProps): JSX.Element => {
  const { post } = props
  switch (post.type) {
    case PostType.Text:
      return <TextPost {...post} />
    case PostType.Video:
      return <VideoPost {...post} />
    case PostType.Image:
      return <ImagePost {...post} />
    default:
      return <div />
  }
}
