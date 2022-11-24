import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const SortTitle = ({ title }) => {
  return (
    <Typography variant='h4' gutterBottom>
      <Box sx={{ fontWeight: 'bold', my: 2 }}>
        <span className='headline'>{title}</span>
      </Box>
      <hr />
    </Typography>
  );
};

export default SortTitle;
