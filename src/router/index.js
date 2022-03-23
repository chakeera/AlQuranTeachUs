import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home.js';
import NewHome from '../pages/NewHome.js';
import Jummah from '../pages/Jummah.js';
import Khutbah from '../pages/Khutbah.js';
import Manage from '../pages/Manage.js';
import Login from '../pages/Login.js';
import DisplayFolder from '../components/ContentPage/DisplayFolders';

const router = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route exact path="/" element={<NewHome />} />
      <Route path="/Jummah" element={<Jummah />} />
      <Route path="/Khutbah" element={<Khutbah />} />
      <Route path="/Khutbah/:scholar" element={<DisplayFolder category="Khutbah" />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default router;
