import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

//import Navlink
import { NavLink } from 'react-router-dom'

const Kontaktlar = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <NavLink  to='/kompaniyaHaqida'>
        Kompaniya haqida
      </NavLink>
      <NavLink
        underline="hover"
        color="inherit"
        to='/'
      >
        Sotish
      </NavLink>
      <Typography color="text.primary">Sumkalar</Typography>
    </Breadcrumbs>
  );
};

export default Kontaktlar;
