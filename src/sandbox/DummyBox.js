import { Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
import Jummah from '../assets/images/jummah1.jpg';

const Dummy = () => {
  return (
    <div>
      <Typography variant="h3">Sand Box with similar UI</Typography>
      <Container>
        <Grid container rowSpacing={3}>
          <Grid item md={6}>
            <Button href="/hanafee">
              <Card sx={{ width: 200 }}>
                <CardMedia component="img" image={Jummah} />
              </Card>
            </Button>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ width: 200 }}>
              <CardMedia component="img" image={Jummah} />
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ width: 200 }}>
              <CardMedia component="img" image={Jummah} />
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ width: 200 }}>
              <CardMedia component="img" image={Jummah} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Dummy;
