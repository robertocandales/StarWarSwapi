import React from "react";
import "./Styles/ThirdCol.css";

function ThirdCol(props) {
  return (
    <React.Fragment>
      <div className="style">
        <div >
          {props.found.map((t, index) => (
            <div key={index} >
              <h2>Nombre: {t.name}</h2>
              <h6>Color de Ojos: {t.eye_color}</h6>
              <h6>Altura: {t.height}cm</h6>
              <h6>Peso: {t.mass}kg</h6>
              <h6>Peliculas en las que Aparecio: </h6>
            </div>
          ))}
        </div>

        <div >
          {props.datosFilms.map((t, index) => (
            <div key={index} >
              <h2>{t.title}</h2>
              <h6>Director: {t.director}</h6>
              <h6>Productor: {t.producer}</h6>
              <h6>Estreno: {t.release_date}</h6>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ThirdCol;
