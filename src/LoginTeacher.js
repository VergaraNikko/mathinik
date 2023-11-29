import React, {useState} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from './Mathinik.png';


const Label = () => {
  return (
    <div className="label" style={{ left: 1450, top: 450 }}>
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

const LoginTeacher = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleRegister = () => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
  
    if (trimmedUsername && trimmedPassword) {
  
      navigate('/DashboardTeacher');
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleRegister();
    }
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
            Log in as Teacher
          </div>
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Additional TextFields */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <div className="Rectangle51" style={{ width: 614.69, height: 55.97, background: 'white', borderRadius: 10, border: '1px #0b7077cc solid', marginRight: '500px', marginBottom: '20px' }}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="Rectangle51" style={{ width: 614.69, height: 55.97, background: 'white', borderRadius: 10, border: '1px #0b7077cc solid', marginRight: '500px', marginBottom: '20px' }}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyPress}
          />
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
          onClick={handleRegister}
        >
          Log in
        </Button>
      </div>

      {/* Rest of the content */}
      <div className="Content">
        </div>
    </div>
  );
};

export default LoginTeacher;
