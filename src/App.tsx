import React from 'react';
import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import CardPage from "./pages/cardPage";
import MenuComponent from "./pages/MenuComponent";

function App() {
    return (
        <div>
            <MenuComponent/>
            <Routes>
                <Route path="/card/*" element={<CardPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
