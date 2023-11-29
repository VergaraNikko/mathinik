import React from 'react';
import './App.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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

const HomePage = () => {
  const navigate = useNavigate();

  const Header = () => {
    return (
      <div className="Header" style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'none', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
        {/* Logo and Title */}
        <div className="LogoAndTitle">
          <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
        </div>

        {/* Navigation */}
        <div className="Navigation-HomePage" style={{ display: 'flex', gap: '10px', flexGrow: 1, justifyContent: 'center' }}>
          <Button color="secondary" onClick={() => navigate("/HomePage")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/BrowseCourses")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
          <Button color="secondary" onClick={() => navigate("/Aboutus")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
        </div>
        
        {/* Buttons */}
        <div
          className="Buttons"
          style={{
            position: 'fixed', // Set position to fixed
            top: 10, // Adjust top value as needed
            right: 20, // Adjust right value as needed
            display: 'flex',
            gap: '30px',
          }}
        >
          <Button
            variant="outlined"
            onClick={() => navigate("/Sign-up")}
            style={{
              color: '#ffffff',
              fontSize: 18,
              fontFamily: 'Poppins',
              fontWeight: '800',
              textTransform: 'capitalize',
              letterSpacing: 0.90,
              wordWrap: 'break-word',
              borderRadius: '10px',
              border: '2px solid #ffffff',
              background: '#0b7077cc',
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
              fontSize: 18,
              fontFamily: 'Poppins',
              fontWeight: '800',
              textTransform: 'capitalize',
              letterSpacing: 0.90,
              wordWrap: 'break-word',
              borderRadius: '10px',
              border: '2px solid #ffffff',
              background: '#fd661f',
              width: '200px',
            }}
          >
            Log-in
          </Button>
        </div>

        </div>
    );
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Content Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginRight: 10 }}>
          {/* Your Service content can go here */}
               
          <div className="overlap-hp">
            <div className="overlap-group-hp">
              <p className="online-courses-teach-hp">Grow up your math skills by online courses with Mathinik</p>
            </div>
            <div className="text-wrapper-hp">Never stop learning</div>
          </div>

        </div>

        {/* Circle with Label */}
        <Box style={{ marginRight: '200px' }} /> {/* Adjust the margin-right value as needed */}
      </div>

      {/* Rest of the content */}
      <div className="Content">
        {/* Add your content specific to the Service page here */}

        <div className='humanlogo-hp'>
          <img className="img2" alt="Human" src="Human.png" />
        </div>
        <div className='lgs-homepage'>
          <Button variant="outlined" onClick={() => navigate("/Login")} style={{ color: '#ffffff', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 350, right: 140 }}>Let's Get Started</Button>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
