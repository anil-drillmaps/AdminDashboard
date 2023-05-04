import React from "react";
import Sidenav from "../Sidenav";
import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
function createData(sr,uname,mobile,email,address) {
  return {sr,uname,mobile,email,address};
}
const rows=[
  createData('1','anil',7379075400,'anil@gmail.com','Noida'),
  createData('2','aman',7379075400,'anil@gmail.com','Noida'),
  createData('3','ajay',7379075400,'anil@gmail.com','Noida'),
  createData('4','anish',7379075400,'anil@gmail.com','Noida'),
  createData('5','arjun',7379075400,'anil@gmail.com','Noida'),
  createData('6','jhinnu',7379075400,'anil@gmail.com','Noida'),
  createData('7','santram',7379075400,'anil@gmail.com','Noida'),
  createData('8','pahadilal',7379075400,'anil@gmail.com','Noida'),

];

export default function Showuser() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>
            <h1>User Details</h1>
            <Card sx={{ m: "auto", p: 3, boxShadow: 5 }}>
              <TableContainer component={Paper}>
                <Table aria-label="customized table "  stickyHeader stripe="odd">
                  <TableHead>
                    <TableRow>
                    <TableCell
                        sx={{ fontWeight: 700, color: "black" }}
                        align="center"
                      >
                        Sr No.
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 700, color: "black" }}
                        align="center"
                      >
                        User Name
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 700, color: "black" }}
                        align="center"
                      >
                        Mobile No
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 700, color: "black" }}
                        align="center"
                      >
                        Email
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 700, color: "black" }}
                        align="center"
                      >
                        Address
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody >
                    {rows.map((row)=>(
                        <TableRow key={row.sr}>
                        <TableCell align="center">{row.sr}</TableCell>
                        <TableCell align="center">{row.uname}</TableCell>
                        <TableCell align="center">{row.mobile}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.address}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </div>
        </Box>
      </Box>
    </>
  );
}
