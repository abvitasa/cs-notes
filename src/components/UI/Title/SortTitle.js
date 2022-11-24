import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const SortTitle = ({ title }) => {
  return (
    <Typography variant='h4' gutterBottom>
      <Box sx={{ fontWeight: 'bold', m: 0 }}>
        <span className='headline'>{title}</span>
      </Box>
    </Typography>
  );
};

export default SortTitle;
