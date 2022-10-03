import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//componentes
import Navbar from "./components/Navbar";

// vistas
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

//Hooks
import { useState, useEffect, useContext } from "react";
import MyContext from "./Context";

export default function App() {
  const endpoint = "/fotos.json";

  // definimos un estado para la API y una variable global para compartir el estado a los otros componentes
  const [photos, setPhotos] = useState([]);
  const estadoGlobal = { photos, setPhotos };

  //Función que consulta la API
  const consultarInformacion = async () => {
    const response = await fetch(endpoint)
    let {photos} = await response.json()
    photos = photos.map((item) => ({
      id: item.id,
      src: item.src.tiny,
      text: item.alt,
      favorito: item.liked
    }))
    setPhotos(photos)
    console.log(photos)
    console.log('esta funcionando')
  };

  //llamamos a la Api al momento de la carga
  useEffect(() => {
    consultarInformacion();
  }, []);

  return (
    <div className="App">
      <MyContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
