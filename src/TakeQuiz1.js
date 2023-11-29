import React, {useState, useEffect } from 'react';
import './App.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from './Mathinik.png';

const TakeQuiz1 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [remainingAttempts, setRemainingAttempts] = useState(2);

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

  const handleCorrectAnswer = () => {
    setIsCorrectAnswer(true);
    setRemainingAttempts(0); // Reset remaining attempts
  };

  const handleIncorrectAnswer = () => {
    setIsCorrectAnswer(false);
    setRemainingAttempts((prevAttempts) => prevAttempts - 1);
  };

  useEffect(() => {
    if (isCorrectAnswer === true) {
      alert('Correct answer!');
      navigate("/TakeQuiz2");
    } else if (isCorrectAnswer === false) {
      if (remainingAttempts === 0) {
        alert('Incorrect answer. No more attempts. Moving to the next question.');
        navigate("/TakeQuiz2");
      } else {
        alert('Incorrect answer. Try again!');
      }
    }
  }, [isCorrectAnswer, navigate, remainingAttempts]);

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

            <div className="white-box1-tq">
                <div className='greenbox-tq'>
                    <div className='q1-tq1'>Question 1 :</div>
                    <div className='q2-tq1'>100 + 100 =</div>
                </div>
                <div className='orangebox-tq'>
                    <div className='choices-tq1'>Choose Answer :</div>
                    <Button variant="secondary" onClick={handleIncorrectAnswer} style={{ color: '#ffffff', fontSize: 58, fontFamily: 'sans-serif', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', width: "20px", height: 50, top: 50, left: 80 }}>100</Button>
                    <Button variant="secondary" onClick={handleIncorrectAnswer} style={{ color: '#ffffff', fontSize: 58, fontFamily: 'sans-serif', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', width: "20px", height: 50, top: 130, left: 60 }}>300</Button>
                    <Button variant="secondary" onClick={handleCorrectAnswer} style={{ color: '#ffffff', fontSize: 58, fontFamily: 'sans-serif', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', width: "20px", height: 50, top: 190, left: 110 }}>200</Button>
                    <Button variant="secondary" onClick={handleIncorrectAnswer} style={{ color: '#ffffff', fontSize: 58, fontFamily: 'sans-serif', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', width: "20px", height: 50, top: 70, left: 80 }}>400</Button>
                
                    <Button variant="outlined" onClick={() => navigate("/TakeQuiz2")} style={{ color: '#ffffff', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', background: '#0b7077', width: "190px", height: 50, top: 270, left: -120 }}>NEXT</Button>
                </div>
                
            </div>

            <div className="white-box2-tq">
                <div className="box2-greenbox-tq">
                    <div className='question1-tq'>Question 2 :</div>
                    <div className='question2-tq'>129 x 37 =</div>
                </div>
                <div className="box2-orangebox-tq">
                <div className='choices-tq'>Choose Answer :</div>
                    <div className='ans1-choices-tq'>4,773</div>
                    <div className='ans2-choices-tq'>3,773</div>
                    <div className='ans3-choices-tq'>4,775</div>
                    <div className='ans4-choices-tq'>3,734</div>
                    <div className='next1-tq1'>NEXT</div>
                    <div className='previous1-tq1'>PREVIOUS</div>
                </div>
            </div>

            <div className="white-box3-tq1">
                <div className="box2-greenbox-tq">
                <div className='text-math-tq1'>Basic Math Quiz</div>
                </div>
                <div className="box2-orangebox-tq">
                    
                    <div className='next-tq1'>NEXT</div>
                </div>
            </div>
                
                

        </div>
      </div>

    </div>
  );
};

export default TakeQuiz1;
