import React from "react";
import { FaEdit } from "react-icons/fa";

const ProfileEditBtn = (props) => {
    return (
        <button onClick={props.onClick} style={style.editBtn}>
            <FaEdit />
        </button>
    );
};

export default ProfileEditBtn;

const style = {
    editBtn: {
        borderTop: ".2rem solid white",
        borderBottom: "none",
        borderRight: "none",
        borderLeft: "none",
        borderBottomLeftRadius: ".8rem",
        borderBottomRightRadius: ".8rem",
        backgroundColor: "#c8face",
        color: "darkGreen",
        padding: ".2rem",
        cursor: "pointer",
    },
};
