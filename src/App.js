import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Characters } from "./components/Characters";
import { Pagination } from "./components/Pagination";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url) //llamada a la API, el resultado es una promise
      .then((response) => response.json()) //cuando la petición finalice, se transforma la respuesta a JSON (response.json() también es una promise)
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      }) //acá ya está la respuesta en formato objeto
      .catch((error) => console.log(error))
  }

  const onPrev = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  //obtención de los datos
  useEffect(() => { //fc que se ejecuta luego de haber renderizado el componente
    fetchCharacters(initialUrl);
  }, []) //segundo argumento =  arreglo vacío. objetivo: ejecutar el efecto (llamada a la API) una sola vez (luego del primer renderizado). sino cada vez que se renderice el componente se volverá a ejecutar el useEffect

  return (
    <div>
      <Navbar brand={"Rick & Morty APP"} />
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
