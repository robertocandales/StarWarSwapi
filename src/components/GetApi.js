import React, { useState, useEffect } from "react";

function GetApi(props) {
  const api = async () => {
    const data = await fetch("https://swapi.co/api/people");
    const data1 = await data.json();
    setdatos(data1.results);
  };

  const [datos, setdatos] = useState([]);

  useEffect(() => {
    api();
  }, []);

  const info = () => {
    props.callback(datos);
  };

  return <div>{info()}</div>;
}

export default GetApi;
