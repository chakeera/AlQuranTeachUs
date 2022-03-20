import { Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import Jummah from '../../assets/images/jummah1.jpg';
import Jummah2 from '../../assets/images/jummah2.jpg';
import Jummah3 from '../../assets/images/jummah3.png';
import Jummah4 from '../../assets/images/jummah4.jpg';

const selectScholarContent = () => {
  return (
    <>
      <Container sx={{ width: '50vw' }}>
        <Grid
          direction="row"
          spacing={0}
          marginTop={4}
          marginBottom={4}
          justifyContent="center"
          alignContent="center"
          textAlign="center"
          container>
          <Grid item md={5}>
            <Button href="/Khutbah/Hanafee">
              <Card sx={{ width: 200 }}>
                <CardMedia component="img" image={Jummah} />
              </Card>
            </Button>
            <Typography>โดย อ.ฮานาฟี อามีน</Typography>
          </Grid>
          <Grid item md={5}>
            <Button href="/Khutbah/Ashabulyameen">
              <Card sx={{ width: 200 }}>
                <CardMedia component="img" image={Jummah2} />
              </Card>
            </Button>
            <Typography>โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
          </Grid>
          <Grid item md={5}>
            <Button href="/Khutbah/Khalid">
              <Card sx={{ width: 200 }}>
                <CardMedia component="img" image={Jummah3} />
              </Card>
            </Button>
            <Typography>โดย อ.คอลิด อารีบี</Typography>
          </Grid>
          <Grid item md={5}>
            <Button href="/Khutbah/Other">
              <Card sx={{ width: 200 }}>
                <CardMedia component="img" image={Jummah4} />
              </Card>
            </Button>
            <Typography>คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน อื่นๆ</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default selectScholarContent;
