import { Box, FormControl, InputLabel, MenuItem, Select, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../core/theme';
import DisplayData from './DisplayData';

const selectScholar = (props) => {
  const [Scholar, setScholar] = useState('Hanafee');
  const [Category, setCategory] = useState(props.typename);
  const [isDisplay, setDisplay] = useState(true);

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
        {isDisplay === true && (
          <FormControl sx={{ my: 2, ml: 4 }} fullWidth>
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
            {props.typename === 'Tafseer' && (
              <FormControl>
                <InputLabel id="demo-simple-select-label" sx={{ mt: 2 }}>
                  เลือกประเภท
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  autoWidth
                  label="เลือกประเภท"
                  value={Category}
                  sx={{
                    mt: 2,
                    height: 55,
                    borderRadius: 2,
                    width: 250
                  }}
                  onChange={(event) => setCategory(event.target.value)}>
                  <MenuItem value={'Tafseer'}>ตัฟซีร</MenuItem>
                  <MenuItem value={'Talk'}>บรรยาย</MenuItem>
                </Select>
              </FormControl>
            )}
          </FormControl>
        )}
        <DisplayData category={Category} scholar={Scholar} setDisplay={setDisplay}></DisplayData>
        <Toolbar />
      </Box>
    </>
  );
};

export default selectScholar;
