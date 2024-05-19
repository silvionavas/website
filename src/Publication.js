import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { CTA, Brand, Navbar } from "./components";

const Publication = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Features />
      <Footer />
    </div>
  );
}


export default Publication;
