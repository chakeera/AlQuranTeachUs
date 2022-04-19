import Jummah from '../../assets/images/jummah1.jpg';
import Jummah2 from '../../assets/images/jummah2.jpg';
import Jummah3 from '../../assets/images/jummah3.png';
import Jummah4 from '../../assets/images/jummah4.jpg';
import ManageTabs from '../AdminSide/ManageTabs';
import AddExternalLinks from '../AdminSide/AddExternalLinks';
import Tafseer1 from '../../assets/images/tafseer1.jpg';
import Tafseer2 from '../../assets/images/tafseer2.jpg';
import Tafseer3 from '../../assets/images/tafseer3.jpg';
import Facebook from '../../assets/images/facebook.png';
import Youtube from '../../assets/images/youtube.png';

export const khutbahData = [
  { link: '/Khutbah/Hanafee', image: Jummah, name: 'โดย อ.ฮานาฟี อามีน' },
  { link: '/Khutbah/Ashabulyameen', image: Jummah2, name: 'โดย อ.อัสฮาบุ้ลยามีน ปานนพภา' },
  { link: '/Khutbah/Khalid', image: Jummah3, name: 'โดย อ.คอลิด อารีบี' },
  { link: '/Khutbah/Other', image: Jummah4, name: 'คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน อื่นๆ' }
];

export const youtubeData = [
  { link: '/Youtube/Hanafee', image: Youtube, name: 'โดย อ.ฮานาฟี อามีน' },
  {
    link: '/Yotube/Ashabulyameen',
    image: Youtube,
    name: 'โดย อ.อัสฮาบุ้ลยามีน ปานนพภา'
  },
  { link: '/Youtube/Other', image: Youtube, name: 'ตัฟซีรอัลกุรอานอื่นๆ' }
];

export const facebookData = [
  { link: '/Facebook/Hanafee', image: Facebook, name: 'โดย อ.ฮานาฟี อามีน' },
  {
    link: '/Facebook/Ashabulyameen',
    image: Facebook,
    name: 'โดย อ.อัสฮาบุ้ลยามีน ปานนพภา'
  },
  { link: '/Facebook/Other', image: Facebook, name: 'ตัฟซีรอัลกุรอานอื่นๆ' }
];

export const tafseerData = [
  { link: '/TafseerTalk/choose/hanafee', image: Tafseer2, name: 'โดย อ.ฮานาฟี อามีน' },
  {
    link: '/TafseerTalk/choose/ashabulyameen',
    image: Tafseer3,
    name: 'โดย อ.อัสฮาบุ้ลยามีน ปานนพภา'
  },
  { link: '/Tafseer/Other', image: Tafseer1, name: 'บรรยายและตัฟซีรอัลกุรอานอื่นๆ' }
];

export const tabs = [
  { title: 'External Link', page: <AddExternalLinks /> },
  {
    title: 'Images',
    page: <ManageTabs value="Images" title="รูปภาพ" />
  },
  {
    title: 'Khutbah',
    page: <ManageTabs value="Khutbah" title="คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน" />
  },
  {
    title: 'Tafseer',
    page: <ManageTabs value="Tafseer" title="บรรยาย ตัฟซีรอัลกุรอาน" />
  },
  {
    title: 'Facebook',
    page: <ManageTabs value="Facebook" title="Facebook ตัฟซีรอัลกุรอาน" />
  },
  {
    title: 'Youtube',
    page: <ManageTabs value="Youtube" title="Youtube ตัฟซีรอัลกุรอาน" />
  },
  {
    title: 'Quran',
    page: (
      <ManageTabs
        value="Quran"
        title="หนังสืออัลกุรอาน & MP3 อัลกุรอานเพราะๆ
      "
      />
    )
  },
  {
    title: 'Evidence',
    page: <ManageTabs value="Evidence" title="หลักฐานอื่นๆ" />
  }
];
