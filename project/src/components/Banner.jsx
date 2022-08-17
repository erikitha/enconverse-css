import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import "../styles/variables.scss"
import "../styles/components/Banner.scss"
import "../styles/components/Navbar.scss"
import "../styles/components/Categorias.scss"

function Banner() {
  return (
    <div className="Banner">
      <div className="Banner-letter">
        <h1><strong>As melhores guias</strong></h1>
        <h1><strong>para os melhores</strong></h1>
        <h1><strong>passeios.</strong></h1>
        <button>CONFIRA</button>
      </div>
      <FontAwesomeIcon icon={ faAngleLeft } className="back-left" />
      <FontAwesomeIcon icon={ faAngleRight } className="foward-right" />


    </div>
  );
}

export default Banner
