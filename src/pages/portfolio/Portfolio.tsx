import  { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PortfolioAdmin() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      website: 'https://www.google.com',
    },
    {
      id: 2,
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      website: 'https://www.microsoft.com',
    },
  ]);

  const [form, setForm] = useState({ name: '', logo: '', website: '' });
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);

  // Form dəyişiklikləri
  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Yeni şirkət əlavə et
  const handleAdd = () => {
    if (!form.name.trim() || !form.logo.trim()) return;

    if (editId) {
      // Edit rejimi
      setCompanies((prev) =>
        prev.map((c) =>
          c.id === editId ? { ...c, name: form.name, logo: form.logo, website: form.website } : c
        )
      );
    } else {
      // Yeni əlavə
      setCompanies((prev) => [
        ...prev,
        { id: Date.now(), name: form.name.trim(), logo: form.logo.trim(), website: form.website.trim() },
      ]);
    }

    setForm({ name: '', logo: '', website: '' });
    setEditId(null);
    setOpen(false);
  };

  // Redaktə pəncərəsini aç
  const handleEdit = (company:any) => {
    setForm({ name: company.name, logo: company.logo, website: company.website });
    setEditId(company.id);
    setOpen(true);
  };

  // Şirkəti sil
  const handleDelete = (id:any) => {
    setCompanies((prev) => prev.filter((c) => c.id !== id));
  };

  // Dialog pəncərəsini bağla
  const handleClose = () => {
    setForm({ name: '', logo: '', website: '' });
    setEditId(null);
    setOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Portfolio Admin Panel
      </Typography>

      {/* Şirkət siyahısı */}
      <Paper sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Website</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map(({ id, name, logo, website }) => (
              <TableRow key={id}>
                <TableCell>
                  <Box
                    component="img"
                    src={logo}
                    alt={name}
                    sx={{ width: 80, height: 'auto', objectFit: 'contain' }}
                  />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>
                  {website ? (
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      {website}
                    </a>
                  ) : (
                    '-'
                  )}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEdit({ id, name, logo, website })} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {companies.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                  No companies added yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* Yeni əlavə / Redaktə Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editId ? 'Edit Company' : 'Add New Company'}</DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            label="Company Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Logo URL"
            name="logo"
            value={form.logo}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Website URL"
            name="website"
            value={form.website}
            onChange={handleChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleAdd} disabled={!form.name.trim() || !form.logo.trim()}>
            {editId ? 'Save Changes' : 'Add Company'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Yeni əlavə düyməsi */}
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add New Company
      </Button>
    </Container>
  );
}
