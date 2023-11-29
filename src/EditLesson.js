import React, { useState } from 'react';
import './App.css';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';
import logo from './Mathinik.png';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const EditLesson = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState ('');
    const [openConfirmation, setOpenConfirmation] = useState(false);


    const handleRequestConfirmation = () => {
        setOpenConfirmation(true);
      };
    
      const handleRequestProceed = () => {
    
        alert('LESSON HAS BEEN DELETED SUCCESSFULLY!');
    
        navigate('/DashboardTeacher');
    
        setOpenConfirmation(false);
        navigate("/DashboardTeacher");
      };
    
      const handleRequestCancel = () => {
        setOpenConfirmation(false);
      };


    const Header = () => {
        return (
            <div className="Header">
                <div className="LogoAndTitle">
                    <img className="Header-logo" src={logo} alt="Logo" style={{ width: 406, height: 76 }} />

                    <div className="Navigation2">
                        <Button color="secondary" onClick={() => navigate("/DashboardTeacher")} style={{ color: '#fd661f', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', outline: 'none' }}>Home</Button>
                        <Button color="secondary" onClick={() => navigate("/CoursesTeacher")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Courses</Button>
                        <Button color="secondary" onClick={() => navigate("/AboutusTeacher")} style={{ color: '#000000', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>About Us</Button>
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

                    <img className='user' alt='User' src='User.png'></img>
                    <div className="text-username">Username</div>

                </div>
            </div>
        )
    }

    return (
        <div className="App">
            {/*Header */}
            <Header />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
                <div style={{ textAlign: 'right', marginRight: 10 }}>

                    <div className="overlap-6">
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                        <div className="text-wrapper-6">Create Lesson</div>
                    </div>

                    <div className="div-wrapper-cl"style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Introduction to Mathematics"
                            disableUnderline={true}
                            style={{
                                width: 800,
                                fontSize: 25,
                                color: '#fd661f',
                                fontWeight: 600,
                                left: 30,
                                top: 10
                            }}
                        />   
                    </div>

                    <div className="overlap-3-cl"style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Embark on a foundational exploration of mathematical concepts with our Introduction to Math lesson. From the fundamental principles of numbers  and operations to the captivating world of shapes and patterns, this lesson provides a comprehensive entry point into the diverse landscape of mathematics.  Whether you're a beginner or seeking a refresher join us on a journey that demystifies the language of numbers and equips you with essential problem- solving. "
                            disableUnderline={true}
                            multiline
                            rows={4}
                            style={{
                                width: 800,
                                fontSize: 20,
                                color: '#fd661f',
                                left: 30,
                                top: 10
                            }}
                        />
                    </div>

                    <div className="overlap-4-cl" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Input
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Numbers and Operators"
                            disableUnderline={true}
                            multiline
                            rows={4}
                            style={{
                                width: '1400px',
                                color: '#fd661f',
                                fontWeight: 600,
                                fontSize: 30,
                                left: 30,
                                top: 10
                            }}
                        />
                        <div className="overlap-5-cl">
                           <div className="text-wrapper-6-cl">Import Image</div>
                            <img className="img-cl" alt="green-img" src="Image.png" />
                        </div>
                    </div>

                    <div className="Buttons-CreateLesson" style={{ gap: '70px', marginTop: 250, borderRadius: 30, marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button 
                            variant="outlined" 
                            onClick={() => navigate("/OverviewLesson")} 
                            style={{
                                color: '#ffffff',
                                fontSize: 33,
                                fontFamily: 'sans-serif',
                                fontWeight: '600',
                                textTransform: 'capitalize',
                                letterSpacing: 0.90,
                                wordWrap: 'break-word',
                                borderRadius: '10px',
                                border: '2px solid #fd661f',
                                background: '#0b7077cc',
                                marginBottom: '10px'  // Adjusted margin to reduce space
                            }}
                        >
                            Save Changes
                        </Button>

                        <Button
                            color="secondary"
                            onClick={handleRequestConfirmation}
                            style={{
                                color: '#fd661f',
                                fontSize: 28,
                                fontFamily: 'Poppins',
                                fontWeight: '800',
                                textTransform: 'capitalize',
                                letterSpacing: 0.90,
                                wordWrap: 'break-word',
                                outline: 'none',
                                width: '200px',
                                top: -70,
                                textDecoration: 'underline',
                            }}
                        >
                            Delete
                        </Button>

                        <Dialog
                            open={openConfirmation}
                            onClose={handleRequestCancel}
                        >
                            <DialogTitle>Confirmation</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Are you sure you want to DELETE this lesson?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleRequestCancel} color="primary" style={{ backgroundColor: '#0b7077cc', color: 'white' }}>
                                    CANCEL
                                </Button>
                                <Button onClick={handleRequestProceed} color="primary" style={{ backgroundColor: '#fd661f', color: 'white' }}>
                                    YES
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default EditLesson;
