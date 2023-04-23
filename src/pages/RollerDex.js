import React, { useState, Fragment, useRef } from "react";
import data from "../moc-data.json";
import { nanoid } from "nanoid";
import ReadOnly from "../components/rollerDexComp/ReadOnly";
import Edit from "../components/rollerDexComp/Edit";

const RollerDex = () => {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem("contacts")) || data
    );

    const emptyState = {
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    };

    const [addFormData, setAddFormData] = useState({
        emptyState,
    });

    const [editFormData, setEditFormData] = useState({
        emptyState,
        // fullName: "",
        // address: "",
        // phoneNumber: "",
        // email: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const addContactFormRef = useRef();

    //! Add Form Change 1
    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fName = e.target.getAttribute("name");
        const fValue = e.target.value;

        const newFormData = { ...addFormData };
        newFormData[fName] = fValue;

        setAddFormData(newFormData);
    };

    //! Edit Form Change 2
    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    //! Add Form Submit 3
    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);

        localStorage.setItem("contacts", JSON.stringify(newContacts));

        // Reset the form
        addContactFormRef.current.reset();
    };

    //! Edit Form Click 4
    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        };

        const newContacts = [...contacts];
        const i = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[i] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);

        localStorage.setItem("contacts", JSON.stringify(newContacts));
    };

    //! 5
    const handleEditClick = (e, contact) => {
        e.preventDefault();
        setEditContactId(contact.id);

        const fValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        };

        setEditFormData(fValues);
    };

    //! 6
    const handleCancelClick = () => {
        setEditContactId(null);
    };

    //! 7
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
        const i = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(i, 1);

        setContacts(newContacts);

        localStorage.setItem("contacts", JSON.stringify(newContacts));
    };

    return (
        <div style={style.cont}>
            <h1 style={style.pageTitle}>The Roller Dex</h1>
            <form onSubmit={handleEditFormSubmit}>
                <table style={style.tableCont}>
                    <thead>
                        <tr>
                            <th style={style.th}>Name</th>
                            <th style={style.th}>Address</th>
                            <th style={style.th}>Phone Number</th>
                            <th style={style.th}>Email</th>
                            <th style={style.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <Edit
                                        editFormData={editFormData}
                                        handleEditFormChange={
                                            handleEditFormChange
                                        }
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnly
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
            <h2 style={style.addContactTitle}>Add a Contact</h2>
            <form
                style={style.formCont}
                onSubmit={handleAddFormSubmit}
                ref={addContactFormRef}
            >
                <input
                    style={style.inputs}
                    type='text'
                    name='fullName'
                    required='required'
                    placeholder='Enter Name:'
                    onChange={handleAddFormChange}
                />
                <input
                    style={style.inputs}
                    type='text'
                    name='address'
                    required='required'
                    placeholder='Enter Your Address:'
                    onChange={handleAddFormChange}
                />
                <input
                    style={style.inputs}
                    type='text'
                    name='phoneNumber'
                    required='required'
                    placeholder='Enter Your Phone Number:'
                    onChange={handleAddFormChange}
                />
                <input
                    style={style.inputs}
                    type='email'
                    name='email'
                    required='required'
                    placeholder='Enter Your email:'
                    onChange={handleAddFormChange}
                />
                <button style={style.subBtn} type='submit'>
                    Add
                </button>
            </form>
        </div>
    );
};

export default RollerDex;

const style = {
    cont: {
        border: ".1rem solid",
        height: "100%",
        width: "100%",
        backgroundColor: "#d1edf7",
    },

    pageTitle: {
        border: ".2rem solid white",
        borderRadius: ".5rem",
        backgroundColor: "#0005",
        color: "white",
        width: "20rem",
        textAlign: "center",
        margin: "0 auto",
        marginTop: "5rem",
        marginBottom: "5rem",
        fontSize: "32px",
        padding: "1rem",
        cursor: "pointer",
    },

    tableCont: {
        border: ".2rem solid white",
        borderRadius: ".5rem",
        margin: "0 auto",
        width: "60rem",
        backgroundColor: "#0005",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        cursor: "pointer",
    },

    th: {
        border: "none",
        borderBottom: ".2rem solid black",
        borderRadius: "none",
        borderTopLeftRadius: ".5rem",
        borderTopRightRadius: ".5rem",
        backgroundColor: "#0005",
        cursor: "pointer",
    },

    addContactTitle: {
        // border: ".2rem solid red",
        textAlign: "center",
        cursor: "pointer",
        color: "grey",
    },

    formCont: {
        //border: ".2rem solid black",
        textAlign: "center",
    },

    inputs: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        backgroundColor: "#0005",
        color: "white",
        marginRight: "2rem",
        fontWeight: "bold",
    },

    subBtn: {
        border: ".1rem solid black",
        borderRadius: ".2rem",
        backgroundColor: "#cbfbc9",
        color: "darkGreen",
        fontWeight: "bold",
    },
};
