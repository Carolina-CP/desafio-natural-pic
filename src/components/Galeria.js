import "../assets/css/galeria.css";

import { useState, useContext } from "react";
import MyContext from "../Context";

import Heart from "./Heart";

export default function Home() {
  const { photos, setPhotos } = useContext(MyContext);
  console.log(`llamo a ${photos} desde galeria`)

  const seleccionar = (id) =>{
    const fotoIndex = photos.findIndex((s)=>s.id ===id)
    photos[fotoIndex].favorito = !photos[fotoIndex].favorito;
    setPhotos([...photos])
    console.log(fotoIndex)
  }

  return (
    <div className="galeria grid-columns-4 p-3">

      {photos.map((item, i) => (
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
  );
}
