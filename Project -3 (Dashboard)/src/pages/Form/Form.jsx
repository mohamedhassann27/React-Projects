import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from "react";

const currencies = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "manger",
    label: "Manger",
  },
  {
    value: "user",
    label: "User",
  },
];

function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data)=>{
      console.log(data);
      handleClick()
      reset()
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>

          <div style={{marginBottom:'1.5rem'}}>
            <Typography variant="h5" color="primary" fontWeight='500' textTransform={'uppercase'}>create user</Typography>
            <Typography>Create a New User Profile</Typography>
          </div>

            <Stack sx={{ gap: 2, flexDirection: "row" }}>
                <TextField
                error= {errors.firstName}
                helperText={errors.firstName? "Enter a valid Name & min Length 3": null}
                {...register("firstName", { required: true, minLength: 2})}
                label="First Name"
                variant="filled"
                sx={{ flex: 1 }}
                />

                <TextField
                error={errors.lastName}
                helperText={errors.lastName &&"Enter a valid Name & min Length 3"}
                {...register("lastName", { required: true, minLength: 2})}
                label="Last Name" 
                variant="filled" 
                sx={{ flex: 1 }} />
            </Stack>

            <Stack sx={{ gap: 2, marginY: 2 }}>
                <TextField
                error={errors.email}
                helperText={errors.email && "Enter a valid Email"}
                {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/ })}
                label="Email" 
                variant="filled" />

                <TextField
                error={errors.phone}
                helperText={errors.phone &&"Enter a valid Phone Number"} 
                  {...register("phone", {required: true, pattern: /^(01|02)[0-2,5]{1}[0-9]{8}/g })}
                label="Contact Number" 
                variant="filled" />
                <TextField
                  error={errors.address}
                  helperText= {errors.address &&'Enter your address name'}
                  {...register("address", { required: true, minLength: 2})}
                  label="Address" variant="filled" />
                {/* <TextField label="Address 2" variant="filled" /> */}
            </Stack>

            <Stack>
                <TextField
                id="standard-select-currency"
                select
                label="Role"
                defaultValue="user"
                // helperText="Please select your currency"
                variant="filled"
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Stack>

            <Box sx={{ textAlign: "right", marginTop:2 }}>
                <Button type="submit" variant="contained" sx={{paddingY:1}}>
                Create New User
                </Button>
            </Box>

            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical:"top", horizontal: "right" }} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
              Create New User Success!
              </Alert>
            </Snackbar>
        </Box>
    );
}

export default Form;
