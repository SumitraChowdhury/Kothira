import React from 'react'
import Sideber from "./Sideber";
import Grid from "@mui/material/Grid";
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Grid container spacing={2}>

      <Grid size={2}>
          <Sideber/>
      </Grid>

      <Grid size={10}>
        <Outlet/>
      </Grid>

    </Grid>
  )
}

export default RootLayout