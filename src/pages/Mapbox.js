import React from "react";
import mapboxgl from "mapbox-gl";

const Mapbox = () => {
    const buildMap = () => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsdzUzYzkwOXBjM3FudGZ1ejUzazdvIn0.vY9_up6mCWaLDl1WuX1eDw";
        const map = new mapboxgl.Map({
            container: "mapContainer", // container ID
            style: "mapbox://styles/hazey87/clalzmyui000j15qr0pb7cicy", // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
            projection: "globe", // display the map as a 3D globe
        });
    };

    //buildMap();

    return <div></div>;
};

export default Mapbox;
