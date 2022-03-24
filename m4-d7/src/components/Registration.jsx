import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [registration, setRegistration] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmedPassword: '',
  })

  //   const emailValidation = () =>
  //   {
  //     const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //     if (email == validEmail)
  //     {

  //     } else
  //     {

  //   }
  // }

  const navigate = useNavigate()

  const submitRegistration = (e) => {
    e.preventDefault()
    if (registration.password === registration.confirmedPassword) {
      navigate('/')
    } else {
      alert('Password unmatched!')
    }
  }

  return (
    <Form onSubmit={(setRegistration, submitRegistration)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          required
          minlength={2}
          value={registration.name}
          onChange={(e) =>
            setRegistration({
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
          value={registration.surname}
          onChange={(e) =>
            setRegistration({
              ...registration,
              surname: e.target.value,
            })
          }
        />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          value={registration.email}
          onChange={(e) =>
            setRegistration({
              ...registration,
              email: e.target.value,
            })
          }
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          minlength={8}
          value={registration.password}
          onChange={(e) =>
            setRegistration({
              ...registration,
              password: e.target.value,
            })
          }
        />
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm your password"
          required
          value={registration.confirmedPassword}
          onChange={(e) =>
            setRegistration({
              ...registration,
              confirmedPassword: e.target.value,
            })
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Registration
