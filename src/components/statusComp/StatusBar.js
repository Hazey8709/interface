import React from "react";

const StatusBar = (props) => {
    return (
        <header style={style.headerCont}>
            <div style={style.logoCont}></div>
        </header>
    );
};

export default StatusBar;

const style = {
    headerCont: {
        display: "flex",
        flexDirection: "row",
        border: ".2rem solid black",
        height: "5rem",
        backgroundColor: "#0005",
    },

    logoCont: {
        // display: "flex",
        // flexDirection: "row",
        border: ".1rem solid red",
        height: "3.5rem",
        width: "3.5rem",
        marginLeft: "auto",
        marginTop: ".7rem",
        marginRight: ".5rem",
        // justifyContent: "flex-end",
        // float: "right",
    },
};


