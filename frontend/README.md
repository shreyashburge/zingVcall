/* .meetVideoContainer {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: rgb(1, 4, 48);
}


/* Conference and local videos */
.videoArea { */
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 10px;
    gap: 10px;
    overflow-y: auto;
}

.videoArea video {
    width: 30%;
    height: 30vh;
    min-width: 250px;
    border-radius: 10px;
    object-fit: cover;
}

/* Local user's small video */
.meetUserVideo {
    
    height: 25%;
    width: 25%;
    border-radius: 10px;
    z-index: 10;
}

/* Control buttons container */
.buttonContainers {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    display: flex;
    gap: 20px;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 12px;
}

.buttonContainers svg {
    font-size: 2.5rem;
    color: white;
}

/* Chat sidebar */

.chatRoom {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 25vw;
    background: white;
    border-left: 2px solid #ccc;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    z-index: 10;
}


.chatContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}

.chattingDisplay {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
    padding-right: 5px;
}

.chattingArea {
    display: flex;
    gap: 10px;
    padding: 10px 0;
    border-top: 1px solid #ccc;
} 
