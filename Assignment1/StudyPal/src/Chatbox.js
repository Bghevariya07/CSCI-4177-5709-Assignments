import profilePic1 from './Profile1.png'
import profilePic2 from './Profile2.png'
import './ChatPage.css'
import './Home.css'
import { useState } from 'react';

const MainUser = 'User04';

let chats = [
    ['User01', 'User04', "Hi there, how's your day going so far?", 1],
    ['User02', 'User03', "I'm doing well, thanks for asking. How about you?", 2],
    ['User01', 'User02', "Great, I'm good. Just got back from a morning walk", 3],
    ['User05', 'User04', "That sounds lovely. I wish I had time for a walk.", 4],
    ['User04', 'User01', "You should try to squeeze one in, it's good for you!", 5],
    ['User03', 'User05', "Yeah, I know. Maybe later. Do you have any plans?", 6],
    ['User05', 'User06', "Not really, just the usual work stuff. You?", 7],
    ['User01', 'User02', "Same here. Just trying to stay busy.", 8],
    ['User02', 'User04', "I hear you. Sometimes it's hard to stay motivated.", 9],
    ['User07', 'User01', "Exactly! But we gotta keep pushing forward, right?", 10],
    ['User06', 'User03', "So, what do you like to do in your free time?", 11],
    ['User07', 'User06', "Exactly! But it's okay to take a break sometimes too.", 12],
    ['User01', 'User06', "Yeah, it's the best. Do you have any favorite authors?", 13],
    ['User04', 'User03', "Yeah, maybe someday soon. Thanks for chatting with me!", 14],
    ['User07', 'User04', "Exactly! But it's okay to take a break sometimes too.", 15],
    ['User03', 'User01', "Yeah, maybe someday soon. Thanks for chatting with me!", 16],
    ['User03', 'User01', "Nice! I've read a few of his books. Really scary stuff!", 17],
    ['User03', 'User05', "Yeah, maybe someday soon. Thanks for chatting with me!", 18],
    ['User06', 'User01', "Yeah, maybe someday soon. Thanks for chatting with me!", 19],
    ['User01', 'User06', "Not really, just the usual errands and chores.", 20],
    ['User05', 'User03', "Yeah, maybe someday soon. Thanks for chatting with me!", 21],
    ['User03', 'User07', "Definitely. But it's important to prioritize self-care.", 22],
    ['User07', 'User06', "Not really, just the usual errands and chores.", 23],
    ['User04', 'User07', "Nice! I've read a few of his books. Really scary stuff!", 24],
    ['User01', 'User07', "Definitely. But it's important to prioritize self-care.", 25],
    ['User05', 'User02', "Not as much as I'd like, but I'm hoping to change that soon.", 26],
    ['User04', 'User07', "Exactly! But it's okay to take a break sometimes too.", 27],
    ['User03', 'User02', "Not as much as I'd like, but I'm hoping to change that soon.", 28],
    ['User06', 'User07', "Definitely. But it's important to prioritize self-care.", 29],
    ['User07', 'User03', "Nice! I've read a few of his books. Really scary stuff!", 30],
    ['User01', 'User02', "Not as much as I'd like, but I'm hoping to change that soon.", 31],
    ['User07', 'User05', "Not really, just the usual errands and chores.", 32],
    ['User04', 'User07', "Not as much as I'd like, but I'm hoping to change that soon.", 33],
    ['User06', 'User01', "Exactly! But it's okay to take a break sometimes too.", 34],
    ['User06', 'User03', "Nice! I've read a few of his books. Really scary stuff!", 35],
    ['User07', 'User04', "Not as much as I'd like, but I'm hoping to change that soon.", 36],
    ['User01', 'User05', "Definitely. But it's important to prioritize self-care.", 37],
    ['User03', 'User02', "Nice! I've read a few of his books. Really scary stuff!", 38],
    ['User06', 'User03', "Not really, just the usual errands and chores.", 39],
    ['User05', 'User04', "Definitely. But it's important to prioritize self-care.", 40],
];

function ChatBox(props) {
    let username = props.username;
    let profile = props.profile;
    let chattt;
    let sorted = [];

    const [chatList, setChatList] = useState([]);

    function GetChatsforUser(username, chatArr) {
        let userChats = [];

        for (let element in chatArr) {
            
            if ((chatArr[element][0] === MainUser && chatArr[element][1] === username)
                || (chatArr[element][0] === username && chatArr[element][1] === MainUser)) {
                userChats.push(chatArr[element]);
            }
        }

        return userChats;
    }

    function CreateChats(chatArr) {
        let chatClass = '';
        let textClass = '';
        let chatUserClass = '';
        let chatDivs = [];

        for (let element in chatArr) {
            if (chatArr[element][0] === MainUser) {
                chatClass = "div-chat-text-send";
                textClass = "chat-text-send";
                chatUserClass = "chat-user-send";
            } else {
                chatClass = "div-chat-text-receive";
                textClass = "chat-text-receive";
                chatUserClass = "chat-user-receive";
            }
            chatDivs.push(<div className={chatClass}><p className={chatUserClass}>{chatArr[element][0]}</p><p className={textClass}>{chatArr[element][2]}</p></div>);
        }

        return (
            <div className="chat-container">
                {chatDivs}
            </div>
        )
    }

    function OpenChat() {
        let sortedChat = GetChatsforUser(props.username, chats);
        let chatss = CreateChats(sortedChat);

        sorted = sortedChat;
        chattt = chatss
        return chatss
    }

    let message = '';

    function handleMessageInput(e) {
        message = e.target.value;
    }

    function handleMessageSend() {
        chats.push([MainUser, props.username, message, chats.length]);
        message = '';
        setChatList(sorted);

        document.getElementById('send-message').value = '';
    }

    OpenChat();

    return (
        <div className="div-chat-box-container" id='root'>
            <div className="div-chat-box">
                <div className="div-chat-box-label">
                    <img src={props.profile} alt="profile-picture" className="post-profile-picture" />
                    <h2>{props.username}</h2>
                </div>

                <div className="div-chat-chats">
                    {chattt}
                </div>

                <div className="chat-input-container">
                    <input id="send-message" className="chat-input" type="text" name="name" maxlength="250" onChange={handleMessageInput} />
                    <input className="chat-send" type="submit" name="SEND" value="SEND" onClick={handleMessageSend}/>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;