import React, { useState, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { ActionMenuWrapper, ModalWrapper, disableBodyScroll, enableBodyScroll } from './styles'; 
import ProfileModal from '../modals/profileModal';
import { IoCloseSharp } from "react-icons/io5";
import EditModal from '../modals/editProfile/editProfile';
import { useNavigate } from 'react-router-dom';


// interface ActionMenuProps {
//   userId: number;
//   users: User[];
// }

export default function ActionMenu({ userId, users }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleActionClick = (action: string) => {
    setModalContent(action);
    setIsOpen(false);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    if (modalContent) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return () => enableBodyScroll();
  }, [modalContent]);

  return (
    <div>
      <ActionMenuWrapper isOpen={isOpen}>
        <BsThreeDots className="menu-icon" onClick={toggleMenu} />
        <div className="menu-list">
          <div className="menu-item" onClick={() => handleActionClick('View Profile')}>View Profile</div>
          <div className="menu-item" onClick={() => handleActionClick('Edit')}>Edit</div>
          <div className="menu-item" style={{ color: "red" }} onClick={() => handleActionClick('Delete')}>Delete</div>
        </div>
      </ActionMenuWrapper>

      {modalContent && (
        <ModalWrapper>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}><IoCloseSharp size={30} /></button>
            <h2>{modalContent}</h2>
            {modalContent === 'View Profile' && (

              navigate(`/view-profile/${userId}`)
              // <ProfileModal users={users.filter((user: any) => user.id === userId)} />
            )}
            {modalContent === 'Edit' && <EditModal />}
            {modalContent === 'Delete' && (
              <p style={{ color: 'red' }}>Are you sure you want to delete this user?</p>
            )}
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}
