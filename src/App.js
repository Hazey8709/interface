import StatusBar from "./components/statusComp/StatusBar";
import Nav from "./components/navComp/Nav";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard"


function App() {
    return (
        <>
            <StatusBar userName='Jordan F' />
            {/* <Nav /> */}
            <main style={style.mainCont}>
                <Nav />
                <section style={style.mainContent}>
                    <Routes>
                        <Route path='Dashboard' element={<Dashboard />} />
                    </Routes>
                </section>
            </main>
        </>
    );
}

export default App;

const style = {
    mainCont: {
        display: "flex",
        flexDirection: "row",
        //position: "absolute", /* delete after */
        alignItems: "stretch",
        border: ".2rem solid red" /* delete after */,
        borderTop: "none" /* delete after */,
        borderLeft: "none" /* delete after */,
        height: "100%",
        width: "100%",
        //marginLeft: "16rem", /* delete after */
    },

    mainContent: {
        border: ".1rem solid blue", /* delete after */
        width: "100%",
    },
};
