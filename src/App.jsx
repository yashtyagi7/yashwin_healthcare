/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import DryPowderInjections from './pages/DryPowderInjections';
import DryPowderSuspension from './pages/DryPowderSuspension';
import Capsule from './pages/Capsule';
import LiquidOrals from './pages/LiquidOrals';
import VeterinaryProducts from './pages/VeterinaryProducts';
import ExportProducts from './pages/ExportProducts';
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Blog from './pages/blog'
import './App.css'
import ShopContext from './components/shopcontext'


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <>
    <ShopContext>
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='shop' element={<Shop />} /> */}
        <Route path='blog' element={<Blog />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path="/services/dry-powder-injections" element={<DryPowderInjections/>} />
        <Route path="/services/dry-powder-suspension" element={<DryPowderSuspension/>} />
        <Route path="/services/capsule" element={<Capsule/>} />
        <Route path="/services/liquid-orals" element={<LiquidOrals/>} />
        <Route path="/services/veterinary-products" element={<VeterinaryProducts/>} />
        <Route path="/services/export-products" element={<ExportProducts/>} /> 
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        
      </Route>
    </Routes>
    </BrowserRouter>
    </ShopContext>
    </>
  )
}

export default App
