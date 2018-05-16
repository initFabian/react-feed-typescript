import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Post from './Post'
import { Col } from 'react-bootstrap'

interface IFeedComponentProps extends IPostStore {
  onRemovePost(id: UUID): void
  onPostLike(id: UUID): void
}

export default (props: IFeedComponentProps) => {
  const posts = props.feed.map((post) => {
    const { onPostLike, onRemovePost } = props
    const postProps = {
      onRemovePost,
      onPostLike,
      post
    }
    return <Post key={post.id} {...postProps} />
  })

  return (
    <Col xs={12} style={{ marginTop: 20 }}>
      <div className="media">{posts}</div>
    </Col>
  )
}
