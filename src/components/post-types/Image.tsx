import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Thumbnail } from 'react-bootstrap'

export default (props: IPostProps) => <Thumbnail src={props.body} style={{ border: 0 }} />
