import React, {useState, useEffect } from 'react';
import './App.css'
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from './Mathinik.png';

const DashboardStudent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear authentication token)
    // Then navigate to the login page
    navigate('/HPage');
  };

  // Placeholder function for fetching user data
  const getUserData = async () => {
    // Replace this with your actual implementation to fetch user data
    return { username: 'user' }; // Replace 'JohnDoe' with the actual username
  };

  // Fetch user information when the component mounts
  useEffect(() => {
    // Example: Fetch user information from your authentication context or backend
    // Replace this with your actual implementation
    const fetchUserData = async () => {
      // Assuming you have a function to get user data
      const userData = await getUserData(); // Replace with your actual function
      setUsername(userData.username);
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const Header = () => {
    return (
      <div className="Header">
        <div className="LogoAndTitle">
            <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
          
        <div className="Navigation2">
          <Button color="secondary" onClick={() => navigate("/DashboardStudent")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/Courses")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
          <Button color="secondary" onClick={() => navigate("/AboutUsMain")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
        </div>

        <img className='plus' alt='Plus'  src='Plus.png'></img>
        <img className='user' alt='User'  src='User.png'></img>
        <div className="text-username">{username}</div>

        <div className='logout'>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{
                backgroundColor: '#0b7077',
                width: '5px'

              }}
            >
              
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{
                position: 'absolute',
                display: 'flex',
                left: 1500,
                top: 80
              }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
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

          <div className="overlap-6">
                    <div className="rectangle-5" />
                    <div className="rectangle-6" />
                    <div className="text-wrapper-6">Recent Lesson</div>
                </div>

                <div className="overlap-7">
                    <div className="rectangle-55" />
                    <div className="rectangle-7" />
                    <div className="text-wrapper-7">Recommended Lesson</div>
                </div>
                

                <div className="gray">
                    <div className="overlap-group">
                        <img className="rectangle-121" alt="Rectangle" src="Midterm.png" />
                        <Button variant="outlined" onClick={() => navigate("/BrowseLessonMidterm")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 140 }}>Midterm Notes</Button>
                    </div>
                    <div className="overlap-2">
                        <img className="rectangle-121" alt="Rectangle" src="Geo.png" />
                        <Button variant="outlined" onClick={() => navigate("/BrowseLessonGeometry")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 130 }}>Geometry Notes</Button>
                    </div>
                    <div className="overlap-3">
                        <img className="rectangle-121" alt="Rectgle" src="Into.png" />
                        <Button variant="outlined" onClick={() => navigate("/BrowseLessonIntrotoMath")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 70 }}>Introduction to Mathematics</Button>
                    </div>
                </div>

                <div className="gray2">
                    <div className="overlap-group">
                        <img className="rectangle-121" alt="Rectangle" src="Limbo.png" />
                        <Button variant="outlined" onClick={() => navigate("/BrowseLessonLimbo")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 140 }}>Limbo Theorem</Button>
                    </div>
                    <div className="overlap-2">
                    <img className="rectangle-121" alt="Rectangle" src="Gtheo.png" />
                    <Button variant="outlined" onClick={() => navigate("/BrowseLessonGtheo")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 90 }}>Geometry Theorem</Button>
                    </div>
                    <div className="overlap-3">
                    <img className="rectangle-121" alt="Rectangle" src="Pyntha.png" />
                    <Button variant="outlined" onClick={() => navigate("/BrowseLessonPyntha")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 85 }}>Pynthagorean Theorem</Button>

                    </div>
                </div>

        </div>
      </div>

    </div>
  );
};

export default DashboardStudent;
