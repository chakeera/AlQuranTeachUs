import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
// import Tafseer from '../pages/Tafseer.js';
import Pages from '../pages/Pages.js';
import Khutbah from '../pages/Khutbah.js';
import Manage from '../pages/Manage.js';
// import Facebook from '../pages/Facebook.js';
// import Youtube from '../pages/Youtube.js';
import Login from '../pages/Login.js';
import Content from '../components/ClientSide/OtherPageComponents/ContentPage';
import SelectCategory from '../components/ClientSide/OtherPageComponents/SelectCategory.js';
import DisplaySingleFile from '../components/ClientSide/OtherPageComponents/DisplaySingleFile.js';
import { tafseerData, facebookData, youtubeData } from '../components/Data/Data.js';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/TafseerTalk"
          element={
            <Pages
              title="บรรยายและตัฟซีรอัลกุรอาน"
              backBtnText="กลับหน้าหลัก"
              prevLocation="/"
              details={tafseerData}
            />
          }
        />
        <Route path="/TafseerTalk/choose/:scholar" element={<SelectCategory />} />
        <Route path="/Tafseer/:scholar" element={<Content category="Tafseer" />} />
        <Route path="/Talk/:scholar" element={<Content category="Talk" />} />
        <Route
          path="/Facebook"
          element={
            <Pages
              title="Facebook ตัฟซีรอัลกุรอาน"
              backBtnText="กลับหน้าหลัก"
              prevLocation="/"
              details={facebookData}
            />
          }
        />
        <Route path="/Facebook/:scholar" element={<Content category="Facebook" />} />
        <Route
          path="/Youtube"
          element={
            <Pages
              title="Youtube ตัฟซีรอัลกุรอาน"
              backBtnText="กลับหน้าหลัก"
              prevLocation="/"
              details={youtubeData}
            />
          }
        />
        <Route path="/Youtube/:scholar" element={<Content category="Youtube" />} />
        <Route path="/Khutbah" element={<Khutbah />} />
        <Route path="/Quran" element={<DisplaySingleFile category="Quran" />} />
        <Route path="/Evidence" element={<DisplaySingleFile category="Evidence" />} />
        <Route path="/Khutbah/:scholar" element={<Content category="Khutbah" />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
