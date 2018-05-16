import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button, Form, FormGroup, Col } from 'react-bootstrap'
import FilterContainer from '../Filter/container'
import PostRadioComponent from '../components/form-components/RadioGroup'
import PostTextFieldComponent from '../components/form-components/TextFieldGroup'

interface IHeaderComponentProps {
  onAddPost(post: IPostInterface): void
}

export default (props: IHeaderComponentProps) => {
  let titleInputRef: HTMLInputElement
  let bodyInputRef: HTMLInputElement
  let postType: PostType = PostType.Text

  const titleTextFieldRef = (ref: HTMLInputElement) => {
    titleInputRef = ref
  }

  const descriptionTextFieldRef = (ref: HTMLInputElement) => {
    bodyInputRef = ref
  }

  const updateTypeHandler = (value: PostType) => {
    postType = value
  }

  const submitFormHandler = (e: React.FormEvent<Event>) => {
    e.preventDefault()
    if (!titleInputRef.value) return

    props.onAddPost({
      title: titleInputRef.value,
      type: postType,
      body: bodyInputRef.value
    })

    titleInputRef.value = ''
    bodyInputRef.value = ''
    postType = PostType.Text
  }

  return (
    <Col>
      <Form horizontal onSubmit={submitFormHandler.bind(this)}>
        <PostTextFieldComponent
          fieldLabel={'Title'}
          placeholder="Title"
          bindingRef={titleTextFieldRef}
        />
        <PostTextFieldComponent
          fieldLabel={'Body'}
          placeholder={'Description or Links...'}
          bindingRef={descriptionTextFieldRef}
        />
        <PostRadioComponent
          defaultValue={postType}
          changeHandler={updateTypeHandler.bind(this)}
        />
        <FormGroup>
          <Col xs={12}>
            <Button bsStyle="success" type="submit" className="pull-right">
              Create
            </Button>
          </Col>
        </FormGroup>
      </Form>
      <h1 style={{ textAlign: 'center' }}>Feed</h1>
      <FilterContainer />
    </Col>
  )
}
