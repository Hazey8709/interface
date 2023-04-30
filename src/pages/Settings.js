import React from "react";
import SettsPic from "../components/statusComp/SettsPic";

const Settings = () => {
    return (
        <main style={style.settCont}>
            <SettsPic />
        </main>
    );
};

export default Settings;

const style = {
    settCont: {
        //border: ".1rem solid limeGreen",
        width: "99",
        height: "100%",
    },

    // settingsPic: {},
};
