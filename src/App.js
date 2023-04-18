import Navbar from './component/Navbar/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Navbar/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Volunteer from './component/Volunteer/Volunteer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/volunteer' element={<Volunteer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
