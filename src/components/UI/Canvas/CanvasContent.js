import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import SortTitle from '../Title/SortTitle';

const CanvasContent = ({ updateCanvas, reload, canvasSize, canvasRef }) => {
  return (
    <>
      <SortTitle title={'Demo'} />
      <Stack
        justifyContent='center'
        alignItems='center'
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ my: 3 }}
      >
        <Stack
          direction={{ xs: 'row', sm: 'row', md: 'column', lg: 'column' }}
          spacing={2}
        >
          <Button
            fullWidth={true}
            variant='contained'
            size='large'
            onClick={updateCanvas}
          >
            Start
          </Button>
          <Button
            fullWidth={true}
            variant='outlined'
            size='large'
            onClick={reload}
          >
            Restart
          </Button>
        </Stack>

        <canvas {...canvasSize} className='canvas' ref={canvasRef} />
      </Stack>
    </>
  );
};

export default CanvasContent;
