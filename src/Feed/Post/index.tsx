import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Media } from 'react-bootstrap'
import PostFactory from './PostFactory'

interface IPostProps {
  post: IPost
  onRemovePost(id: UUID): void
  onPostLike(id: UUID): void
}

export default (props: IPostProps) => {
  const { post } = props
  const likeHandler = (e: Event) => {
    e.preventDefault()
    props.onPostLike(post.id)
  }

  const onRemoveHandler = () => props.onRemovePost(post.id)

  const trashCanIcon = (
    <a
      href="#"
      className="pull-right"
      style={{ color: '#60676f', fontSize: '0.95em' }}
      onClick={onRemoveHandler.bind(this)}
    >
      <span className="glyphicon glyphicon-trash" />
    </a>
  )

  const likeStyle = {
    color: post.liked ? '#3d7dfb' : '#60676f'
  }

  return (
    <Media>
      <Media.Body>
        <Media.Heading>
          {post.title} {trashCanIcon}
        </Media.Heading>
        <PostFactory post={post} />
        <p>
          <a href="#" style={likeStyle} onClick={likeHandler.bind(this)}>
            <span className={'glyphicon glyphicon-thumbs-up'} /> Like
          </a>
        </p>
      </Media.Body>
    </Media>
  )
}
