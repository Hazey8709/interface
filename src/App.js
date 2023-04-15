import StatusBar from "./components/statusComp/StatusBar";
import Nav from "./components/navComp/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import Mapbox from "./pages/Mapbox";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <StatusBar userName='Jordan F' />

            <main style={style.mainCont}>
                <Nav />
                <section style={style.mainContent}>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='Dashboard' element={<Dashboard />} />
                        <Route path='Todo' element={<Todo />} />
                        <Route path='Mapbox' element={<Mapbox />} />
                        <Route path='Profile' element={<Profile />} />
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
        border: ".1rem solid blue" /* delete after */,
        width: "100%",
    },
};
