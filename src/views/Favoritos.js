import react, { useState } from "react";
import { useContext } from "react";
import MyContext from "../Context";
import Heart from "../components/Heart"

export default function Favoritos() {
  const { photos, setPhotos } = useContext(MyContext)
  console.log(`llamo a ${photos.id} desde favoritos`)

  // estado para oir el clik en Heart
  //const [clik, setclick] = useState('')
  
  const seleccionar = (id) =>{
    const fotoIndex = photos.findIndex((s)=>s.id ===id)
    photos[fotoIndex].favorito = !photos[fotoIndex].favorito;
    setPhotos([...photos])
  }

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {photos.filter ((item) => item.favorito)
       .map((item,i) =>(
        <div
          style={{ backgroundImage: `url(${item.src})` }}
          className='foto'
          key={i}
        >
          <p>{item.text}</p>
          <Heart
            onClick={() => setPhotos(item.id)}
            filled={item.favorito}
          />

        </div>
        
       ))}
      </div>
    </div>
  );
}
