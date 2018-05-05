import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => (
  <iframe style={{ borderWidth: 0 }} src={props.body} allowFullScreen />
)
