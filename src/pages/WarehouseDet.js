import React, { useState, useRef } from "react";
import axios from "axios";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function WarehouseDetail(props) {
  const id = props.match.params.id;
  const datadummy = [
    {
      id: 123,
      Active: true,
      PickPriority: 1,
      SalesAllowed: true,
      Description: "Warehouse khusus",
      TransfersAllowed: true,
      LocationID: "table 1",
    },
    {
      id: 456,
      Active: true,
      PickPriority: 2,
      SalesAllowed: true,
      Description: "Text baru",
      TransfersAllowed: true,
      LocationID: "table 1",
    },
  ];
  const TableColumn = [
    { field: "LocationID", headerName: "LocationID", width: 200 },
    { field: "PickPriority", headerName: "Pick Priority", width: 200 },
    { field: "Description", headerName: "Desc", width: 200 },
    { field: "SalesAllowed", headerName: "Sales Allowed", width: 200 },
    { field: "TransfersAllowed", headerName: "Transfer Allowed", width: 200 },
  ];

  const [data, setdata] = useState(datadummy);
  const mounted = useRef();
  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      console.log(id)
      getDetail();
      // setLoading(false);
    }
  }, []);

  const getDetail = () => {
    try {
      axios
        .get("http://52.163.51.143:40020/api/WarehouseReps/" + id)
        .then((response) => {
          console.log(response.data);
          setdata(response.data.Locations);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    
    <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
    <AppBar
      component="div"
      position="static"
      sx={{ zIndex: 0, py:3}}
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs>
            <Typography color="inherit" variant="h5" component="h1">
              Detail Location Warehouse - {id}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
      </AppBar>
        <TableContainer component={Paper}>
            <div style={{ height: 500, width: "100%" }}>
              <DataGrid
                columns={TableColumn}
                rows={data}
                getRowId={(row) => row.LocationID}
                pageSize={15}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
              </div>
        </TableContainer>
      </Paper>
  );
}
