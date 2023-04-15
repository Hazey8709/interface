import React from "react";
import { FaBars, FaSearch, FaCog } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const StatusBar = (props) => {
    return (
        <header style={style.headerCont}>
            <div style={style.menuCont}>
                <FaBars style={style.menuIcon} />
                <FaSearch style={style.menuIcon} />
                <FaCog style={style.menuIcon} />
                <GoLocation style={style.menuIcon} />
            </div>

            <div style={style.logoCont}>
                <h4 style={style.userName}>{props.userName}</h4>
            </div>
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
        width: "100%" /* Check this after place,ent is done */,
        backgroundColor: "#0005",
    },

    logoCont: {
        display: "flex",
        flexDirection: "row",
        // border: ".1rem solid red",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        height: "3.5rem",
        width: "15rem",
        marginLeft: "auto",
        marginTop: ".7rem",
        marginRight: ".5rem",
    },

    userName: {
        // border: ".1rem solid red",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        color: "white",
        height: "1.3rem",
        padding: ".2rem",
        textAlign: "center",
        marginTop: "1.5rem",
        marginLeft: ".3rem",
    },

    menuCont: {
        display: "flex",
        flexDirection: "row",
        // border: ".1rem solid blue",
        borderRadius: ".5rem",
        backgroundColor: "#0005",
        height: "2rem",
        width: "10rem",

        padding: ".5rem",
        marginLeft: "1rem",
        marginTop: "1.5rem",
    },

    menuIcon: {
        // backgroundColor: "#0005",
        fontSize: "28px",
        color: "white",
        padding: ".5rem",
        cursor: "pointer",
    },
};
