import React from "react";
import ProfileEditBtn from "../buttonsComp/ProfileEditBtn";

const User = (props) => {
    return (
        <div style={style.userCont}>
            <img
                src={props.avatar}
                style={style.profileAvatar}
                alt='Person Avatar'
            />
            <h1 style={style.profileName}>
                {props.fName} {props.lName}
            </h1>
            <p style={style.profileInfo1}>
                <span style={style.span}>Street: {props.street}</span>
                <span style={style.span}>City: {props.city}</span>
            </p>
            <p style={style.profileInfo2}>
                <span style={style.span}>State: {props.state}</span>
                <span style={style.span}>Zip: {props.zipcode}</span>
            </p>
            <p style={style.profileInfo3}>
                <span style={style.span}>Email: {props.email}</span>
                <span style={style.span}>Phone: {props.phone}</span>
            </p>
            <p style={style.profileInfo4}>
                <span style={style.span}>Gender: {props.gender}</span>
                <span style={style.span}>User Name: {props.username}</span>
                <span style={style.span}>Pwd: {props.pwd}</span>
            </p>
            <ProfileEditBtn onClick={props.editItem} />
        </div>
    );
};

export default User;

const style = {
    userCont: {
        display: "flex",
        flexDirection: "column",
        border: ".2rem solid white",
        borderRadius: "1rem",
        backgroundColor: "#0005",
        width: "50rem",
        margin: "0 auto",
        // marginLeft: "5rem",
        // marginRight: "rem",
        marginTop: "5rem",
    },

    profileAvatar: {
        display: "flex",
        flexDirection: "column",
        border: ".1rem solid white",
        borderRadius: "1rem",
        margin: "0 auto",
        marginTop: ".5rem",
        height: "10rem",
        width: "10rem",
    },

    profileName: {
        textAlign: "center",
        textDecoration: "underline",
        color: "white",
        fontWeight: "bold",
    },

    profileInfo1: {
        textAlign: "center",
    },

    profileInfo2: {
        textAlign: "center",
    },

    profileInfo3: {
        textAlign: "center",
    },

    profileInfo4: {
        textAlign: "center",
    },

    span: {
        border: ".1rem solid white",
        borderRadius: ".2rem",
        backgroundColor: "#0005",
        color: "white",
        fontWeight: "bold",
        padding: ".1rem",
        marginRight: "10px",
    },
};
