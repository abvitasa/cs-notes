import React from 'react';
import { Breadcrumbs, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { projRoutes } from '../../../ProjRoutes';

const ProjBreadcrumbs = () => {
  const breadcrumbs = Object.keys(projRoutes).map((key) => {
    if (!window.location.href.includes(projRoutes[key].path)) return null;
    return (
      <Link
        underline='hover'
        key={key}
        color='inherit'
        href={projRoutes[key].path}
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
