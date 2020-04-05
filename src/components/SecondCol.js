import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from "@material-ui/icons/Search";
//import DirectionsIcon from "@material-ui/icons/Directions";
import "./Styles/SecondCol.css";

/* eslint-disable no-use-before-define */
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function SecondCol(props) {
  const api = async () => {
    const data = await fetch("https://swapi.co/api/people");
    const data1 = await data.json();
    setdatos(data1.results);
  };
  useEffect(() => {
    api();
    console.log("useefect");
  }, []);

  const [datos, setdatos] = useState([]);
  const [show, setshow] = useState([]);

  const findHandler = (e, value) => {
    console.log(datos);
    
    console.log(value.title);
    console.log(value.name.length) 
    const x = datos.filter((t, index) => (value.name === t.name)); 
    setshow([...show, ...x]);

    console.log(show);
    console.log(x);

    props.callback(x);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="secondcol">
        <Autocomplete
          id="combo-box-demo"
          className={classes.root}
          options={datos}
          getOptionLabel={option => option.name}
          
          style={{ width: 300 }}
          onChange={findHandler }
          renderInput={params => (
            <TextField {...params} label="Personajes"  placeholder="Choose one" variant="outlined"   className="cla"     
            />
          )}
        />
      <div className="divition">
        {show.map((t, index) => (
          <h6 key={index}>{t.name}</h6>
        ))}
        </div>
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    color: "action",
    
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey",
      color: "grey"
      
    },
    "& .hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFE81F",
      color: "#FFE81F"
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFE81F",
      color: "#FFE81F"
    },
    "& .MuiOutlinedInput-root": {
      color: "#FFE81F",
      overflow: "0.5"
    }, "& .forcePopupIcon" :{
      color: "green",
      background: "green"
    }
  }
}));

export default SecondCol;
