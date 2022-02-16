import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Admin from '../pages/Admin.js';
import SandBox from '../pages/SandBox.js';

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/sandbox" element={<SandBox />} />
    </Routes>
  </BrowserRouter>
);

export default router;
