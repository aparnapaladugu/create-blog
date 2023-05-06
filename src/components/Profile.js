import React from 'react';
import "./profile.scss";
// import Card from './Card'

const Profile = () => {
  return (
    <React.Fragment>
      <div className="profile">
      <div className="background" style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1661287976410-a9b4a4b65716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")`,
        backgroundRepeat: "no-repeat",
      }}>
        <div className="profile-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbgjIbLPVtXmLLOaP7qofqpflkEe-y6q25nr3wYColNG9lamK16DCnvZo-20Qdbx_n9U&usqp=CAU" alt="profile"/>
        </div>
      </div>
        <div className="grid">
          <div className="first-column">
            <p className="name"> <b>Aparna</b> </p>
            <p className="about">
              <b>Developer</b>
            </p>
          </div>
        </div>
    </div>
    {/* <div className="profile posted-blog">
      <Card />
      <hr />
      <Card />
      <hr />
      <Card />
    </div> */}
    </React.Fragment>
  )
}

export default Profile