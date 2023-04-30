import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaCog } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Logo from "../../images/noobiejLogo.png";

const StatusBar = (props) => {
    return (
        <header style={style.headerCont}>
            <div style={style.menuCont}>
                <Link to='/Menu' style={style.navLink}>
                    <FaBars style={style.menuIcon} />
                </Link>

                <Link to='/Search' style={style.navLink}>
                    <FaSearch style={style.menuIcon} />
                </Link>

                <Link to='/Settings' style={style.navLink}>
                    <FaCog style={style.menuIcon} />
                </Link>

                <Link to='/Location' style={style.navLink}>
                    <GoLocation style={style.menuIcon} />
                </Link>
            </div>

            <div style={style.logoCont}>
                <Link to='/Profile' style={style.profileLink}>
                    <h4 style={style.userName}>{props.userName}</h4>
                </Link>
                <img src={Logo} alt='Map' style={style.logo} />
            </div>
        </header>
    );
};

export default StatusBar;

const style = {
    headerCont: {
        display: "flex",
        flexDirection: "row",
        border: ".2rem solid #464444",
        borderRight: ".1rem solid #464444",
        borderLeft: "none",
        borderTop: "none",
        backgroundColor: "#7e7d7d",
        height: "5rem",
        width: "100%" /* Check this after placement is done */,
    },

    logoCont: {
        display: "flex",
        flexDirection: "row",
        // border: ".1rem solid red",
        borderRadius: ".3rem",
        backgroundColor: "#464444",
        height: "3.5rem",
        width: "15rem",
        marginLeft: "auto",
        marginTop: ".7rem",
        marginRight: ".5rem",
        cursor: "pointer",
    },

    logo: {
        border: ".1rem solid white",
        borderRadius: ".5rem",
        height: "2rem",
        width: "8rem",
        marginTop: ".7rem",
        marginLeft: "1rem",
    },

    userName: {
        border: ".1rem solid white",
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
        border: ".1rem solid white",
        borderRadius: ".5rem",
        backgroundColor: "#464444",
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
