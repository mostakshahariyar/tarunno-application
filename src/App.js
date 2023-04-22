import Navbar from './component/Navbar/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Navbar/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Volunteer from './component/Volunteer/Volunteer';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';

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
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
