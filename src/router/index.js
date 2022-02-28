import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Admin from '../pages/Admin.js';
import SandBox from '../sandbox/SandBox.js';
import JummahDummy from '../sandbox/DummyJummah.js';
import Jummah from '../pages/Jummah.js';

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/sandbox" element={<SandBox />} />
      <Route path="/hanafee" element={<JummahDummy />} />
      <Route path="/Jummah" element={<Jummah />} />
    </Routes>
  </BrowserRouter>
);

export default router;
