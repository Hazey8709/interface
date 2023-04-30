import React, { useState, useEffect } from "react";
import User from "../components/userComp/User";

function Profile() {
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
        <div style={style.mainCont}>
            <h1 style={style.pageTitle}>Profile</h1>
            {userData && (
                <User
                    avatar={userData.picture.large}
                    fName={userData.name.first}
                    lName={userData.name.last}
                    street={userData.location.street.number}
                    city={userData.location.city}
                    state={userData.location.state}
                    zipcode={userData.location.postcode}
                    email={userData.email}
                    phone={userData.phone}
                    gender={userData.gender}
                    username={userData.login.username}
                    pwd={userData.login.password}
                />
            )}
        </div>
    );
}

export default Profile;

const style = {
    mainCont: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#d1edf7",
        height: "100%",
    },

    pageTitle: {
        textAlign: "center",
        textDecoration: "underline",
        fontSize: "3rem",
        color: "black",
        cursor: "pointer",
    },
};
