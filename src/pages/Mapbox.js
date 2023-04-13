import React from "react";
// import mapboxgl from "mapbox-gl";

const Mapbox = () => {


    return (
        <div>
            <section id='mapContainer'></section>
        </div>
    );
};

export default Mapbox;

//! Mapbox function
// const buildMap = (long, lat) => {
//     mapboxgl.accessToken =
//         process.env.NODE_ENV === "production"
//             ? process.env.API_KEY_MAPBOX
//             : "pk.eyJ1IjoiaGF6ZXk4NyIsImEiOiJjbGFsdzUzYzkwOXBjM3FudGZ1ejUzazdvIn0.vY9_up6mCWaLDl1WuX1eDw";
//     const map = new mapboxgl.Map({
//         container: "mapContainer", // container ID
//         style: "mapbox://styles/hazey87/clalzmyui000j15qr0pb7cicy", // style URL
//         center: [long, lat], // starting position [lng, lat]
//         zoom: 0, // starting zoom
//         projection: "globe", // display the map as a 3D globe
//     });
// };

//! take long / lat from userProfile!
// buildMap(userProfile.longitude, userProfile.longitude);
