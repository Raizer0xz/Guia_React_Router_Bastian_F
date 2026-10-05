import { NavLink } from 'react-router'

export default function BarraNavegacion() {
  return (
    <nav>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/catalogo">Catálogo</NavLink>
      <NavLink to="/nosotros">Nosotros</NavLink>
    </nav>
  )
}