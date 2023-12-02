import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleNavigateToRegister = () => {
    navigate('/Signup');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const user = await response.json();

        // Check the user type and navigate accordingly
        if (user.usertype === 'student') {
          navigate('/DashboardStudent', {state:{username: user.username} });
        } else if (user.usertype === 'teacher') {
          navigate('/DashboardTeacher', {state:{username: user.username} });
        } else {
          console.error('Unknown user type:', user.usertype);
          alert('LOGIN FAILED!');
        }

      } else {
        const error = await response.json();
        console.error('Error during login:', error);
        alert('LOGIN FAILED!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('LOGIN FAILED!');
    }
  };


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        {/* Logo and Title */}
        <div className="LogoAndTitle">
          {/* Logo */}
          <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
        </div>

        <div className="Navigation1">
          <Button color="secondary" onClick={() => navigate("/HPage")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/BrowseCourses")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
          <Button color="secondary" onClick={() => navigate("/Aboutus")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
        </div>

      </div>

      {/* SignUp/Login Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>

        {/* SignUp/Login Section */}
        <div style={{ textAlign: 'right', marginRight: 10 }}> {/* Updated margin-right */}

          {/* Login */}
          <div className="Sign up" style={{ width: 1399, height: 94, color: '#0b7077cc', fontSize: 98, fontFamily: 'Raleway-Bold, Helvetica', fontWeight: '700', wordWrap: 'break-word', marginRight: '780px', marginTop: '50px', marginBottom: '40px' }}>
            Log In Here
          </div>
        </div>

        {/* If You Already Have an Account Registered */}
        <div
            className="IfYouAlreadyHaveAnAccountRegistered"
            style={{ width: 536.52, height: 42.75, color: 'black', fontSize: 36, fontFamily: 'Raleway-Meduim, Helvetica', fontWeight: '500', wordWrap: 'break-word' }}
          >
            Don't have an Account
            
          </div>

          {/* You Can Register Here */}
          <div onClick={handleNavigateToRegister} className="YouCanRegisterHere" style={{ width: 312.19, height: 22.75, marginBottom: 20 }}>
            <span style={{ color: '#0b7077cc', fontSize: 36, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}> Sign-up</span>
          </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Additional TextFields */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '50px' }}>
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

        {/* Forgot Password and Login as Hospital Personnel */}
        <div style={{ display: 'flex', width: '954.69px' }}>
          <div className="ForgotPassword" style={{ width: 250.93, height: 25.70, color: '#0b7077cc', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word', marginBottom: 20, marginTop: 20 }}>
            Forgot Password
          </div>
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
           onClick={handleLogin}
        >
          Log in
        </Button>
      </div>

      {/* Rest of the content */}
      <div className="Content">
        {/* Add your content specific to the Register page here */}
      </div>
    </div>
  );
};

export default Login;
