import {
  Box,
  Typography,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid';

type StatCardProps = {
  title: string;
  value: number | string;
};

function StatCard({ title, value }: StatCardProps) {
  return (
    <Paper
      sx={{
        p: 3,
        textAlign: 'center',
        borderRadius: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4" sx={{ mt: 1 }}>
        {value}
      </Typography>
    </Paper>
  );
}

export default function Dashboard() {
  // normalda API-dan gələcək
  const stats = {
    products: 124,
    orders: 8,
    messages: 3,
    lowStock: 5,
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
<Grid container spacing={3}>
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <StatCard title="Məhsullar" value={stats.products} />
  </Grid>
</Grid>


      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Aktiv sifarişlər" value={stats.orders} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Oxunmamış mesajlar" value={stats.messages} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Az qalan stok" value={stats.lowStock} />
        </Grid>
     
    </Box>
  );
}
