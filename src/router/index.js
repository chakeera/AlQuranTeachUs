import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Jummah from '../pages/Jummah.js';
import Manage from '../pages/Manage.js';
import Login from '../pages/Login.js';

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Jummah" element={<Jummah />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default router;
