import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "Jan",
        goal: 65000,
        expec: 45000,
        views: 54400,
    },
    {
        name: "Feb",
        goal: 45000,
        expec: 40000,
        views: 52210,
    },
    {
        name: "March",
        goal: 35000,
        expec: 35000,
        views: 32290,
    },
    {
        name: "April",
        goal: 40000,
        expec: 40000,
        views: 42000,
    },
    {
        name: "May",
        goal: 65000,
        expec: 50000,
        views: 62181,
    },
    {
        name: "Jun",
        goal: 60000,
        expec: 50000,
        views: 62500,
    },
    {
        name: "July",
        goal: 68000,
        expec: 50000,
        views: 62100,
    },
];

const ChartHorz = ({ chartHorz }) => {
    return (
        <article Key={chartHorz.id} style={style.cardCont}>
            <h1 style={style.h1}>{chartHorz.chartHeader}</h1>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    // right: 10,
                    left: 5,
                    // bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray='4 4' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                    type='monotone'
                    dataKey='expec'
                    stroke='#35aa28'
                    activeDot={{ r: 8 }}
                />
                <Line type='monotone' dataKey='goal' stroke='#fa1902' />
                <Line type='monotone' dataKey='views' stroke='blue' />
            </LineChart>
        </article>
    );
};

export default ChartHorz;

const style = {
    cardCont: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        border: "2px solid grey",
        borderRadius: ".5rem",
        backgroundColor: "#d6d6d5",
        marginTop: "5rem",
        marginLeft: "3rem",
        padding: "1rem",
    },

    h1: {
        fontWeight: "bold",
        textDecoration: "underline",
        textAlign: "center",
    },
};
