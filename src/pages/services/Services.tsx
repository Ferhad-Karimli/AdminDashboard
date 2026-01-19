import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ServicesAdmin() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Veb Sayt Hazırlanması',
      description: 'Peşəkar və müasir veb saytların hazırlanması.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055672.png',
    },
    {
      id: 2,
      title: 'SEO Optimizasiyası',
      description: 'Saytınızın axtarış sistemlərində yüksəldilməsi.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1086/1086933.png',
    },
  ]);

  const [form, setForm] = useState({ title: '', description: '', iconUrl: '', iconFile: null });
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);
  const [iconPreview, setIconPreview] = useState(null);

  // Fayl seçiləndə preview yarat
  useEffect(() => {
    if (form.iconFile) {
      const objectUrl = URL.createObjectURL(form.iconFile);
      setIconPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setIconPreview(null);
    }
  }, [form.iconFile]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setForm({ ...form, iconFile: e.target.files[0], iconUrl: '' });
    }
  };

  const handleAddOrEdit = () => {
    if (!form.title.trim()) return;

    const icon = form.iconFile ? iconPreview : form.iconUrl.trim();

    if (editId) {
      setServices((prev:any) =>
        prev.map((s:any) =>
          s.id === editId ? { ...s, title: form.title, description: form.description, icon } : s
        )
      );
    } else {
      setServices((prev:any) => [
        ...prev,
        { id: Date.now(), title: form.title.trim(), description: form.description.trim(), icon },
      ]);
    }

    setForm({ title: '', description: '', iconUrl: '', iconFile: null });
    setEditId(null);
    setOpen(false);
  };

  const handleEdit = (service:any) => {
    setForm({
      title: service.title,
      description: service.description,
      iconUrl: service.icon || '',
      iconFile: null,
    });
    setEditId(service.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleClose = () => {
    setForm({ title: '', description: '', iconUrl: '', iconFile: null });
    setEditId(null);
    setOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Xidmətlər Paneli
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Icon</TableCell>
              <TableCell>Xidmətin Adı</TableCell>
              <TableCell>Təsvir</TableCell>
              <TableCell align="right">Əməliyyatlar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                  Heç bir xidmət əlavə olunmayıb.
                </TableCell>
              </TableRow>
            ) : (
              services.map(({ id, title, description, icon }) => (
                <TableRow key={id}>
                  <TableCell>
                    {icon ? (
                      <Box
                        component="img"
                        src={icon}
                        alt={`${title} icon`}
                        sx={{ width: 40, height: 40, objectFit: 'contain' }}
                      />
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{description || '-'}</TableCell>
                  <TableCell align="right">
                    <IconButton color="primary" onClick={() => handleEdit({ id, title, description, icon })}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editId ? 'Xidməti redaktə et' : 'Yeni xidmət əlavə et'}</DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="normal"
            label="Xidmətin Adı"
            name="title"
            fullWidth
            value={form.title}
            onChange={handleChange}
            required
          />
          <TextField
            margin="normal"
            label="Qısa təsvir"
            name="description"
            fullWidth
            multiline
            rows={3}
            value={form.description}
            onChange={handleChange}
          />

          <Stack spacing={2} mt={2}>
            <Typography variant="subtitle1">Icon əlavə et</Typography>

            <Button variant="outlined" component="label">
              Fayl seç (PNG, JPG, SVG və s.)
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
            </Button>

            <Typography align="center">və ya</Typography>

            <TextField
              label="Icon URL"
              name="iconUrl"
              fullWidth
              value={form.iconUrl}
              onChange={handleChange}
              placeholder="https://example.com/icon.png"
              disabled={!!form.iconFile}
            />

            {iconPreview && (
              <Box
                component="img"
                src={iconPreview}
                alt="Icon preview"
                sx={{ width: 80, height: 80, objectFit: 'contain', mx: 'auto', mt: 1 }}
              />
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ləğv et</Button>
          <Button variant="contained" onClick={handleAddOrEdit} disabled={!form.title.trim()}>
            {editId ? 'Yadda saxla' : 'Əlavə et'}
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="contained" onClick={() => setOpen(true)}>
        Yeni xidmət əlavə et
      </Button>
    </Container>
  );
}
