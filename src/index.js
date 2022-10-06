import React from "react";
import * as ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)