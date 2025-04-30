import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import { v4 as uuidv4 } from 'uuid';

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleGenerateCode = () => {
    const newCode = uuidv4().slice(0, 8);
    setMeetingCode(newCode);
  };

  const handleJoinVideoCall = async () => {
    if (!meetingCode) return alert("Please generate or enter a meeting code");
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="home-container">
      <div className="navbar">
        <h2>Zing Video Call</h2>
        <div className="nav-right">
          <IconButton onClick={() => navigate("/history")}>
            <RestoreIcon />
          </IconButton>
          {/* <p>History</p> */}
          <Button onClick={() => {
            localStorage.removeItem("token");
            navigate("/auth");
          }}>Logout</Button>
        </div>
      </div>

      <div className="main-section">
        <div className="left-panel">
          <Typography variant="h4" gutterBottom>
            Create or Join a Meeting
          </Typography>
          <div className="button-group">
            <Button variant="outlined" onClick={handleGenerateCode}>Generate Code</Button>
            <TextField
              variant="outlined"
              label="Meeting Code"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
            />
          </div>
          <Button variant="contained" onClick={handleJoinVideoCall} sx={{ mt: 3 }}>
            Join
          </Button>
        </div>
        <div className="right-panel">
          <img src="/logo3.png" alt="Video Call" />
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
