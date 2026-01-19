import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  IconButton,
  Link,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function CertificateUploader() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [file, setFile] = useState(null);
  const [certs, setCerts] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const addCert = () => {
    if (!name.trim() || !course.trim() || !file) return;

    // Create a URL for preview
    const fileUrl = URL.createObjectURL(file);

    setCerts([
      {
        id: Date.now(),
        name: name.trim(),
        course: course.trim(),
        fileName: file.name,
        fileUrl,
        date: new Date().toLocaleDateString(),
      },
      ...certs,
    ]);

    // Reset form
    setName('');
    setCourse('');
    setFile(null);

    // Reset file input value (hack)
    document.getElementById('file-input').value = null;
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Certificate Upload Panel
      </Typography>

      <Grid container spacing={4}>
        {/* Form */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Add Existing Certificate
            </Typography>
            <TextField
              fullWidth
              label="Student Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Course Name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              margin="normal"
            />

            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFileIcon />}
              sx={{ mt: 2, mb: 1 }}
              fullWidth
            >
              Upload Certificate File
              <input
                id="file-input"
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".pdf,image/*"
              />
            </Button>
            {file && (
              <Typography variant="body2" sx={{ mb: 2 }}>
                Selected file: {file.name}
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={addCert}
              disabled={!name.trim() || !course.trim() || !file}
            >
              Add Certificate
            </Button>
          </Paper>
        </Grid>

        {/* Certificates list */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, maxHeight: '70vh', overflowY: 'auto' }}>
            <Typography variant="h6" gutterBottom>
              Uploaded Certificates
            </Typography>
            {certs.length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                No certificates uploaded yet.
              </Typography>
            ) : (
              <List>
                {certs.map(({ id, name, course, fileName, fileUrl, date }) => (
                  <React.Fragment key={id}>
                    <ListItem
                      secondaryAction={
                        <Link href={fileUrl} target="_blank" rel="noopener" underline="hover">
                          View File
                        </Link>
                      }
                    >
                      <ListItemText
                        primary={`${name} — ${course}`}
                        secondary={`File: ${fileName} | Date: ${date}`}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
