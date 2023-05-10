import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Registration success!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
        onClose(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please Enter Correct Details!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
      });
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container justifyContent={"space-around"}>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-center"}
          mt={2}
          sx={{ minHeight: 280, minWidth: 295, m: 3 }}
        >
          <Typography variant="h5" fontWeight={600}>
            Sign in
          </Typography>

          <Typography variant="span" color={"gray"} fontSize={13} marginTop={1}>
            Enter your details below.
          </Typography>

          <form //  onSubmit={signUp}
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
                        //   aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <Button
                  variant="contained"
                  fullWidth
                  color="success"
                  sx={{ mt: 1.5 }} // aria-describedby={id}
                  type="submit" // onClick={handleClickOpen}
                  onClick={signUp}
                >
                  Create User
                </Button>
              </FormControl>
            </FormGroup>
          </form>
        </Stack>
      </Grid>
    </>
  );
}
export default Signup;
