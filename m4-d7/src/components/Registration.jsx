import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Registration = () => {
  const [registration, setRagistration] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // const [name, setName] = useState('')
  // const [surname, setSurname] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  //   const emailValidation = () =>
  //   {
  //     const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //     if (email == validEmail)
  //     {

  //     } else
  //     {

  //   }
  // }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          required
          minlength={2}
          value="registration.name"
          onchange={(e) =>
            setRagistration({
              ...registration,
              name: e.target.value,
            })
          }
        />
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          required
          minlength={3}
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm your password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Registration
