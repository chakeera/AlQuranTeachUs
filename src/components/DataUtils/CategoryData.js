import QuranPhoto from '../../assets/images/quran.jpg';
import TafseerPhoto from '../../assets/images/tafseer.jpg';
import FridayPhoto from '../../assets/images/friday.jpg';
import FacebookPhoto from '../../assets/images/facebook.jpeg';
import YoutubePhoto from '../../assets/images/youtube.jpg';
import OtherPhoto from '../../assets/images/other.png';

const categoryData = [
  {
    title: 'คุตบะห์วันศุกร์ตัฟซีรอัลกุรอาน',
    image: FridayPhoto,
    link: '/Jummah'
  },
  { title: 'บรรยาย ตัฟซีรอัลกุรอาน', image: TafseerPhoto, link: '/Jummah' },
  { title: 'Facebook ตัฟซีรอัลกุรอาน', image: FacebookPhoto, link: '/Jummah' },
  { title: 'YouTube ตัฟซีรอัลกุรอาน', image: YoutubePhoto, link: '/Jummah' },
  {
    title: 'หนังสืออัลกุรอาน & MP3 อัลกุรอานเพราะๆ',
    image: QuranPhoto,
    link: '/Jummah'
  },
  {
    title: 'หลักฐานอื่นๆ',
    image: OtherPhoto,
    link: '/Jummah'
  }
];

export default categoryData;
