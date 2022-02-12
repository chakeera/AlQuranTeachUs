import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

const Footer = () => (
  <div className="footer">
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
      <Typography>ติดต่อเรา</Typography>
      <Typography>สำหรับแอดมิน</Typography>
      <Button variant="contained">ADMIN</Button>
    </Stack>
  </div>
);

export default Footer;
