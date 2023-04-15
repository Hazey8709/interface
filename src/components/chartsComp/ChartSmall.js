import React from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
} from "recharts";

const data = [
    {
        Name: "Jan",
        Sales: 1290,
        Views: 1250,
        Expec: 1400,
        Goal: 1200,
    },
    {
        Name: "Feb",
        Sales: 868,
        Views: 967,
        Expec: 1506,
        Goal: 990,
    },
    {
        Name: "March",
        Sales: 1097,
        Views: 1098,
        Expec: 989,
        Goal: 950,
    },
    {
        Name: "April",
        Sales: 1180,
        Views: 1200,
        Expec: 1228,
        Goal: 980,
    },
    {
        Name: "May",
        Sales: 1020,
        Views: 1108,
        Expec: 1100,
        Goal: 960,
    },
    {
        Name: "Jun",
        Sales: 1400,
        Views: 1580,
        Expec: 1700,
        Goal: 980,
    },
];

const ChartSmall = ({ chartSmall }) => {
    return (
        <article key={chartSmall.id} style={style.cardCont}>
            <h1 style={style.h1}>{chartSmall.chartHeader}</h1>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                // margin={{
                //     // top: 1,
                //     right: 20,
                //     bottom: 20,
                //     // left: 30,
                // }}
            >
                <CartesianGrid stroke='#f5f5f5' />
                <XAxis dataKey='Name' scale='band' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                    type='monotone'
                    dataKey='Expec'
                    fill='#35aa28'
                    stroke='darkGreen'
                />
                <Bar dataKey='Views' barSize={20} fill='#413ea0' />
                <Line type='monotone' dataKey='Sales' stroke='yellow' />
                <Scatter dataKey='Goal' fill='red' />
            </ComposedChart>
        </article>
    );
};

export default ChartSmall;

const style = {
    cardCont: {
        display: "flex",
        flexDirection: "column",
        // position: "relative",
        float: "right",
        border: "2px solid grey",
        borderRadius: ".5rem",
        backgroundColor: "#d6d6d5",
        marginLeft: "50rem",
        marginTop: "3rem",
        marginRight: "3rem",
        padding: "1rem",
    },

    h1: {
        textAlign: "center",
        textDecoration: "underline",
        fontWeight: "bold",
    },
};
