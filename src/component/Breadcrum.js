import React from "react";
import ReactDOM from "react-dom";
// import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { Route, BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Warehouse from "../pages/Warehouse";
import WarehouseDetail from "../pages/WarehouseDet";
import { Breadcrumbs, Link, Typography } from '@mui/material';

const SimpleBreadcrumbs=()=> {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter(x => x);
        return (
          
          <Breadcrumbs aria-label="Breadcrumb">
            <Link underline="none"  color="inherit" href="/">
              Home
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <RouterLink color="inherit" to={to} key={to} underline="none">
                  {value}
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}

export default SimpleBreadcrumbs;
