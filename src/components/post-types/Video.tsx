import * as React from 'react'
import * as ReactDOM from 'react-dom'

export default (props: PostProps) => (
  <iframe style={{ borderWidth: 0 }} src={props.body} allowFullScreen />
)
