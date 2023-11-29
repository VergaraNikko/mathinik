import React from 'react';
import './App.css'
import './Aboutus.css'
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

const AboutUsMain = () => {
  const navigate = useNavigate();

  const Header = () => {
    return (
      <div className="Header">
        <div className="LogoAndTitle">
            <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
          
        <div className="Navigation2">
          <Button color="secondary" onClick={() => navigate("/DashboardStudent")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/Courses")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
          <Button color="secondary" onClick={() => navigate("/AboutUsMain")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
        </div>

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

                <div className="overlap-aboutus">
                    <div className="rectangle-aboutus" />
                    <div className="rectangle-2-aboutus" />
                    <div className="rectangle-3-aboutus" />
                    <div className="rectangle-4-aboutus" />
                    <div className="text-wrapper-aboutus">About Us</div>
                    <p className="p-aboutus">
                        Mathinik is an innovative educational technology project designed to transform the way mathematics is taught and learned. With a focus on addressing the unique challenges of math education, Mathinik offers a comprehensive, adaptive, and personalized learning experience for both educational institutions and students.
                    </p>
                    <div className="text-wrapper-2-aboutus">Why choose us?</div>
                    <img className="image2-aboutus" alt="Team" src="Team.png" />
                    <img className="leader" alt="LEader" src="leader.png" />
                    <p className="p-leader">
                        Team Leader
                    </p>
                    <p className="p-leader-motto">
                        "It is literally true that you can succeed best and quickest by helping others to succeed."
                    </p>

                    <img className="dev1" alt="dev1" src="dev1.png" />
                    <p className="p-dev1">
                        Developer
                    </p>
                    <p className="p-dev1-motto">
                        "If everyone is moving forward together, then success takes care of itself."
                    </p>

                    <img className="dev2" alt="dev2" src="dev2.png" />
                    <p className="p-dev2">
                        Developer
                    </p>
                    <p className="p-dev2-motto">
                        "Alone we can do so little; together we can do so much."
                    </p>

                    <img className="dev3" alt="dev3" src="dev3.png" />
                    <p className="p-dev3">
                        Developer
                    </p>
                    <p className="p-dev3-motto">
                        "It is literally true that you can succeed best and quickest by helping others to succeed."
                    </p>

                </div>

        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Rest of the content */}
      <div className="Content">
        {/* Add your content specific to the Service page here */}
      </div>
    </div>
  );
};

export default AboutUsMain;
