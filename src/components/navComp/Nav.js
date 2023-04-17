import React, { useState, useEffect } from "react";
import UserPic from "./UserPic";
import { Link } from "react-router-dom";
import QuickLinks from "./QuickLinks";

const Nav = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchApi() {
            const response = await fetch("https://randomuser.me/api/1.4/");
            const data = await response.json();
            const [user] = data.results;
            // console.log(user);

            setUserData(user);
        }
        fetchApi();
    }, []);

    return (
        <nav style={style.navCont}>
            <div style={style.picCont}>
                {userData && <UserPic avatar={userData.picture.large} />}
            </div>

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
        border: ".2rem solid #464444",
        borderTop: "none",
        backgroundColor: "#464444",
        width: "15rem",
        height: "54rem",
        //marginTop: "1rem",
    },

    picCont: {
        //border: ".1rem solid blue",
        //backgroundColor: "#0005",
        //borderRadius: "10rem",
        //height: "8rem",
        //width: "8rem",
        margin: "0 auto",
        marginTop: "5rem",
    },

    navBtnCont: {
        display: "inline-block",
        //border: ".1rem solid limeGreen",
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
        border: ".1rem solid white",
        borderRadius: "10px",
        backgroundColor: "black",
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
