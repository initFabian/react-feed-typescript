import React from 'react'
import ReactDOM from 'react-dom'
import TextPost from '../../components/post-types/Text'
import VideoPost from '../../components/post-types/Video'
import ImagePost from '../../components/post-types/Image'

export default (props) => {
  const { post } = props
  switch (post.type) {
    case 'text':
      return <TextPost {...post} />
    case 'video':
      return <VideoPost {...post} />
    case 'image':
      return <ImagePost {...post} />
  }
}
