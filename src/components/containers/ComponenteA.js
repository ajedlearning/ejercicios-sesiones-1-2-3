import React from 'react'

import {Contacto} from '../../models/Contacto'
import ComponenteB from '../pures/ComponenteB';

const ComponenteA = () => {
    const defaultContacto = new Contacto(
        "Arnaldo", "Espinoza", "aespinoza@hotmail.com", false
    );
  return (

    <div>
        <ComponenteB contacto={defaultContacto} />
    </div>
  )
}



export default ComponenteA