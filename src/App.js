// import logo from './logo.svg';
// import './App.css';

import StatusBar from "./components/statusComp/StatusBar";

function App() {
    return (
        <>
            <StatusBar userName='Jordan F' />
            <h2 style={style.title}>Up & Running on Port: 3000 </h2>
        </>
    );
}

export default App;

const style = {
    title: {
        textAlign: "center",
        color: "red",
    },
};
