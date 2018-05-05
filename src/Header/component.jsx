import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form, FormGroup, Col } from 'react-bootstrap'
import FilterContainer from '../Filter/container'
import PostRadioComponent from '../components/form-components/RadioGroup'
import PostTextFieldComponent from '../components/form-components/TextFieldGroup'

export default (props) => {
  let titleInputRef = null
  let bodyInputRef = null
  let postType = 'text'

  const titleTextFieldRef = (input) => {
    titleInputRef = input
  }

  const descriptionTextFieldRef = (input) => {
    bodyInputRef = input
  }

  const updateTypeHandler = (value) => {
    postType = value
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    if (!titleInputRef.value) return

    props.onAddPost({
      title: titleInputRef.value,
      type: postType,
      body: bodyInputRef.value
    })

    titleInputRef.value = ''
    bodyInputRef.value = ''
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
          defaultValue={'text'}
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
