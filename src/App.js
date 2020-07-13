import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"


// 



// http://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=65aa04c461fe4a559ad97026be3bc81d

function App() {

  const[categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([])


  useEffect (() =>{
    const consultarApi = async () =>{
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=65aa04c461fe4a559ad97026be3bc81d`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles);
    }
    consultarApi()
  }, [categoria])
  
  return (
    <Fragment >
      <Header 
        titulo="Buscador de Noticias"
      />

        <div className="container  white">
          <Formulario 
            guardarCategoria= {guardarCategoria}
          />  

          <ListadoNoticias 
            noticias = {noticias}
          />
        </div>
    </Fragment>
  );
}

export default App;
