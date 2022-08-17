import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import "../styles/components/Banner.scss";
import "../styles/variables.scss";


function Banner() {
  return (
    <div className="Banner">
      <div class="Banner-letter">
      <h1><strong>As melhores guias</strong></h1>
      <h1><strong>para os melhores</strong></h1>
      <h1><strong>passeios.</strong></h1>
      <button>CONFIRA</button>
      </div>
    </div>
  );
}

export default Banner
