
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div >
     <BrowserRouter>
       
 
       <Navbar/> 
       <Routes>

        <Route path='/' element={<Home/>}/>               
        <Route path='about' element={<About/>}/>               
                   
        <Route path='projects' element={<Projects/>}/>               
        <Route path='skills' element={<Skills/>}/>               
        <Route path='contact' element={<Contact/>}/>               


       
                 

       </Routes>
     
     
     
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
