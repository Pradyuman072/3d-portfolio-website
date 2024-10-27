
import './App.css';
import styled, { ThemeProvider } from "styled-components"
import {darkTheme} from "./utils/Themes";
import {BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  const Body=styled.div`
  background-color:${({theme})=>theme.bg};
  color:${({theme})=>theme.text_primary};
  width:100%;
  overflow-x:hidden;
  position:relative;
  height:90vh;
  `
  const Wrapper=styled.div`
  padding-bottom: 100px; 
background: 
  linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%, 
    rgba(0, 70,209, 0.15) 100%
  ); 
width: 100%;
clip-path:polygon(0 0,100% 0,100% 100%30% 98%, 0 100%);
  `
  return (
   <ThemeProvider theme={darkTheme}>
   <Router>
   <Navbar/>
   <Body>
    
   <Hero />
   <Wrapper>
    <Skills/>
   <Experience/>
   </Wrapper>
   <Projects/>
   <Wrapper> <Education/>
   <Contact/>
   </Wrapper>
  <Footer/>
   </Body>
    <Routes>
    </Routes>
   </Router>
   </ThemeProvider>
  );
}

export default App;
