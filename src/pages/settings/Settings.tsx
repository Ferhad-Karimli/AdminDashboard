import { useState } from 'react';
import { Box, TextField, Typography, Button, Divider } from '@mui/material';

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'Mebel Dünyası',
    phone: '0123456789',
    email: '',
    address: '',
    whatsapp: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Settings payload:', settings);
    // API PUT /settings
  };
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Ayarlar
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* Ümumi məlumatlar */}
      <TextField
        fullWidth
        label="Sayt adı"
        name="siteName"
        value={settings.siteName}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Telefon"
        name="phone"
        value={settings.phone}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={settings.email}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Ünvan"
        name="address"
        value={settings.address}
        onChange={handleChange}
        margin="normal"
      />

      <Divider sx={{ my: 3 }} />

      {/* Əlaqə */}
      <TextField
        fullWidth
        label="WhatsApp nömrə"
        name="whatsapp"
        value={settings.whatsapp}
        onChange={handleChange}
        margin="normal"
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Yadda saxla
      </Button>
    </Box>
  );
}
