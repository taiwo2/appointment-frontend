import React from 'react'

const Profile = () =>{
  return (
     <div className="container">
      <h3>
        <strong>{currentUser.user.name}</strong>
        {' '}
        Profile
      </h3>
      <p>
        <strong>Token:</strong>
        {' '}
        {currentUser.jwt.substring(0, 20)}
        {' '}
        ...
        {' '}
        {currentUser.jwt.substr(currentUser.jwt.length - 20)}
      </p>
      <p>
        <strong>Id:</strong>
        {' '}
        {currentUser.user.id}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {currentUser.user.email}
      </p>
    </div>
  )
}

export default Profile;
