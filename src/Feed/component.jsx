import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'
import { Col } from 'react-bootstrap'

export default (props) => {
  const posts = props.posts.map((post) => {
    const { onPostLike, onRemovePost } = props
    const postProps = {
      key: post.id,
      onRemovePost,
      onPostLike,
      post
    }
    return <Post {...postProps} />
  })

  return (
    <Col xs={12} style={{ marginTop: 20 }}>
      <div className="media">{posts}</div>
    </Col>
  )
}
