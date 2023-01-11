import React from 'react'
import PropTypes from 'prop-types'
import {Contacto} from '../../models/Contacto'

const ComponenteB = ({contacto}) => { 
  return (
    <div>
     <ul>
      <li>Nombre: {contacto.name}</li>
      <li>Apellido: {contacto.lastName}</li>
      <li>Email: {contacto.email}</li>
      <li>Conectado: {contacto.connected ? 'On line' : 'Off Line'}</li>
     </ul>
     </div>
  )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
}

export default ComponenteB