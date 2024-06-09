import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./App";
import About from "./About";
import Layout from "./Layout";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


export default function App(){
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
<App />
  </ThemeProvider>
);

