import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';
import heroLogo from './Mathinik.png';
import human from './Human.png';
import Signup from './Signup';
import Login from './Login'; 
import LoginAdmin from './Login_Admin';
import DashboardStudent from './DashboardStudent';
import Aboutus from './Aboutus';
import AboutUsMain from './AboutUsMain';
import Courses from './Courses';
import BrowseLessonIntrotoMath from './BrowseLessonIntrotoMath';
import BrowseLessonIntroTeacher from './BrowseLessonIntroTeacher';
import DashboardTeacher from './DashboardTeacher';
import CreateLesson from './CreateLesson';
import BrowseCourses from './BrowseCourses';
import HPage from './HPage';
import CoursesTeacher from './CoursesTeacher';
import AboutUsTeacher from './AboutUsTeacher';
import EditLesson from './EditLesson';
import LoginTeacher from './LoginTeacher';
import CreateQuiz from './CreateQuiz';
import ViewQuiz from './ViewQuiz';
import EditQuiz from './EditQuiz';
import CoursesIntrotoMath from './CoursesIntrotoMath';
import CoursesQuantiMethod from './CoursesQuantiMethod';
import CoursesIntrotoMathPreview from './CoursesIntrotoMathPreview';
import CoursesQuantiMethodPreview from './CoursesQuantiMethodPreview';
import CoursesIntrotoMathStudent from './CoursesIntrotoMathStudent';
import CoursesQuantiMethodStudent from './CoursesQuantiMethodStudent';
import TakeQuiz from './TakeQuiz';
import TakeQuiz1 from './TakeQuiz1';
import TakeQuiz2 from './TakeQuiz2';
import TakeQuiz3 from './TakeQuiz3';
import ViewScore from './ViewScore';

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

function Home() {
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HPage" element={<HPage />} />
        <Route path="/Login_Admin" element={<LoginAdmin />} />
        <Route path="/LoginTeacher" element={<LoginTeacher />} />
        <Route path="/DashboardStudent" element={<DashboardStudent />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/AboutUsMain" element={<AboutUsMain/>} />
        <Route path="/AboutUsTeacher" element={<AboutUsTeacher/>} />
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/CoursesTeacher" element={<CoursesTeacher/>} />
        <Route path= "/DashboardTeacher" element={<DashboardTeacher/>} />
        <Route path="/CreateLesson" element={<CreateLesson/>} />
        <Route path="/EditLesson" element={<EditLesson/>} />
        <Route path="/BrowseLessonIntrotoMath" element={<BrowseLessonIntrotoMath />} />
        <Route path="/BrowseLessonIntroTeacher" element={<BrowseLessonIntroTeacher />} />
        <Route path="/BrowseCourses" element={<BrowseCourses />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
        <Route path="/ViewQuiz" element={<ViewQuiz />} />
        <Route path="/EditQuiz" element={<EditQuiz />} />
        <Route path="/TakeQuiz" element={<TakeQuiz />} />
        <Route path="/TakeQuiz1" element={<TakeQuiz1 />} />
        <Route path="/TakeQuiz2" element={<TakeQuiz2 />} />
        <Route path="/TakeQuiz3" element={<TakeQuiz3 />} />
        <Route path="/ViewScore" element={<ViewScore />} />
        <Route path="/CoursesIntrotoMath" element={<CoursesIntrotoMath />} />
        <Route path="/CoursesQuantiMethod" element={<CoursesQuantiMethod />} />
        <Route path="/CoursesIntrotoMathPreview" element={<CoursesIntrotoMathPreview />} />
        <Route path="/CoursesQuantiMethodPreview" element={<CoursesQuantiMethodPreview />} />
        <Route path="/CoursesIntrotoMathStudent" element={<CoursesIntrotoMathStudent />} />
        <Route path="/CoursesQuantiMethodStudent" element={<CoursesQuantiMethodStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
