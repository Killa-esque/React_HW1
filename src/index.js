import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Carousel />
    <Card/>
    <Footer/>
  </>
);

