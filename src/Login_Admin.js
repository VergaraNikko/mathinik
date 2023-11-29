import React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from './Mathinik.png';
import back from './Logo.png';


const Label = () => {
  return (
    <div className="label" style={{ left: 1450, top: 450 }}>
            <img className="Header-logo" src={back} alt="Logo" style={{ width: 406, height: 406 }} />  
    </div>
  );
};

const Box = () => {
  return (
    <div className="box" style={{ position: 'absolute', left: 0 }}>
      <Label />
      </div>
  );
};

const LoginAdmin = () => {

  const handleSignIn = () => {
    // Add your sign-in logic for admin
    // ...
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        <div className="LogoAndTitle">
        <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
        </div>
      </div>

      {/* SignUp/Login Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginRight: 10 }}>
      
           {/* Login */}
           <div className="Sign up" style={{ width: 1399, height: 94, color: '#0b7077cc', fontSize: 78, fontFamily: 'Raleway-Bold, Helvetica', fontWeight: '700', wordWrap: 'break-word', marginRight: '700px', marginTop: '50px', marginBottom: '40px' }}>
            Sign in as Admin
          </div>
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Additional TextFields */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div className="Rectangle51" style={{ width: 614.69, height: 55.97, background: 'white', borderRadius: 10, border: '1px #0b7077cc solid', marginRight: '500px', marginBottom: '20px' }}>
          <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth />
        </div>

        <div className="Rectangle51" style={{ width: 614.69, height: 55.97, background: 'white', borderRadius: 10, border: '1px #0b7077cc solid', marginRight: '500px', marginBottom: '20px' }}>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
        </div>


        {/* Sign in Button */}
        <Button
           variant="contained"
           style={{
             width: 419,
             height: 73,
             backgroundColor: '#0b7077cc',
             color: 'white',
             fontSize: 38,
             fontFamily: 'Poppins',
             fontWeight: '600',
             wordWrap: 'break-word',
             boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
             borderRadius: 44,
             justifyContent: 'center',
             alignItems: 'center',
             gap: 10,
             display: 'inline-flex',
             marginRight: 620,
           }}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </div>

      {/* Rest of the content */}
      <div className="Content">
        </div>
    </div>
  );
};

export default LoginAdmin;
