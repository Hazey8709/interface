import React, { useState } from "react";
//import ChartHorz from "../components/charts/ChartHorz";
//import ChartSmall from "../components/charts/ChartSmall";

function Dashboard() {
    //const [chartHorz] = useState([{ chartHeader: "Website Monthly View's" }]);

    //const [chartSmall] = useState([{ chartHeader: "Monthly Visits/Sales" }]);

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
        // <section style={style.dashCont}>
        //     <h1 style={style.dashTitle}>Dashboard</h1>

        //     <div style={style.chartHorz}>
        //         {chartHorz.map((chartHorz, id) => (
        //             <ChartHorz Key={id} id={id} chartHorz={chartHorz} />
        //         ))}
        //     </div>
        //     <div style={style.chartSmall}>
        //         {chartSmall.map((chartSmall, id) => (
        //             <ChartSmall Key={id} id={id} chartSmall={chartSmall} />
        //         ))}
        //     </div>
        // </section>
    );
}

export default Dashboard;

const style = {
    dashCont: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "100%",
        width: "100%",
    },

    dashTitle: {
        textAlign: "center",
        fontSize: "3rem",
        textDecoration: "underline",
        color: "white",
    },
};
