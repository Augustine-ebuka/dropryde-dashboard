import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Content, ContentColumn, Form, FormContent, InputSection, PageTitle, SecuritySection, Modal, ModalContent } from './styles';

const ChangePasswordModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <Modal>
            <ModalContent>
                <h2>Change Password</h2>
                <form>
                    <div className="input-col">
                        <label htmlFor="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" placeholder="Enter current password" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="newPassword">New Password</label>
                        <input type="password" id="newPassword" placeholder="Enter new password" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm new password" />
                    </div>
                    <div className="button-group">
                        <button type="submit">Change Password</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </ModalContent>
        </Modal>
    );
};

const ProfileScreen: React.FC = () => {
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

    const handleOpenChangePasswordModal = () => {
        setIsChangePasswordModalOpen(true);
    };

    const handleCloseChangePasswordModal = () => {
        setIsChangePasswordModalOpen(false);
    };

    return (
        <Content>
            <PageTitle>Profile Settings</PageTitle>
            <ContentColumn>
                <Form>
                    <FormContent>
                        <div className="img-wrapper">
                            <FaUserAlt />
                        </div>
                        <InputSection>
                            <div className="input-col">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id="firstName" placeholder='First name' value="John" />
                            </div>
                            <div className="input-col">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" placeholder='Last name' value="Doe" />
                            </div>
                            <div className="input-col">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" placeholder='Email address' value="johndoe@gmail.com"/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder='Enter phone'/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" placeholder='Country'/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" placeholder='City'/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" placeholder='Enter address'/>
                            </div>
                        </InputSection>
                        <button type="button">Edit Profile</button>
                    </FormContent>
                </Form>
                <SecuritySection>
                    <div className="security-card">
                        <h2>Change Password</h2>
                        <p>Always keep your account safe by setting a strong password. Be cautious of potential security threats and never share your password with anyone.</p>
                        <button type="button" onClick={handleOpenChangePasswordModal}>Change Password</button>
                    </div>
                </SecuritySection>
            </ContentColumn>
            <ChangePasswordModal isOpen={isChangePasswordModalOpen} onClose={handleCloseChangePasswordModal} />
        </Content>
    );
}
 
export default ProfileScreen;