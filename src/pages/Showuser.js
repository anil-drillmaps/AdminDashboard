import React, { useEffect, useState } from "react";
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
import { collection, getFirestore } from "@firebase/firestore";
import { app } from "../firebase";
import {useCollection} from 'react-firebase-hooks/firestore'



// function createData(sr,uname,mobile,email,address) {
//   return {sr,uname,mobile,email,address};
// }
// const rows=[
//   createData('1','anil',7379075400,'anil@gmail.com','Noida'),
//   createData('2','aman',7379075400,'anil@gmail.com','Noida'),
//   createData('3','ajay',7379075400,'anil@gmail.com','Noida'),
//   createData('4','anish',7379075400,'anil@gmail.com','Noida'),
//   createData('5','arjun',7379075400,'anil@gmail.com','Noida'),
//   createData('6','jhinnu',7379075400,'anil@gmail.com','Noida'),
//   createData('7','santram',7379075400,'anil@gmail.com','Noida'),
//   createData('8','pahadilal',7379075400,'anil@gmail.com','Noida'),

// ];

// const citiesRef = collection(DB, "cities");


export default function Showuser() {


  const [userList] = useCollection(
  collection(getFirestore(app), "users",),
  {
    snapshotListenOptions: { includeMetadataChanges: true },
  }
);

console.log(userList)
const [userListData, setUserListData] = useState();

  useEffect(() => {
    let tempData= []
    if (userList) {
      let index = 1;
      userList?.forEach((doc) => {
        const childData = doc.data();
        tempData.push({ ...childData, id: index++ });
      });
      setUserListData(tempData);
    }
  }, [userList]);
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
                    {userListData?.map((row, index)=>(
                        <TableRow key={index}>
                        <TableCell align="center">{index+1}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
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
