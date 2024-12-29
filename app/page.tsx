import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function page() {
  return (
    <div>


      <Header />
  <Banner />
  <Home />
<About />
<Contact/>
<Footer />

   
    </div>
  )
}
