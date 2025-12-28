import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const navigate = useNavigate()
  const fakeAdmin = {
    email: 'admin@mail.az',
    password: '123456',
  };

  const handleLogin = () => {
    if (
      email === fakeAdmin.email &&
      password === fakeAdmin.password
    ) {
      setError('');
      navigate('/dashboard');
      localStorage.setItem('isAuth', 'true');
      console.log('Login successful');
      // burada redirect olacaq
      // navigate('/admin/dashboard')
    } else {
      setError('Email və ya şifrə yanlışdır');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Admin Giriş
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Şifrə"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Daxil ol
        </Button>
      </Paper>
    </Box>
  );
}
