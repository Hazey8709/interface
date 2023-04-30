import StatusBar from "./components/statusComp/StatusBar";
import Nav from "./components/navComp/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import Mapbox from "./pages/Mapbox";
import RollerDex from "./pages/RollerDex";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Location from "./pages/Location";

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
                        <Route path='RollerDex' element={<RollerDex />} />
                        <Route path='Profile' element={<Profile />} />
                        {/* //* Status Bar Links */}
                        <Route path='Menu' element={<Menu />} />
                        <Route path='Search' element={<Search />} />
                        <Route path='Settings' element={<Settings />} />
                        <Route path='Location' element={<Location />} />
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
        alignItems: "stretch",
        borderTop: "none",
        borderLeft: "none",
        height: "100%",
        width: "100%",
    },

    mainContent: {
        border: ".1rem solid #464444",
        borderTop: "none",
        borderLeft: "none",
        width: "100%",
    },
};
