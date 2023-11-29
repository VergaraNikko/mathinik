import React, {useState, useEffect } from 'react';
import './App.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from './Mathinik.png';

const ViewScore = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

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

            <div className="white-box1-vs">
                <div className='greenbox-vs'>
                    <div className='text-math-vs'>SCORE</div>
                </div>
                <div className='orangebox-vs'>
                <div className='score-vs'>3</div>
                <Button
                    variant="outlined"
                    onClick={() => {
                      alert("You successfully completed the quiz! Great job!");

                      navigate("/DashboardStudent");
                    }}
                    style={{ color: '#ffffff', fontSize: 23, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077', width: "250px", height: 50, top: 250, left: 95 }}
                  >
                    BACK TO LESSON
                  </Button>
                </div>
                
            </div>

            <div className="white-box2-vs">
                <div className="box2-greenbox-tq">
                    <div className='question1-tq'>Question 3 :</div>
                    <div className='question2-tq'>37 x 89 =</div>
                </div>
                <div className="box2-orangebox-tq">
                <div className='choices-tq'>Choose Answer :</div>
                    <div className='ans1-choices-tq'>3,186</div>
                    <div className='ans2-choices-tq'>2,968</div>
                    <div className='ans3-choices-tq'>3,234</div>
                    <div className='ans4-choices-tq'>3,293</div>
                    <div className='next1-tq1'>NEXT</div>
                    <div className='previous1-tq1'>PREVIOUS</div>
                </div>
            </div>
                
                

        </div>
      </div>

    </div>
  );
};

export default ViewScore;
