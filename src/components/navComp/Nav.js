import React from "react";
// import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";
import QuickLinks from "./QuickLinks";

const Nav = () => {
    return (
        <nav style={style.navCont}>
            <div style={style.picCont}></div>

            <section style={style.navBtnCont}>
                <Link to='/dashBoard' style={style.navLink}>
                    Dashboard
                </Link>

                <Link to='/Todo' style={style.navLink}>
                    Todo-List
                </Link>

                <Link to='/Mapbox' style={style.navLink}>
                    Mapbox
                </Link>

                <Link to='/Profile' style={style.navLink}>
                    Profile
                </Link>
            </section>
            <section style={style.quickLinksCont}>
                <div style={style.box}>
                    <QuickLinks />
                </div>
            </section>
        </nav>
    );
};

export default Nav;

const style = {
    navCont: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        border: ".2rem solid black",
        borderTop: "none",
        backgroundColor: "#0005",
        width: "15rem",
        height: "54rem",
        //marginTop: "1rem",
    },

    picCont: {
        border: ".1rem solid blue",
        backgroundColor: "#0005",
        height: "8rem",
        width: "8rem",
        margin: "0 auto",
        marginTop: "5rem",
    },

    navBtnCont: {
        display: "inline-block",
        border: ".1rem solid limeGreen",
        //height: "2rem",
        width: "10rem",
        margin: "0 auto",
        marginTop: "8rem",
        //padding: ".5rem",
        textAlign: "center",
    },

    navLink: {
        display: "block",
        //padding: "1rem",
        //border: ".1rem solid red",
        borderRadius: "10px",
        backgroundColor: "#0005",
        width: "8rem",
        color: "white",
        margin: "0 auto",
        marginTop: "1.5rem",
        padding: ".3rem",
        //textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        textDecoration: "none",
    },

    //! Quick Links
    quickLinksCont: {
        //border: ".1rem solid yellow",
        height: "13.2rem",
        marginTop: "3rem",
        //backgroundColor: "#0005",
    },

    box: {
        //border: ".1rem solid pink",
        //height: "13rem",
        //backgroundColor: "#0005",
    },
};
