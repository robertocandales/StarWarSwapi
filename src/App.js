import React, { useState } from "react";
// import GetApi from "./GetApi";
import CssBaseline from "@material-ui/core/CssBaseline";
import FirstCol from "./components/FirstCol";
import SecondCol from "./components/SecondCol";
import SecondCol1 from "./components/SecondCol1";
import ThirdCol from "./components/ThirdCol";
import "./components/Styles/App.css";

//

function App(props) {
  const api = data => {
    setdatos(data);
  };

  const apiFilms = dataFilms => {
    setdatosFilms(dataFilms);
  };

  const [datos, setdatos] = useState([]);
  const [datosFilms, setdatosFilms] = useState([]);
  const [click, setclick] = useState(true);
  const [click1, setclick1] = useState(false);

  const buton = boton => {
    setclick1(!boton);
    setclick(boton);
    setdatosFilms([]);
    // console.log(boton)
    // console.log(click)
    // console.log(click1)
  };

  const buton1 = boton1 => {
    setclick(!boton1);
    setclick1(boton1);
    setdatos([]);
    // console.log(click)
    // console.log(click1)
  };

  return (
    <React.Fragment>
      <div className="background">
        <CssBaseline />
        <h1 className="title">Sirena´s Test</h1>
        <div className="s">
          <div className="a">
            <FirstCol buton={buton} buton1={buton1} />
          </div>
          <div className="a">
            {click ? (
              <SecondCol callback={api} />
            ) : click1 ? (
              <SecondCol1 callback1={apiFilms} />
            ) : null}
          </div>

          <div className="a">
            <ThirdCol found={datos} datosFilms={datosFilms} />
          </div>
        </div>


        
      </div>
    </React.Fragment>
  );
}

export default App;
