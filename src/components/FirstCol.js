import React, { useState } from "react";

//import from MaterialUI
//import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url: "https://wallpapercave.com/wp/00qMahP.jpg",
    title: "Personajes",
    width: "50%"
  }
];

const images1 = [
  {
    url:
      "https://www.solofondos.com/wp-content/uploads/2016/03/Download-Star-Wars-Images-HD-Wallpaper-1080x607.jpg",
    title: "Peliculas",
    width: "50%"
  }
];

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: "8px",
    padding: "2px 2px",
    color: "yellow",
    background: "black"
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    marginTop: 20,

    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.1
      },
      "& $imageMarked": {
        opacity: 1
      },
      "& $imageTitle": {
        border: "1px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left:0,
    right: 0,
    top: 10,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 1%",
    borderRadius: "50%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
    color: "#FFE81F"
  },
  imageMarked: {
    height: 3,
    width: 12,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

function FirstCol(props) {
  const [buton, setbuton] = useState(true);
  const [buton1, setbuton1] = useState(true);

  const click = e => {
    e.preventDefault();
    setbuton(true);
    //setbuton1(false)
    props.buton(buton);
  };
  const click1 = e => {
    e.preventDefault();
    setbuton1(true);
    // setbuton(false)
    props.buton1(buton1);
  };

  const classes = useStyles();
  return (
    <div>
      <div className="container row">
        <div className="col-sm-6 ">
          <div className={classes.root}>
            {images.map(image => (
              <ButtonBase
                onClick={click}
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
        </div>

        <div className="col-sm-6">
          <div className={classes.root}>
            {images1.map(image => (
              <ButtonBase
                onClick={click1}
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCol;
