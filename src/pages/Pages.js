import { ArrowBack } from '@mui/icons-material';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Appbar from '../components/SharedComponents/Appbar';
import Footer from '../components/SharedComponents/Footer';
import theme from '../core/theme';
import './pages.css';

const pages = (props) => {
  return (
    <>
      <Box className="grid-outer-container">
        <Appbar />
        <Box className="main-container">
          <Button
            href={props.prevLocation}
            sx={{
              mx: 2,
              mt: { xs: 2, md: 2 },
              mb: { xs: 2, md: 0 },
              color: theme.palette.primary.dark,
              fontWeight: 'bolder',
              fontSize: 18
            }}
            variant="text"
          >
            <ArrowBack></ArrowBack>
            {props.backBtnText}
          </Button>
          <Typography
            sx={{
              textAlign: 'center',
              color: theme.palette.primary.dark,
              fontWeight: 'bolder',
              fontSize: { xs: 18, md: 20 },
              mb: 2
            }}
          >
            {props.title}
          </Typography>
          <Box className="tafseer-grid-container">
            {props.details.map((data) => (
              <Box key={data.name} className="tafseer-item">
                <Link to={data.link}>
                  <img className="img" src={data.image} />
                </Link>
                <Typography sx={{ fontWeight: 'bold' }}>{data.name}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default pages;
