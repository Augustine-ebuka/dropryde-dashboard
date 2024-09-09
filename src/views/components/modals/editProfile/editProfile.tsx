import React, { useState } from 'react';
import { ProfileDetailsWrapper } from './styles';
import Input from '../../inputsField/input';

export default function EditModal() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  };

  const handleSubmit = () => {
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    // Perform save action here, such as an API call to save edited data
    console.log('Saving data:', { username, email, password });
  };

  return (
    <ProfileDetailsWrapper>
      {/* <h2>Admin: Edit User Information</h2> */}
      {error && <p className="error">{error}</p>}
      <Input
        label="Username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => handleChange(e, setUsername)}
        required={true}
      />
      <Input
        type="email"
        label="Email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => handleChange(e, setEmail)}
        required={true}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => handleChange(e, setPassword)}
        required={true}
      />
      <button onClick={handleSubmit} className="save-btn">
        Save Changes
      </button>
    </ProfileDetailsWrapper>
  );
}
