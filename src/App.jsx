import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/content";
import { ProductProvider } from "./components/context/CartContext";


function App() {
  return (
    <ProductProvider>
      <Navbar />
      <Content />
    </ProductProvider>
  );
}

export default App;
