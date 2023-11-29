import React, { useState } from 'react';
import './App.css';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';
import logo from './Mathinik.png';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const EditQuiz = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [description, setDescription] = useState('');
    const [answer, setAnswer] = useState('');
    const [openConfirmation, setOpenConfirmation] = useState(false);

    const handleRequestConfirmation = () => {
        setOpenConfirmation(true);
      };
    
      const handleRequestProceed = () => {
    
        alert('QUIZ HAS BEEN DELETED SUCCESSFULLY!');
    
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
                        <div className="text-wrapper-6">Edit Quiz</div>
                    </div>


                    <div className="div-wrapper-cq"style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Basic Math Quiz"
                            disableUnderline={true}
                            style={{
                                width: 800,
                                fontSize: 30,
                                left: 30,
                                top: 5
                            }}
                        />   
                    </div> 

                    <div className="overlap-3-cq"style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="100
                                        200
                                        300 
                                        400"
                            disableUnderline={true}
                            multiline
                            rows={4}
                            style={{
                                width: 800,
                                fontSize: 30,
                                left: 30,
                                top: 10
                            }}
                        />
                    </div>

                    

                    <div className="Buttons-CreateQuiz" style={{ gap: '70px', marginTop: 150, borderRadius: 30, marginRight: '20px' }}>
                    <div className="Buttons-Quiz" style={{ display: 'flex', gap: '30px' }}>
                        <Button
                            variant="outlined"
                            onClick={() => navigate("/ViewQuiz")}
                            style={{
                            color: '#ffffff',
                            fontSize: 28,
                            fontFamily: 'Poppins',
                            fontWeight: '800',
                            textTransform: 'capitalize',
                            letterSpacing: 0.90,
                            wordWrap: 'break-word',
                            borderRadius: '30px',
                            border: '2px solid #fd661f',
                            background: '#0b7077cc',
                            width: '200px',
                            height: '60px',
                            left: '100px'
                            }}
                        >
                            Done
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={handleRequestConfirmation}
                            style={{
                            color: '#ffffff',
                            fontSize: 28,
                            fontFamily: 'Poppins',
                            fontWeight: '800',
                            textTransform: 'capitalize',
                            letterSpacing: 0.90,
                            wordWrap: 'break-word',
                            borderRadius: '30px',
                            border: '2px solid #0b7077cc',
                            background: '#fd661f',
                            width: '200px',
                            height: '60px',
                            left: '100px'
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
                                    Are you sure you want to DELETE this Quiz?
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

                <div className="gray-box1-cq">
                    <p className='q1-cq'> Question 1</p>
                    <Input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="100 + 100"
                        disableUnderline={true}
                        style={{
                            width: 500,
                            fontSize: 80,
                            left: 60
                        }}
                    />
                </div>

                <div className="overlap-33-cq">
                    <Input
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Question 1: 200"
                        disableUnderline={true}
                        style={{
                            width: 500,
                            fontSize: 40,
                            left: 30,
                            top: 30
                        }}
                    />
                </div>

                <div className='orangeline-cq'/>
                <div className='greenline-cq'/>

                <div className='breakbox-cq'>
                    <div className='rectangle-cq'>
                        <div className='add-a-card-cq'>Add a Card</div>
                    </div>
                    <img className="plus1-cq" alt="Plus" src="Plus1.png" />
                </div>

                <div className="overlap-333-cq"/>
                <div className="circle-cq"/>
                

            </div>
        </div>
    )
}

export default EditQuiz;
