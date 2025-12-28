import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './index.module.css';
export default function Categories() {
  const [age, setAge] = React.useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Kategoriya əlavə et
      </Typography>

      <TextField
        className={styles.inputContainer}
        id="outlined-basic"
        label="Kategoriya adi"
        variant="outlined"
      />

      <FormControl  className={styles.inputContainer}>
        <InputLabel id="demo-simple-select-label">Alt kategoriya</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Alt kotegoriya"
          onChange={handleChange}
        >
          <MenuItem value="1">Ten</MenuItem>
          <MenuItem value="2">Twenty</MenuItem>
          <MenuItem value="3">Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel control={<Switch defaultChecked />} label="Status" />

      <br />
      <Box>
        <Button
          variant="outlined"
          component="label"
          className={styles.inputContainer}
        >
          Şəkil əlavə et
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
      </Box>
      <Button className={styles.inputContainer} variant="contained">
        Yadda Saxla
      </Button>
    </Box>
  );
}
