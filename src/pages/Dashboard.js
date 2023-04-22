import React, { useState } from "react";
import ChartHorz from "../components/chartsComp/ChartHorz";
import ChartSmall from "../components/chartsComp/ChartSmall";

function Dashboard() {
    const [chartHorz] = useState([{ chartHeader: "Website Monthly View's" }]);

    const [chartSmall] = useState([{ chartHeader: "Monthly Visits/Sales" }]);

    return (
        <section style={style.dashCont}>
            <h1 style={style.dashTitle}>Dashboard</h1>

            <div style={style.chartHorz}>
                {chartHorz.map((chartHorz, id) => (
                    <ChartHorz key={id} id={id} chartHorz={chartHorz} />
                ))}
            </div>
            <div style={style.chartSmall}>
                {chartSmall.map((chartSmall, id) => (
                    <ChartSmall key={id} id={id} chartSmall={chartSmall} />
                ))}
            </div>
        </section>
    );
}

export default Dashboard;

const style = {
    dashCont: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#d1edf7",
        position: "relative",
        height: "100%",
        width: "100%",
    },

    dashTitle: {
        textAlign: "center",
        fontSize: "3rem",
        textDecoration: "underline",
        color: "black",
    },
};
