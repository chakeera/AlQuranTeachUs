import { Box, FormControl, InputLabel, MenuItem, Select, Stack, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import theme from '../core/theme';
import DisplayData from './displayData';

const selectScholar = (props) => {
  const [Scholar, setScholar] = useState('Hanafee');

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
        <FormControl sx={{ my: 2, ml: 4 }} fullWidth>
          <Stack direction="row">
            <InputLabel sx={{ mt: 2 }} id="demo-simple-select-label">
              เลือกอาจารย์
            </InputLabel>
            <Select
              autoWidth
              label="เลือกอาจารย์"
              value={Scholar}
              sx={{
                mt: 2,
                height: 55,
                borderRadius: 2,
                width: 250
              }}
              onChange={(event) => {
                setScholar(event.target.value);
              }}>
              <MenuItem value={'Hanafee'}>อ.ฮานาฟี</MenuItem>
              <MenuItem value={'Ashabulyameen'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
              <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>
              <MenuItem value={'Other'}>อื่นๆ</MenuItem>
            </Select>
          </Stack>
        </FormControl>
        <DisplayData category={props.typename} scholar={Scholar}></DisplayData>
        <Toolbar />
      </Box>
    </>
  );
};

export default selectScholar;
