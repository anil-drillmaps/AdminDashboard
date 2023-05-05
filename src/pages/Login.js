import {
  // Avatar,
  // Box,
  Button,
  Card,
  Dialog,
  DialogTitle,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  List,
  ListItem,
  // ListItemAvatar,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  // Popper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PropTypes from 'prop-types';
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton
              
            
            >
           
              <ListItemText primary="helllo" />
            </ListItemButton>
          </ListItem>
       

        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
           
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function Login() {
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");

  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "anil@gmail.com";
  const userPassward = localStorage.getItem("passward")
    ? localStorage.getItem("passward")
    : "Anil@123";
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && passward === userPassward) {
      toast.success("Login Success!", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.warn("success!");
      navigate("/homepage");
    } else {
      toast.error("Invalid Email or Passward!", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //popobar
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
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
                  Hi, Welcome to
                  <br />
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
                      value={passward}
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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      onChange={(e) => setPassward(e.target.value)}
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
                    onClick={handleSubmit}
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
                    sx={{ mt: 1.5 }}
                    // aria-describedby={id}
                    type="button"
                    // onClick={handleClickOpen}
                    onClick={handleClickOpen}
                  >
                    Get Started
                  </Button>
                  <SimpleDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                  />
                </FormControl>
              </FormGroup>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Login;
