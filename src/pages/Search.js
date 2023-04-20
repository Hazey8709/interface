import React from "react";
import searchPic from "../images/googlePic-1.png";

const Search = () => {
    return (
        <main style={style.mainCont}>
            <img src={searchPic} alt='Map' style={style.search} />
        </main>
    );
};

export default Search;

const style = {
    mainCont: {
        height: "100%",
        //backgroundColor: "black",
    },

    search: {
        height: "100%",
        width: "100%",
    },
};
