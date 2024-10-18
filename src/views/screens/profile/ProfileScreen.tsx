import React, { useState, useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Content, ContentColumn, Form, FormContent, InputSection, PageTitle, SecuritySection, Modal, ModalContent } from './styles';
import { useUserContext } from '../../../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import { updatePasswod } from "../../../apis/auth";

const ChangePasswordModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            toast.error('New password and confirm password do not match.');
            return;
        }

        try {
            const response = await updatePasswod({
                password: formData.currentPassword,
                new_password: formData.newPassword
            });

            if (response.status === 1) {
                toast.success('Password updated successfully!');
                onClose();
            } else {
                toast.error(response.message || 'Failed to update password. Please try again.');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            toast.error('An error occurred while updating the password. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <Modal>
            <ModalContent>
                <h2>Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-col">
                        <label htmlFor="currentPassword">Current Password</label>
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Enter current password"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-col">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="Enter new password"
                            value={formData.newPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-col">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm new password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
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
    const [profileData, setProfileData] = useState<any>(null);
    const [loading, setLoading] = useState(true); 
    const { userProfile } = useUserContext();
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

    const handleOpenChangePasswordModal = () => {
        setIsChangePasswordModalOpen(true);
    };

    const handleCloseChangePasswordModal = () => {
        setIsChangePasswordModalOpen(false);
    };

    useEffect(() => {
        // Fetch the profile and transactions data when the component mounts
        const fetchData = async () => {
            try {
                setProfileData(userProfile)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [userProfile]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Content>
            <ToastContainer />
            <PageTitle>Profile Settings</PageTitle>
            <ContentColumn>
                <Form>
                    <FormContent>
                        <div className="img-wrapper">
                            <FaUserAlt />
                        </div>
                        <InputSection>
                            <div className="input-col">
                                <label htmlFor="firstName">First name </label>
                                <input type="text" id="firstName" placeholder='First name' value={profileData?.firstname} readOnly />
                            </div>
                            <div className="input-col">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" placeholder='Last name' value={profileData?.lastname} readOnly />
                            </div>
                            <div className="input-col">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" placeholder='Email address' value={profileData?.email} readOnly />
                            </div>
                            <div className="input-col">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder='Enter phone' value={profileData?.phone} readOnly />
                            </div>
                            <div className="input-col">
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" placeholder='Country' value={profileData?.country} readOnly />
                            </div>
                            <div className="input-col">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" placeholder='City' value={profileData?.city} readOnly />
                            </div>
                            <div className="input-col">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" placeholder='Enter address' value={profileData?.address} readOnly />
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