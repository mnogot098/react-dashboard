import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

function createData(name, trackingId, data, status) {
  return { name, trackingId, data, status };
}

const rows = [
  createData("Frozen yoghurt", 125362452584, " 2 March 2022", "Approved"),
  createData("Milk", 125362452584, " 6 Juin 2022", "Pending"),
  createData("Breed yoghurt", 125362452584, " 28 Juily 2022", "Pending"),
  createData("Juice yoghurt", 125362452584, " 6 April 2022", "Delivered"),
  createData("Cheese", 125362452584, " 20 August 2022", "Pending"),
];

export default function BasicTable() {
  const makeStyles = (status) => {
    if (status === "Approved") {
      return {
        background: "rgb(145 254 159 /47%)",
        color: "green",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "bold",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffada8f",
        color: "red",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "bold",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "bold",
      };
    }
  };

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell align="left">TrackingId</TableCell>
              <TableCell align="left">Data &nbsp;</TableCell>
              <TableCell align="left">Status &nbsp;</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.data}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left">details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
