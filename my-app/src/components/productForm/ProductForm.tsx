import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name,
      price,
      image,
    };

    console.log('Product:', productData);
    alert('Product added!');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5">Yeni məhsul</Typography>

      <TextField
        label="Məhsulun adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextField
        label="Qiymət"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <Button variant="outlined" component="label">
        Şəkil əlavə et
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>

      {preview && (
        <Box>
          <Typography variant="body2">Görünüş:</Typography>
          <img
            src={preview}
            alt="preview"
            style={{ width: '100%', borderRadius: 8 }}
          />
        </Box>
      )}

      <Button type="submit" variant="contained">
        Əlavə et
      </Button>
    </Box>
  );
}
