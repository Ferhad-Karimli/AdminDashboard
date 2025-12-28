import { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from '@mui/material';

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  isRead: boolean;
};

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: 'Ali Vəliyev',
      email: 'ali@mail.az',
      message: 'Qiymətlər haqqında məlumat almaq istəyirəm.',
      createdAt: '2025-01-10',
      isRead: false,
    },
    {
      id: 2,
      name: 'Nigar Məmmədova',
      email: 'nigar@mail.az',
      message: 'Çatdırılma neçə gün çəkir?',
      createdAt: '2025-01-09',
      isRead: true,
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleSelect = (msg: Message) => {
    setSelectedMessage(msg);

    // oxunmuş kimi işarələ
    setMessages((prev) =>
      prev.map((m) =>
        m.id === msg.id ? { ...m, isRead: true } : m
      )
    );
  };

  return (
    <Box sx={{ display: 'flex', gap: 3, p: 3 }}>
      {/* Sol tərəf: Mesaj siyahısı */}
      <Paper sx={{ width: 350 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Mesajlar
        </Typography>
        <Divider />

        <List>
          {messages.map((msg) => (
            <ListItem
              key={msg.id}
              button
              onClick={() => handleSelect(msg)}
              sx={{
                backgroundColor: msg.isRead ? '#fff' : '#f0f7ff',
              }}
            >
              <ListItemText
                primary={msg.name}
                secondary={msg.createdAt}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Sağ tərəf: Mesaj detalları */}
      <Paper sx={{ flex: 1, p: 3 }}>
        {selectedMessage ? (
          <>
            <Typography variant="h6">
              {selectedMessage.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedMessage.email}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography>
              {selectedMessage.message}
            </Typography>
          </>
        ) : (
          <Typography color="text.secondary">
            Mesaj seçilməyib
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
