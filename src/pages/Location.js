import React from "react";
import mapPic from "../images/map-1.png";

const Location = () => {
    return (
        <main style={style.mapCont}>
            <img src={mapPic} alt='Map' style={style.map} />
        </main>
    );
};

export default Location;

const style = {
    mapCont: {
        //border: ".1rem solid red",
        //height: "40%",
        //width: "100%",
    },

    map: {
        height: "100%",
        width: "100%",
    },
};
