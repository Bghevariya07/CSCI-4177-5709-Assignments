import profilePic1 from './Profile1.png'
import profilePic2 from './Profile2.png'
import Chats from './Chats.js'
import ChatBox from './Chatbox.js'
import './ChatPage.css'
import './Home.css'

import { useState } from 'react';

const MainUser = 'User04';
var selectedUsername = 'None';
var selectedProfile = 'None';

function ChatPage() {
    let profiles = getChatProfiles(Chats);

    const [user, setUser] = useState('None');
    const [prof, setProf] = useState();

    function getChatProfiles(chatArr) {
        let userProfiles = [];
        let userProfileDivs = [];

        for (let element in chatArr.chats) {
            if (chatArr.chats[element][0] === MainUser && !userProfiles.includes(chatArr.chats[element][1])) {
                userProfiles.push(chatArr.chats[element][1]);
            } else if (chatArr.chats[element][1] === MainUser && !userProfiles.includes(chatArr.chats[element][0])) {
                userProfiles.push(chatArr.chats[element][0]);
            }
        }

        let profile = profilePic1;
        let counter = 0;
        for (let i = 0; i < userProfiles.length; i++) {
            if (counter === 0) {
                counter = 1;
                profile = profilePic1;
            } else {
                counter = 0;
                profile = profilePic2;
            }

            userProfileDivs.push(
                <div className="div-chat-list-item" onClick={() => { handleChatSelected(profile, userProfiles[i]) }} name={userProfiles[i]}>
                    <img src={profile} alt="profile-picture" className="post-profile-picture" />
                    <h2>{userProfiles[i]}</h2>
                </div>
            )
        }

        return userProfileDivs;
    }

    function handleChatSelected(profile, username) {
        setUser(username);
        setProf(profile);
    }

    function handleUserChange(event) {

    }

    return (
        <div className="div-chat-page">
            <div className="div-chat-list-container" onClick={handleUserChange}>
                <div className="div-new-chat">
                    <h2>New Chat</h2>
                </div>

                <div className="div-chat-list">
                    {profiles}
                </div>
            </div>
                {
                    user !== 'None'
                        ? (<ChatBox username={user} profile={prof} />)
                        : (<div className='div-no-chat'>
                            <h3>Select a chat to send a message!</h3>
                        </div>)
                }
        </div>
    );
}

export default ChatPage;