import React from "react";
import Sidenav from "../Sidenav";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormGroup,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
const schema = yup.object().shape({
  name: yup.string().min(3).max(10).required(),
  mobile: yup.string().length(10).required(),
  email: yup.string().email().required(),
  address: yup.string().min(3).max(50).required(),
});
const defaultValues = {
  name:'',
  mobile:'',
  email:'',
  address:'',
}

export default function Adduser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const submitForm = (data) => {
    toast.success("Registration success!", {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(data);
  };
  console.log(errors)
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Register User</h1>
          <Card
            sx={{ m: "auto", backgroundColor: "graygh", p: 5, boxShadow: 5 }}
          >
            <form onSubmit={handleSubmit(submitForm)}>
              <FormGroup>
                <FormControl>
                  <TextField
                    fullWidth
                    type="text"
                    label="Enter Name"
                    variant="outlined"
                    sx={{ mb: 1 }}
                    {...register("name")}
                  />
                  <p>{errors?.name?.message}</p>
                  <TextField
                    fullWidth
                    type="text"
                    label="Enter Mobile Number"
                    variant="outlined"
                    sx={{ mb: 1 }}
                    {...register("mobile")}
                  />
                  <p>{errors?.mobile?.message}</p>
                  <TextField
                    fullWidth
                    type="text"
                    label="Enter Email"
                    variant="outlined"
                    sx={{ mb: 1 }}
                    {...register("email")}
                  />
                  <p>{errors?.email?.message}</p>
                  <TextField
                    fullWidth
                    type="text"
                    label="Enter Address"
                    variant="outlined"
                    sx={{ mb: 1 }}
                    {...register("address")}
                  />
                  <p>{errors?.address?.message}</p>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      border: "2px solid blue",
                      width: "15%",
                      height: 50,
                      fontWeight: 700,
                      color: "darkblue",
                      backgroundColor: "#fff",
                      "&:hover": {
                        backgroundColor: "blue", // Background color on hover
                        color:"white",// Text color on hover
                      },
                    }}
                  >
                    Register User
                  </Button>
                </FormControl>
              </FormGroup>
            </form>
          </Card>
        </Box>
      </Box>
    </>
  );
}
