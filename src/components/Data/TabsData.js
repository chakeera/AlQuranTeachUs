import ManageTabs from '../AdminSide/ManageTabs';
import AddExternalLinks from '../AdminSide/AddExternalLinks';
const tabs = [
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

export default tabs;
