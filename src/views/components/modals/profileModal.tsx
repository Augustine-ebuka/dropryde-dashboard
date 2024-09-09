import React from 'react';
import { ProfileDetailsWrapper } from './styles';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface ProfileModalProps {
  users: User[]; // Expecting an array of users
}

export default function ProfileModal({ users }: ProfileModalProps) {
  return (
    <ProfileDetailsWrapper>
      {users.map((user: User, index: number) => (
        <div key={index}>
          <div className="profile-item">
            <strong>Name:</strong> {user.name}
          </div>
          <hr />
          <div className="profile-item">
            <strong>Email:</strong> {user.email}
          </div>
          <hr />
          <div className="profile-item">
            <strong>Phone:</strong> {user.phone}
          </div>
          <hr />
        </div>
      ))}
    </ProfileDetailsWrapper>
  );
}
