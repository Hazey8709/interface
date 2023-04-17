import React from "react";

const UserPic = (props) => {
    return (
        <img
            src={props.avatar}
            style={style.profileAvatar}
            alt='Person Avatar'
        />
    );
};

export default UserPic;

const style = {
    profileAvatar: {
        border: ".1rem solid white",
        borderRadius: "10rem",
        backgroundColor: "#0005",
        height: "8.5rem",
        width: "8.5rem",
    },
};
