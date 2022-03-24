import {
  Navbar,
  Form,
  Button,
  Nav,
  FormControl,
  Container,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const MyNavbar = () => {
  const location = useLocation()

  return (
    <Container fluid className="px-0">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/">
          <Navbar.Brand>Strivebook</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <div
                className={
                  location.pathname === '/' ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </div>
            </Link>
            <Link to="/register">
              <div
                className={
                  location.pathname === '/register'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Register
              </div>
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default MyNavbar
