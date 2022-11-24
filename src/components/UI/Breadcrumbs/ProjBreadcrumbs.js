import React from 'react';
import { Breadcrumbs, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { projData } from '../../../ProjData';

const ProjBreadcrumbs = () => {
  const breadcrumbs = Object.keys(projData).map((key) => {
    if (!window.location.href.includes(projData[key].path)) return null;
    return (
      <Link
        underline='hover'
        key={key}
        color='inherit'
        href={projData[key].path}
      >
        {key}
      </Link>
    );
  });

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
        color='inherit'
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default ProjBreadcrumbs;
