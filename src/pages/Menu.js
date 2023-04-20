import React from "react";
import menuPic from "../images/menuPic-1.png";

const Menu = () => {
    return (
        <main style={style.mainCont}>
            <img src={menuPic} alt='Map' style={style.menu} />
        </main>
    );
};

export default Menu;

const style = {
    mainCont: {},

    menu: {
        //height: "50%",
        width: "100%",
    },
};
