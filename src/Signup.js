import React, {useState} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
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


const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('student');
  const [loading, setLoading] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [showPasswordReminder, setShowPasswordReminder] = useState(false);

  const handlePasswordFocus = () => {
    setShowPasswordReminder(true);
  };

  const handlePasswordBlur = () => {
    setShowPasswordReminder(false);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateFields = () => {
    if (!username || !password || !email) {
      alert('You must fill up all the information boxes below.');
      return false;
    }

    if (!validatePassword(password)) {
      // Display alert if the password format is not met
      alert('Password must be at least 8 characters with a combination of uppercase, lowercase, and special characters.');
      return false;
    }

    return true;
  };

  // Simulated registration logic
  const simulateRegistration = () => {
    console.log('Simulating registration...');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('User Type:', userType);
  };

  const handleNavigateToLogin = () => {
    navigate('/Login');
  };

  const handleRegister = async () => {
    try {
      if (validateFields()) {
        setLoading(true);
        await simulateRegistration(); // Simulated registration logic
        await handleActualRegistration(); // Your actual registration logic
        setLoading(false);
      } 
    } catch (error) {
      console.error('Error during registration:', error);
      setLoading(false);
    }
  };

  const handleActualRegistration = async () => {
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
          userType: userType,
        }),
      });

      if (response.ok) {
        alert('SIGN_UP SUCCESS!');
        navigate('/Login');
      } else {
        console.error('Registration failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
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
        <div style={{ textAlign: 'center'}}> {/* Updated margin-right */}
          {/* Sign Up */}
          <div className="SignUp" style={{ width: 399, height: 94, color: '#0b7077cc', fontSize: 98, fontFamily: 'Raleway-Bold, Helvetica', fontWeight: '700',  wordWrap: 'break-word', marginLeft: '1200px' }}>
            Sign up
          </div>
        </div>

        {/* If You Already Have an Account Registered */}
        <div
            className="IfYouAlreadyHaveAnAccountRegistered"
            style={{ width: 536.52, height: 42.75, color: 'black', fontSize: 36, fontFamily: 'Raleway-Meduim, Helvetica', fontWeight: '500', wordWrap: 'break-word' }}
          >
            Already have an Account
          </div>

          {/* You Can Login Here */}
          <div onClick={handleNavigateToLogin} className="YouCanLoginHere" style={{ width: 312.19, height: 22.75 }}>
            <span style={{ color: '#0b7077cc', fontSize: 36, fontFamily: 'Poppins', fontWeight: '600' }}>Log-in</span>
          </div>

        <Box />
      </div>

      {/* Additional TextFields */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '80px' }}>
        <div className="Rectangle51" style={{ width: 614.69, height: 55.97, background: 'white', borderRadius: 10, border: '1px #0b7077cc solid', marginRight: '500px', marginBottom: '20px' }}>
          <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div
            className="Rectangle51"
            style={{
              width: 614.69,
              height: 55.97,
              background: 'white',
              borderRadius: 10,
              border: '1px #0b7077cc solid',
              marginRight: '500px',
              marginBottom: '20px',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            {showPasswordReminder && (
              <div
                style={{
                  color: '#0b7077cc',
                  fontSize: '14px',
                  marginTop: '5px',
                  marginLeft: '10px',
                }}
              >
                Password must be at least 8 characters with a combination of uppercase, lowercase, and special characters.
              </div>
            )}
            {passwordError && (
              <p style={{ color: 'red', fontSize: '14px', marginTop: '5px', marginLeft: '10px' }}>{passwordError}</p>
            )}
          </div>
        <div className="Rectangle51" style={{ width: 614.69, height: 55.97, background: 'white', borderRadius: 10, border: '1px #0b7077cc solid', marginRight: '500px', marginBottom: '30px'}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="Rectangle51" style={{ width: 614.69, height: 55.97, background: 'white', borderRadius: 10, border: '1px #0b7077cc solid', marginRight: '500px', marginBottom: '30px'}}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
              <FormControlLabel value="student" control={<Radio />} label="Student" />
            </RadioGroup>
          </FormControl>
        </div>
        <Button
          variant="contained"
          disabled={loading}
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
            marginRight: 600,
          }}
          onClick={handleRegister}
        >
          {loading ? 'Signing Up...' : 'Sign-Up'}
        </Button>
      </div>

      {/* Rest of the content */}
      <div className="Content">
        {/* Add your content specific to the Register page here */}
      </div>
    </div>
  );
};

export default Signup;
