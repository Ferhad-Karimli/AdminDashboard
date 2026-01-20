import {useState} from 'react';
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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FormMessages() {
  

  const handleDelete = (id:any) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const messagesData = [
  {
    id: 1,
    name: 'Elvin',
    email: 'elvin@example.com',
    message: 'Salam, saytınızla maraqlanıram.',
    date: '2026-01-12T12:30:00Z',
    phone:"+994778212"
  },
  {
    id: 2,
    name: 'Leyla',
    email: 'leyla@example.com',
    message: 'Qiymət siyahısı ilə maraqlanıram.',
    date: '2026-01-12T14:10:00Z',
    phone:"+994778212"
  },
];
 const [messages, setMessages] = useState( messagesData || []);
  return (
  <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gələn Mesajlar
      </Typography>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ad</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefon nömrəsi</TableCell>
              <TableCell>Mesaj</TableCell>
              <TableCell>Göndərilmə Tarixi</TableCell>
              <TableCell align="center">Sil</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.length > 0 ? (
              messages.map(({ id, name, email,phone, message, date,}) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{phone}</TableCell>
                     <TableCell>{message}</TableCell>
                  
                  <TableCell>{new Date(date).toLocaleString()}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(id)}
                      aria-label="Delete message"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                  Heç bir mesaj yoxdur.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
