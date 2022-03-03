import React from 'react';
import {TextField,FormGroup,FormControlLabel,Checkbox,Button} from '@mui/material' ;
import '../assets/styles/style.css'
 const LoginForm =() =>{
     return(<>
     <div className="center">
     <TextField
          required
          id="outlined-required"
          label="Username"
        
        />
      <br/>
     
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
     <FormGroup>
  <FormControlLabel control={<Checkbox  />} label="Admin" />
  <br/>
  <Button variant="contained">Login</Button>

 
  
</FormGroup>
</div>
     </>)

}

export default LoginForm