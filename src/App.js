import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme';
import Contac from './components/Contac';
import Footer from './components/Footer';

import Projects from './components/Projects';
import Sectionone from './components/Sectionone';
import Tecnologies from './components/Tecnologies';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact2 from './components/Contact2';

function App() {
  
    return (
      <BrowserRouter>
        
        <Sectionone/>
        <Routes>
          <Route path='/' element={<Aboutme />} />
          <Route path='/tecnologies' element={<Tecnologies />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/*' element={<Aboutme />} />
        </Routes>
        <Contac/>
        <Contact2/>
        <Footer/>
      </BrowserRouter>
    );
  
}

export default App;
