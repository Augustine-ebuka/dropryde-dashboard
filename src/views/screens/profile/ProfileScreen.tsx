import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Content, ContentColumn, Form, FormContent, InputSection, PageTitle, SecuritySection } from './styles';

const ProfileScreen: React.FC = () => {
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
                                <label htmlFor="">First name</label>
                                <input type="text" placeholder='first name' value="John" />
                            </div>
                            <div className="input-col">
                                <label htmlFor="">Last name</label>
                                <input type="text" placeholder='last name' value="Doe" />
                            </div>
                            <div className="input-col">
                                <label htmlFor="">Email address</label>
                                <input type="text" placeholder='Email address' value="johndoe@gmail.com"/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" placeholder='Enter phone'/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="">Country</label>
                                <input type="text" placeholder='Country'/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="">City</label>
                                <input type="text" placeholder='City'/>
                            </div>
                            <div className="input-col">
                                <label htmlFor="">House Address</label>
                                <input type="text" placeholder='Enter address '/>
                            </div>
                        </InputSection>
                        <button>Edit Profile</button>
                    </FormContent>
                </Form>
                <SecuritySection>
                    <div className="security-card">
                        <h2>Change Password</h2>
                        <p>Always keep your account safe by setting a difficult password. Beware of fraudstars who pretend to be our agent. Kindly note that we would never request for your password</p>
                        <button>Change Password</button>
                    </div>
                    <div className="security-card">
                        <h2>BVN Verification</h2>
                        <p>Your Bank Verification number is a unique 10 digit number. We need to verify your bvn to remove transaction restrictions from your account.</p>
                        <button style={{color: '#DD1F6F', backgroundColor: '#FFEDDF'}}>Update BVN</button>
                    </div>
                </SecuritySection>
            </ContentColumn>
        </Content>
    );
}
 
export default ProfileScreen;