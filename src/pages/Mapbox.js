import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
    "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsd2Izd2swOWU2M3dwdzJ4YTlmd3kwIn0.Qx7PjlOyLEJpRlhAMsj6XQ";

//! old key
// "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsdzUzYzkwOXBjM3FudGZ1ejUzazdvIn0.vY9_up6mCWaLDl1WuX1eDw";

const Mapbox = () => {
    const [viewState, setViewState] = React.useState({
        latitude: 42.355,
        longitude: -71.062,
        zoom: 7, // starting zoom
        projection: "globe", // display the map as a 3D globe
    });

    return (
        <main style={style.mainCont}>
            <Map
                {...viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                mapStyle='mapbox://styles/hazey87/clalzkem2003c14qp5ax1x6k4'
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                <Marker longitude={-71.062} latitude={42.355} color='red' />
            </Map>
        </main>
    );
};

export default Mapbox;

const style = {
    mainCont: {
        //border: ".1rem solid red",
        height: "100%",
        width: "100%",
        backgroundColor: "#d1edf7",
    },
};
