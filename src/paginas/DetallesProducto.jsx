import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from 'react-router'

import { buscarProducto } from '../datos/productos.js'

export default function DetalleProducto() {
  const { id } = useParams()
  const navegar = useNavigate()
  const producto = buscarProducto(Number(id))

  if (!producto) {
    return <p>No existe el producto {id}.</p>
  }

  return (
    <>
      <Button variant="outline-secondary" className="mb-3" onClick={() => navegar(-1)}>
        Volver
      </Button>
      <h1 className="h3">{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
    </>
  )
}