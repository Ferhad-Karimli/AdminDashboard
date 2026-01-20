import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export default function FormMessages({ messages }:any) {
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
              <TableCell>Mesaj</TableCell>
              <TableCell>Göndərilmə Tarixi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages && messages.length > 0 ? (
              messages.map(({ id, name, email, message, date }:any) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{message}</TableCell>
                  <TableCell>{new Date(date).toLocaleString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
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
