import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

export default function WarehouseDetail(props) {
  const id = props.match.params.id;
  const datadummy = [
    {
      id: 123,
      Active: true,
      pick: 1,
      sales: true,
      Desc: "Warehouse khusus",
      transfer: true,
      location: "table 1",
    },
    {
      id: 456,
      Active: true,
      pick: 2,
      sales: true,
      Desc: "Text baru",
      transfer: true,
      location: "table 1",
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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {TableColumn.map((column) => (
                    <TableCell key={column.field}>
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data !== [] ? data.map((row) => (
                  <TableRow
                    key={row.id}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    
                    <TableCell>{row.LocationID}</TableCell>
                    <TableCell>{row.PickPriority}</TableCell>
                    
                    <TableCell>{row.Description}</TableCell>
                    <TableCell>
                      {row.SalesAllowed == true ? "True" : "False"}
                    </TableCell>
                    <TableCell>
                      {row.TransfersAllowed == true ? "True" : "False"}
                    </TableCell>
                  </TableRow>
                )) : 
                ''
                }
              </TableBody>
            </Table>
      </Paper>
  );
}
