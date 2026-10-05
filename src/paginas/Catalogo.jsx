
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import TarjetaProducto from '../componentes/TarjetaProducto.jsx'
import { productos } from '../datos/productos.js'

export default function Catalogo() {
  return (
    <>
      <h1 className="h3 mb-3">Catálogo</h1>
      <Row xs={1} sm={2} lg={3} className="g-3">
        {productos.map((item) => (
          <Col key={item.id}>
            <TarjetaProducto producto={item} />
          </Col>
        ))}
      </Row>
    </>
  )
}