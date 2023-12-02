import React, {useState} from 'react';
import './App.css'
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './Mathinik.png';

const DashboardTeacher = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
    const username = location.state?.username || '';
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      navigate('/HPage');
    };

    const Header = () => {
        return (
            <div className="Header">
        <div className="LogoAndTitle">
            <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
          
        <div className="Navigation2">
          <Button color="secondary" onClick={() => navigate("/DashboardTeacher")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/CoursesTeacher")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
          <Button color="secondary" onClick={() => navigate("/AboutUsTeacher")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
        </div>

        <div className="plus-dt" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
            <Button 
                variant="outlined" 
                onClick={() => navigate("/CreateLesson")} 
                style={{
                    color: '#ffffff',
                    fontSize: 93,
                    fontFamily: 'sans-serif',
                    fontWeight: '400',
                    textTransform: 'capitalize',
                    letterSpacing: 0.90,
                    wordWrap: 'break-word',
                    borderRadius: '50%',
                    border: '2px solid #fd661f',
                    backgroundColor: '#0b7077',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                +
            </Button>
        </div>

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

        )
    }

    return (
        <div className="App">
            {/*Header */}
            <Header username={username}/>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
                <div style={{ textAlign: 'right', marginRight: 10 }}>

                    <div className="overlap-6">
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                        <div className="added-created">Added/Created Lesson</div>
                    </div>

                    <div className="overlap-7">
                        <div className="rectangle-55" />
                        <div className="rectangle-7" />
                        <div className="text-wrapper-7">Recent Lesson</div>
                    </div>

                    <div className="gray1-dt">
                        <div className="overlap-group-dt">
                            <img className="rectangle-121-dt" alt="Rectangle" src="Into.png" />
                            <Button variant="outlined" onClick={() => navigate("/BrowseLessonIntroTeacher")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 85 }}>Introduction to Mathematics</Button>
                        </div>

                        <div className="overlap-2-dt">
                            <img className="rectangle-121-dt" alt="Rectangle" src="Geo.png" />
                            <Button variant="outlined" onClick={() => navigate("/BrowseLessonGeometry")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 90 }}>Geometry Notes</Button>
                        </div>
                            
                        <div className="overlap-3-dt">
                            <Button variant="outlined-dt" onClick={() => navigate("/CreateLesson")} style={{ color: '#fd661f', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '800',  letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '5px dashed #0b7077cc', background: '#ffffff', top: 60, right: 135, height: "160px", textDecoration: 'underline' }}>Add a Lesson</Button>
                        </div>
                    
                    </div>

                    <div className="gray2-dt">
                        <div className="overlap-group-dt">
                            <img className="rectangle-121-dt" alt="Rectangle" src="Midterm.png" />
                            <Button variant="outlined" onClick={() => navigate("/BrowseLessonMidterm")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 140 }}>Midterm Notes</Button>
                        </div>

                        <div className="overlap-2-dt">
                            <img className="rectangle-121-dt" alt="Rectangle" src="Geo.png" />
                            <Button variant="outlined" onClick={() => navigate("/BrowseLessonGeometry")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 90 }}>Geometry Notes</Button>
                        </div>
                            
                        <div className="overlap-3-dt">
                            <img className="rectangle-121-dt" alt="Rectangle" src="Into.png" />
                            <Button variant="outlined-dt" onClick={() => navigate("/BrowseLessonIntrotoMath")} style={{ color: '#ffffff', fontSize: 23, fontFamily: 'sans-serif', fontWeight: '600', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077cc', top: 210, right: 85 }}>Introduction to Mathematics</Button>
                        </div>
                    
                    </div>                    

                </div>
            </div>
        </div>
    )
}

export default DashboardTeacher;
