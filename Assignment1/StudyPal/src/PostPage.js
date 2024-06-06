import profilePic11 from './Profile1.png'
import profilePic22 from './Profile2.png'

import './Home.css'

function MakePost(picture,id) {
    return (
        <div className="div-post">
            <div className="div-post-label">
                <img src={picture} alt="profile-picture" className="post-profile-picture"/>
                <h2>@username {id}</h2>
            </div>
            <div className="div-post-text">
                <p>
                    Laborum consectetur dolor elit veniam nostrud officia voluptate voluptate irure velit consequat anim consequat do. Laboris reprehenderit velit exercitation nisi minim cillum mollit qui sunt. Consectetur eiusmod voluptate eiusmod magna aute laboris eiusmod officia dolore.
                    Laborum consectetur dolor elit veniam nostrud officia voluptate voluptate irure velit consequat anim consequat do. Laboris reprehenderit velit exercitation nisi minim cillum mollit qui sunt. Consectetur eiusmod voluptate eiusmod magna aute laboris eiusmod officia dolore.
                </p>
            </div>
        </div>
    );
}

function PostPage() {
    let posts = [];
    let profileId = 0;
    for(let i=0; i<6; i = i+1) {
        if (profileId === 0) {
            profileId = 1;
            posts.push(MakePost(profilePic11, i));
        } else {
            profileId = 0;
            posts.push(MakePost(profilePic22, i));
        }
    }

    return (
        <div className="div-home-main-posts">
            {posts}
        </div>   
    );
  }
  
  export default PostPage;