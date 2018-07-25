import React from 'react';
import { Form, Input, TextArea, Button, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const Contact = () => (
  <MainHeader>
    <Headerr>Contact Me</Headerr>
    <Divider hidden/>
    <FormStyle>
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        id='form-input-control-email'
        control={Input}
        label='Email'
        placeholder='Email'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Write Message Here'
      placeholder='Message'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Send'
    />
  </Form>
    </FormStyle>
  </MainHeader>
)

const MainHeader = styled.div`
background-image: url(https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-0.3.5&s=a897e129ede506cdc32c4a251acb6eb1&auto=format&fit=crop&w=1672&q=80);
background-size: cover;
background-position: center center;
background-repeat: no-repeat; 
height: 750px;
display: flex;
overflow: scroll;
`

const Headerr = styled.h1`
  position: absolute;
  left: 40%;
  top: 5%;
  text-align: center;
  padding-top: 20px;
  font-size: 75px;
  color: black;
  font-family: 'Crete Round', serif;
`

const FormStyle = styled.div`
  align-items: center;
  padding-left: 600px;
  display: flex;
`

export default Contact;
