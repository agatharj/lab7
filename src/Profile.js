import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div>
      <h2>Profile</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Favorite Season: {formData.favoriteSeason}</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Profile;
