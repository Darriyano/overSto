import React from 'react';
import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import CardPage from "./pages/CardPage";
import MenuComponent from "./pages/MenuComponent";
import DiagnosticPage from "./pages/DiagnosticPage";
import LogPage from "./pages/LogPage";
import RoboSettingsPage from "./pages/RoboSettingPage";
import SettingsPage from "./pages/SettingPage";

function App() {
    return (
        <div>
            <MenuComponent/>
            <Routes>
                <Route path="/card/*" element={<CardPage/>}></Route>
                <Route path="/diagnosis/*" element={<DiagnosticPage/>}></Route>
                <Route path="/logs/*" element={<LogPage/>}></Route>
                <Route path="/robo-setting/*" element={<RoboSettingsPage/>}></Route>
                <Route path="/app-settings/*" element={<SettingsPage/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
