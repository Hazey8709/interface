import React from "react";

const Edit = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    style={style.editInputs}
                    type='text'
                    required='required'
                    placeholder='Enter a name...'
                    name='fullName'
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    style={style.editInputs}
                    type='text'
                    required='required'
                    placeholder='Enter an address...'
                    name='address'
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    style={style.editInputs}
                    type='text'
                    required='required'
                    placeholder='Enter a phone number...'
                    name='phoneNumber'
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    style={style.editInputs}
                    type='email'
                    required='required'
                    placeholder='Enter an email...'
                    name='email'
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button style={style.saveBtn} type='submit'>
                    Save
                </button>
                <button
                    style={style.cancelBtn}
                    type='button'
                    onClick={handleCancelClick}
                >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default Edit;

const style = {
    saveBtn: {
        border: ".1rem solid limeGreen",
        color: "green",
        borderRadius: ".2rem",
        marginRight: "1rem",
        fontWeight: "bold",
        padding: ".5rem",
    },

    cancelBtn: {
        border: ".1rem solid red",
        borderRadius: ".2rem",
        color: "red",
        fontWeight: "bold",
    },

    editInputs: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        fontWeight: "bold",
    },
};
