import React from "react";
import settingsPic from "../../images/settings-3.png";

const SettsPic = () => {
    return (
        <main style={style.settCont}>
            <img src={settingsPic} alt='Settings' style={style.settingsPic} />
        </main>
    );
};

export default SettsPic;

const style = {
    settCont: {
        width: "100%",
    },

    settingsPic: {
        border: "none",
        margin: "0 auto",
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
};
