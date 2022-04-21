import {
  Button,
  TextField,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Paper,
  Alert,
  CircularProgress
} from '@mui/material';
import { useEffect, useState } from 'react';
import theme from '../core/theme';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ArrowBack from '@mui/icons-material/ArrowBack';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    const auth = getAuth();
    e.preventDefault();
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setLoading(false);
        setIsError(false);
        navigate('/manage');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setIsError(true);
        console.log(error.code);
      });
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/manage');
    }
  }, []);

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{
            background: theme.palette.primary.dark
          }}
        >
          <Toolbar>
            <Typography color="white" variant="h5" noWrap component="div">
              อัลกุรอ่านสอนเรา อัลมุวาฮิด สำหรับแอดมิน
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid m="auto" item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              sx={{ justifyContent: 'center', minHeight: '90vh' }}
            >
              <Button
                href="/"
                sx={{
                  mx: 2,
                  my: 2,
                  color: theme.palette.primary.dark,
                  fontWeight: 'bolder',
                  fontSize: 18
                }}
                variant="text"
              >
                <ArrowBack></ArrowBack>กลับหน้าหลัก
              </Button>
              {isError ? <Alert severity="error">อีเมล์หรือรหัสไม่ถูกต้อง</Alert> : null}
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  background: theme.palette.primary.main,
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '30vh',
                  minWidth: '40vh',
                  padding: '50px'
                }}
              >
                <Grid item>
                  <form onSubmit={signIn}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          sx={{ backgroundColor: 'white', borderRadius: 1 }}
                          type="email"
                          placeholder="Email"
                          fullWidth
                          variant="outlined"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          sx={{ backgroundColor: 'white', borderRadius: 1 }}
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          sx={{ backgroundColor: theme.palette.primary.dark, color: 'white' }}
                        >
                          {loading && <CircularProgress sx={{ mr: 2 }} size={20} />}
                          Log in
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default login;
