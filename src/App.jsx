import { StrictMode } from "react";
import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";

const App = ()=>{
  return( <StrictMode>
  <Navigation/>
 <HeroSection/>
</StrictMode>
    
  ); 
};

export default App;