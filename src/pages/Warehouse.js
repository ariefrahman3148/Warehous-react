import React, { useState, useRef } from "react";
import axios from "axios";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import { useHistory } from "react-router-dom";

const Warehouse = () =>  {
const datadummy = [
    {
      id: "123",
      Active: true,
      WarehouseID: "Retail",
      Branch: "Surabaya",
      Desc: "Warehouse khusus",
      LastSync: "30/12",
    },
    {
      id: "456",
      Active: true,
      WarehouseID: "Super",
      Branch: "Jakarta",
      Desc: "Desc Warehouse",
      LastSync: "01/01",
    },
  ];
  const TableColumn = [
    { field: "WarehouseID", headerName: "WarehouseID", width: 200 },
    { field: "Branch", headerName: "Branch", width: 200 },
    { field: "Active", headerName: "Active", width: 200 },
    { field: "LastSync", headerName: "LastSync", width: 200 },
    { field: "Description", headerName: "Desc", width: 200 },
  ];
  const [data, setdata] = useState(datadummy);
  const [selection, setselection] = useState();
  const mounted = useRef();
  const history = useHistory();
  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getAllWarehouse();
      // setLoading(false);
    }
  }, []);

  const getAllWarehouse = () => {
    try {
      axios
        .get("http://52.163.51.143:40020/api/WarehouseReps")
        .then((response) => {
          console.log(response.data);
          setdata(response.data.filter((i)=>(i.WarehouseID == "RETAIL" || i.WarehouseID == "VA-RETAIL")));
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (e) => {
    history.push("/warehouse/"+e);
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
                Warehouse
              </Typography>
              {/* <button onClick={()=>{console.log(data)}}>tes</button> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
            <TableContainer component={Paper}>
            <div style={{ height: 500, width: "100%" }}>
              <DataGrid
                onCellClick={(param, e)=>{
                  <>
                  {param.value == param.id ? handleClick(param.id) : ''}
                  </>
                }}
                columns={TableColumn}
                rows={data}
                getRowId={(row) => row.WarehouseID}
                pageSize={15}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
              </div>
              {/* <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  {data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <Link to={"/warehouse/" + row.WarehouseID}>
                          {row.WarehouseID}
                        </Link>
                      </TableCell>
                      <TableCell>{row.Branch}</TableCell>
                      <TableCell>
                        {row.Active == true ? "True" : "False"}
                      </TableCell>
                      <TableCell>{row.LastSync}</TableCell>
                      <TableCell>{row.Description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
            </TableContainer>
        </Paper>
  );
  
  };

export default Warehouse;
