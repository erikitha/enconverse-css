import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import "./styles/components/Categorias.scss"


function Categorias() {
  return (

    <div className="Categorias">
        <h2>Categorias</h2>

        <div className="img-categoria">
          <figure>
          <img src="./src/img/Maskgroup-1.png" alt="Girl in a jacket"></img>
          <figcaption>Brinquedos</figcaption>
          </figure>
          <figure>
          <img src="./src/img/Maskgroup-2.png" alt="Girl in a jacket"></img>
          <figcaption>Petiscos</figcaption>
          </figure>
          <figure>
          <img src="./src/img/Maskgroup-3.png" alt="Girl in a jacket"></img>
          <figcaption>Guias</figcaption>
          </figure>
          <figure>
          <img src="./src/img/Maskgroup-4.png" alt="Girl in a jacket"></img>
          <figcaption>Higiene</figcaption>
          </figure>
        </div>
      
    </div>

  );
}

export default Categorias
