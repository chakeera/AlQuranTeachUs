import {
  Button,
  TextField,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Paper,
  Alert
} from '@mui/material';
import { useState } from 'react';
import theme from '../core/theme';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === process.env.REACT_APP_EMAIL && password === process.env.REACT_APP_PASSWORD) {
      setIsError(false);
      navigate('/manage', { replace: true });
      console.log('pass');
    } else {
      setIsError(true);
    }
  };

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
                  <form onSubmit={handleSubmit}>
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
