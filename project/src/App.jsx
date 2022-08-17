import Banner from './components/Banner.jsx';
import Navbar from './components/Navbar.jsx';
import Categorias from './components/Categorias.jsx';


function App() {
  return (
    <div className="App">
      {/* <h1>REACT + scss</h1> */}
      <Navbar/>
      <Banner/>
      <Categorias/>

      {/*
      <Banner/>

      <MeuCachorro/>
      <Marcas/>
      <Parceiros/>
      <Blog/>
      <Instagram/>
      <Subscribe/>
      <Footer/> */}
    </div>
  );
}

export default App
