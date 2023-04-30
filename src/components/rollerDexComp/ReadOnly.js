import React from "react";

const ReadOnly = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button
                    style={style.editBtn}
                    type='button'
                    onClick={(e) => handleEditClick(e, contact)}
                >
                    Edit
                </button>
                <button
                    style={style.delBtn}
                    type='button'
                    onClick={() => handleDeleteClick(contact.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnly;

const style = {
    editBtn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        marginRight: "1rem",
        backgroundColor: "white",
        color: "darkGreen",
        fontWeight: "bold",
    },

    delBtn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        backgroundColor: "white",
        color: "darkRed",
        fontWeight: "bold",
    },
};
