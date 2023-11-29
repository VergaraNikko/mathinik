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

const BrowseLessonIntrotoMath = () => {
  const navigate = useNavigate();

  const Header = () => {
    return (
      <div className="Header">
        <div className="LogoAndTitle">
            <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
          
        <div className="Navigation2">
          <Button color="secondary" onClick={() => navigate("/DashboardStudent")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/Courses")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
          <Button color="secondary" onClick={() => navigate("/AboutUsMain")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
        </div>

        <img className='plus' alt='Plus'  src='Plus.png'></img>
        <img className='user' alt='User'  src='User.png'></img>
        <div className="text-username">Username</div>

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

          <div className="overlap-6-courses">
              <div className="rectangle-5-courses" />
              <div className="rectangle-6-courses" />
              <div className="text-wrapper-6-courses">Courses</div>
          </div>

          <div className="browse-lesson-bl">
                <div className="text-intro-bl">Introduction to Math</div>
                
                <div className="remove-bl" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
                  <Button variant="outlined" onClick={() => navigate("/DashboardStudent")} style={{ color: '#ffffff', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '50px', border: '2px solid #d9d9d9', backgroundColor: '#ef1212' }}>X</Button>
                </div>

                <div className='export-bl'>
                <Button variant="secondary" onClick={() => navigate("/Print")} style={{ color: '#fd661f', fontSize: 20, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word',textDecoration: 'underline' }}>export</Button>
                </div>

                    <p className="embark-on-a-bl">
                        Embark on a foundational exploration of mathematical concepts with our &#34;Introduction to Math&#34;
                        lesson. From the fundamental principles of numbers and operations to the captivating world of shapes and
                        patterns, this lesson provides a comprehensive entry point into the diverse landscape of mathematics.
                        Whether you&#39;re a beginner or seeking a refresher, join us on a journey that demystifies the language of
                        numbers and equips you with essential problem-solving skills.
                    </p>

                    <div className="nop-bl">Numbers and Operations</div>
                      
                      <p className="definition-numbers-bl">
                          <span className="spand-bl">Definition : </span>
                          <span className="defin-follow-bl">
                              Numbers are the building blocks of mathematics, representing quantities. Operations like addition,
                              subtraction, multiplication, and division are the basic tools for manipulating these numbers.
                          </span>

                          <span className="text-wrapper-3-bl">
                              {" "}
                              <br />
                          </span>

                          <span className="spane-bl">
                              <br />
                              Example Problem : </span>

                          <span className="ex-prob-bl">
                              Calculate the sum of 15 and 27.
                              <br />
                          </span>

                          <span className="text-wrapper-3-bl">
                              <br />
                              <br />
                          </span>

                          <span className="spans-bl">Solution : </span>
                          <span className="ex-prob-bl">15 + 27 = 42.</span>
                      </p>

                      <div className="pas-bl">Patterns and Sequences</div>
                      <p className="pattern-bl">
                        <span className="pas-def-bl">Definition : </span>
                        <span className="pas-desc-bl">Patterns are recurring sequences or arrangements. Understanding patterns helps in predicting and solving more complex mathematical problems.</span>
                      </p>
                      <p className="pattern1-bl">
                        <span className="pas-def-bl">Example : </span>
                        <span className="pas-desc-bl">Identify the next number in the sequence: 2, 4, 6, 8, ___.</span>
                      </p>
                      <p className="pattern2-bl">
                        <span className="pas-def-bl">Solution : </span>
                        <span className="pas-desc-bl">The pattern increments by 2. The next number is 10.</span>
                      </p>

                      <div className="ps-bl">Problem Solving Strategies</div>
                      <p className="pattern3-bl">
                        <span className="pas-def-bl">Definition : </span>
                        <span className="pas-desc-bl">Problem-solving is a crucial skill in math. It involves breaking down a problem, devising a plan, and executing it to find a solution.</span>
                      </p>
                      <p className="pattern4-bl">
                        <span className="pas-def-bl">Example : </span>
                        <span className="pas-desc-bl">John has 10 apples. He gives 3 to his friend. How many apples does John have now?</span>
                      </p>
                      <p className="pattern5-bl">
                        <span className="pas-def-bl">Solution : </span>
                        <span className="pas-desc-bl">10 - 3 = 7 apples.</span>
                      </p>

                </div>

                <div className="Buttons-Course" style={{ gap: '30px', marginTop: 830 }}>
                  <Button variant="outlined" onClick={() => navigate("/TakeQuiz")} style={{ color: '#ffffff', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #0b7077cc', background: '#fd661f' }}>Take Quiz</Button>
                  <Button variant="outlined" onClick={() => navigate("/DashboardStudent")} style={{ color: '#ffffff', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #fd661f', background: '#0b7077cc' }}>Return to Lessons</Button>
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

export default BrowseLessonIntrotoMath;
