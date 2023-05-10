import {
  Button,
  Card,
  Dialog,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import PropTypes from "prop-types";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Signup from "./Signup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //Dialog for registration form
  const [open, setOpen] = React.useState(false); // Using Local storage ; // const userName = localStorage.getItem("email") //   ? localStorage.getItem("email") //   : "anil@gmail.com"; // const userPassward = localStorage.getItem("passward") //   ? localStorage.getItem("passward") //   : "Anil@123"; // const navigate = useNavigate(); // const handleSubmit = (e) => { //   e.preventDefault(); //   if (email === userName && password === userPassward) { //     toast.success("Login Success!", { //       position: toast.POSITION.TOP_CENTER, //     }); //     console.warn("success!"); //     navigate("/homepage"); //   } else { //     toast.error("Invalid Email or Passward!", { //       position: toast.POSITION.TOP_CENTER, //     }); //     navigate("/"); //   } // };
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("SignIn Success!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/homepage");
      })
      .catch((error) => {
        console.log(error);
        toast.error("User Not Fonud! ", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }; //show and view passward with icon
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCloseModel = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
     
      <div>
       
        <Grid
          xs={12}
          container
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
         
          <Grid item sm={6} xs={12} lg={6} justifyContent="space-around">
        
            <Card
              sx={{ minHeight: 880, maxWidth: 475, m: 2, borderRadius: "13px" }}
            >
            
              <Stack
                elevation={5}
                direction={"column"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                mt={2}
              >
               
                <Link href="#">
                  
                  <img src="./logo.svg" alt="logo" height={30} width={150} />
                 
                </Link>
            
                <Typography
                  sx={{ fontSize: 29, fontWeight: 600, margin: 3, mt: 0.5 }}
                >
                Hi, Welcome to  <br />
                  Subscription App 
                </Typography>
               
                <img
                  src="./illustration_login.png"
                  alt="illustration_login"
                  width={"100%"}
                />
              
              </Stack>
           
            </Card>
         
          </Grid>
          <Grid item sm={6} xs={12} lg={6} justifyContent={"space-around"}>
           
            <Stack
              direction={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-center"}
              mt={2}
              sx={{ minHeight: 580, maxWidth: 395, m: 3 }}
            >
             
              <Typography variant="h5" fontWeight={600}>
               Sign in 
              </Typography>
             
              <Typography
                variant="span"
                color={"gray"}
                fontSize={13}
                marginTop={1}
              >
              Enter your details below. 
              </Typography>
             
              <form //  onSubmit={signIn}
              >
                <FormGroup>
                 
                  <FormControl>
                   
                    <TextField
                      color="warning"
                      value={email}
                      variant="outlined"
                      size="medium"
                      className="form-control"
                      label="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      sx={{ mt: 4 }}
                    />
                    <br />
                    <FormControl
                      variant="outlined"
                      color="warning"
                      fullWidth
                      size="small"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        value={password}
                        type={showPassword ? "text" : "password"}
                        size="medium"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                 
                    <Link
                      href="#"
                      mt={1}
                      fontSize={13}
                      sx={{ color: "orangered" }}
                    >
                      Forget Password 
                    </Link>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      color="warning"
                      sx={{ mt: 1.5 }}
                      type="submit"
                      onClick={signIn}
                    >
                      Sign in 
                    </Button>
                  
                    <Link mt={1} fontSize={13} sx={{ color: "green" }}>
                      Don’t have an account? 
                      
                    </Link>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      color="success"
                      sx={{ mt: 1.5 }} // aria-describedby={id}
                      type="button" // onClick={handleClickOpen}
                      onClick={handleClickOpen}
                    >
                       Get Started 
                    </Button>
                    
                  </FormControl>
               
                </FormGroup>
               
              </form>
             
            </Stack>
           
          </Grid>
          
        </Grid>
        
        <Dialog onClose={handleCloseModel} open={open}>
         <Signup onClose={setOpen} />
        </Dialog>
        
      </div>
  
    </>
  );
}

export default Login;
