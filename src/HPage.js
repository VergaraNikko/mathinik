import React from 'react';
import './App.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Mathinik.png';
import human from './Human.png';

const Box = () => {
return (
    <div className="box">
    <Label />
    </div>
);
};
  
const Label = () => {
const navigate = useNavigate();

    return (
        <div className="label">
        <div className="sayings" >Never Stop Learning</div>
        <div className="mathinik-text" >Grow up your math skills by online courses with Mathinik</div>
        <Button variant="outlined" onClick={() => navigate("/Login")} style={{ color: '#ffffff', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 350, right: 140 }}>Let's Get Started</Button>
        <img className="human" src={human} alt="Human" />
        </div>
    );
};

function HPage() {
    const navigate = useNavigate();
  
    return (
      <div className="App">
        {/* Header */}
        <div className="Header">
          {/* Logo and Title */}
          <div className="LogoAndTitle">
            {/* Logo */}
            <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 406, height: 76 }} />
  
          </div>
  
          {/* Navigation */}
          <div className="Navigation">
            <Button color="secondary" onClick={() => navigate("/")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
            <Button color="secondary" onClick={() => navigate("/BrowseCourses")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
            <Button color="secondary" onClick={() => navigate("/Aboutus")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
          </div>
  
          {/* Buttons */}
          <div className="Buttons-App" style={{ display: 'flex', gap: '30px' }}>
            <Button
              variant="outlined"
              onClick={() => navigate("/Signup")}
              style={{
                color: '#ffffff',
                fontSize: 28,
                fontFamily: 'Poppins',
                fontWeight: '800',
                textTransform: 'capitalize',
                letterSpacing: 0.90,
                wordWrap: 'break-word',
                borderRadius: '10px',
                border: '2px solid #0b7077cc',
                background: '#fd661f',
                width: '200px',
              }}
            >
              Sign-up
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/Login")}
              style={{
                color: '#ffffff',
                fontSize: 28,
                fontFamily: 'Poppins',
                fontWeight: '800',
                textTransform: 'capitalize',
                letterSpacing: 0.90,
                wordWrap: 'break-word',
                borderRadius: '10px',
                border: '2px solid #fd661f',
                background: '#0b7077cc',
                width: '200px',
              }}
            >
              Log-in
            </Button>
          </div>
        </div>
  
        {/* Circle with Label */}
        <Box />
  
        {/* Rest of the content */}
        <div className="Content">
          
        </div>
      </div>
    );
  }

export default HPage;
