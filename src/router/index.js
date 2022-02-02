import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home.js';
import Admin from '../Page/Admin.js';

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default router;
