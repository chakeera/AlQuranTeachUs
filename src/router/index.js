import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Jummah from '../pages/Jummah.js';
import Khutbah from '../pages/Khutbah.js';
import Manage from '../pages/Manage.js';
import Login from '../pages/Login.js';
import Content from '../components/ContentPage/ContentPage';

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Jummah" element={<Jummah />} />
      <Route path="/Khutbah" element={<Khutbah />} />
      <Route path="/Khutbah/:scholar" element={<Content category="Khutbah" />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default router;
