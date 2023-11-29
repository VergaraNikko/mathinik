import React from 'react';
import './App.css'
import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';
import logo from './Mathinik.png';
import { useState } from 'react';

const CoursesIntrotoMath = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState ('');

  const Header = () => {
    return (
      <div className="Header">
        <div className="LogoAndTitle">
            <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />
          
        <div className="Navigation2">
          <Button color="secondary" onClick={() => navigate("/DashboardTeacher")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/CoursesTeacher")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
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

            <div className="search-courses-cim" style={{display: 'flex', marginTop: 120, marginRight: 20  }}>
                <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Search..."
                    disableUnderline={true}
                    multiline
                    rows={4}
                    style={{
                        width: 1200,
                        fontSize: 40,
                        left: 120,
                        top: 90
                    }}
                /> 

                <img className="search" alt="Search" src="search.png" />
            </div>

            <div className="bigbox-courses-cim">
              <div className="box1-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro-courses">Introduction to Math</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">3 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>

              <div className="box2-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro-courses">Quantitative Method</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">5 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>

              <div className="box3-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro1-courses">Algebra 1</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">20 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>
              
              <div className="box4-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro1-courses">Algebra 2</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">30 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>

              <div className="box5-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro1-courses">Physics 1</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">50 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>
              
              <div className="box6-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro1-courses">Physics 2</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">70 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>

              <div className="box7-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro1-courses">Statistics</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">25 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>
              
              <div className="box8-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro1-courses">Pre-Calculus</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">40 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>

              <div className="box9-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro1-courses">Engineering</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">55 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
              </div>
              
              <div className="box10-courses">
                  <div className="box1d-courses" />
                      <div className="text-intro-courses">Computer Science</div>
                      <div className="preview-box-courses">
                              <div className="gray-box-courses" />
                              <div className="text-preview-courses">Preview</div>
                      </div>
                      <div className="oblong1-courses">
                          <div className="gray-oblong1-courses">
                              <div className="text-topic-courses">50 topics</div>
                          </div>
                      </div>
                      <div className="enroll-box-courses">
                              <div className="green-box-courses" />
                              <div className="text-enroll-courses">Enroll</div>
                      </div>
                    </div>

                </div>

                <div className='gray-box-cim'>
                    <div className="remove-bl-cim" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
                    <Button variant="outlined" onClick={() => navigate("/CoursesTeacher")} style={{ color: '#ffffff', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '50px', border: '2px solid #d9d9d9', backgroundColor: '#ef1212' }}>X</Button>
                    </div>

                    <div className='title-lesson-cim'>Intro to Mathematics</div>
                    <p className="topic1-cim">
                        <span className="about-lesson-cim">Topic 1: Numbers and Operations</span> <br/><br/>
                        <span className="about-lesson-cim">Topic 2: Patterns and Sequence</span><br/><br/>
                        <span className="topic-lesson-cim">Topic 3: Problem Solving Strategies</span><br/>
                    </p>
                </div>

                
        </div>
      </div>

    </div>
  );
};

export default CoursesIntrotoMath;
