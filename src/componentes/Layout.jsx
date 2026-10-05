import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Lo quieres, te lo vendo</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>
              <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1 py-4">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="bg-dark text-white-50 py-3">
        <Container>&copy; 2026 Lo quieres, te lo vendo — Equipo 1</Container>
      </footer>
    </div>
  )
}