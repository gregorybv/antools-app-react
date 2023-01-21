import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Blocks/Hero/Hero.jsx";
import Popular from "./components/Blocks/Popular/Popular.jsx";
import Brand from "./components/Blocks/Brand/Brand.jsx";
import Newcomer from "./components/Blocks/Newcomer/Newcomer.jsx";
import Testimon from "./components/Blocks/Testimon/Testimon.jsx";
import Join from "./components/Blocks/Join/Join.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Popular/>
      <Brand/>
      <Newcomer/>
      <Testimon/>
      <Join/>
      <Footer/>
    </>
  )
}

export default App
