import './Home.css'
import logo from './StudyPal_LOGO.svg'
import Account from './Profile1.png'
import Chats from './Chats.png'
import profilePic1 from './Profile1.png'
import profilePic2 from './Profile2.png'
import PostPage from './PostPage.js'
import ChatPage from './ChatPage.js'

import { useState } from 'react';

function Home() {

    let tasks = [];
    for(let i=1; i<7; i = i+1) {
        tasks.push(MakeTask(i));
    }

    const [page, setPage] = useState('home');

    function handleChatPage() {
        setPage('Chat');
    }

    function handleHomePage() {
        setPage('Home');
    }

    function MakeMenu() {
        return (
            <div className="div-dashboard">
                <h2>Dashboard</h2>
                <div className="div-dashboard-item">
                    <div className="dashboard-item" onClick={handleHomePage}>Home</div>
                    <div className="dashboard-item">Find a Study Pal</div>
                    <div className="dashboard-item">Find a Study Group</div>
                    <div className="dashboard-item" onClick={handleChatPage}>Chats</div>
                    <div className="dashboard-item">Profile</div>
                    <div className="dashboard-item">Settings</div>
                </div>
            </div>
        );
    }
    
    function MakeTask(num) {
        return (
            <div className="div-tasks">
                <div className="div-task">
                    <h3>Task {num}</h3>
                    
                </div>
            </div>
        );
    }

    return (
      <div className="div-home">
        <header className="header-home">
          <div className="div-study-pal-logo">
            <img src={logo} className="study-pal-logo" alt="study-pal-logo"/>
          </div>

          <div className='div-icons'>
            <img className='post-profile-picture' onClick={handleChatPage} src={Chats} alt="icon-1"/>
            <img className='post-profile-picture' src={Account} alt="icon-2"/>
            </div>
        </header>

        <main className="main-home">
            <div className="div-home-main-dashboard">
                {MakeMenu()}
            </div>
            {page === 'Home' ? <PostPage/> : <ChatPage/>}
            <div className="div-home-main-tasks">
                <h2>Today's Schedule</h2>
                {tasks}
            </div>
        </main>

        <footer className="footer-home">
            <div className="div-home-footer-links">
            </div>
        </footer>
      </div>
    );
  }
  
  export default Home;