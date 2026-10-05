import { useLocation } from 'react-router'

export default function NoEncontrada() {
  const ubicacion = useLocation()
  return (
    <>
      <h1 className="h3">Página no encontrada</h1>
      <p>No encontramos nada en <code>{ubicacion.pathname}</code></p>
    </>
  )
}