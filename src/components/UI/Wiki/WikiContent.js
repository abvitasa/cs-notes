import { Grid, Link, Typography } from '@mui/material';

const WikiContent = ({ imgLink, wikiLink, wikiItem, wikiInfo }) => {
  return (
    //
    <>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Typography align='justify' variant='body1' gutterBottom>
            <Link
              href={wikiLink}
              underline='hover'
              variant='h6'
              target='_blank'
            >
              {wikiItem}
            </Link>
            {wikiInfo}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Link href={imgLink} target='_blank'>
            <img
              style={{
                width: '100%',
                maxWidth: '300px',
                maxHeight: '300px',
                margin: 'auto',
                display: 'block',
              }}
              alt='Bubbles'
              src={imgLink}
            />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default WikiContent;
