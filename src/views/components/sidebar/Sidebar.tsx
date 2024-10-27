import React, { useRef, useEffect, useState } from 'react';
import { Content, Head, HeadContent, MenuItems, SidebarContent, SidebarWrapper, Title } from './styles';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCashStack } from 'react-icons/bs';
import { FaTruck } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaUsers } from 'react-icons/fa';
import { RiUserShared2Fill } from "react-icons/ri";
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from "../../../actions";
import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from '../../../context/userContext';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 5px 0;

  &:hover, &.active {
    background-color: black;
    color: #007bff;
  }

  span {
    margin-left: 10px;
  }
`;

const StyledSidebarContent = styled(SidebarContent)`
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const StyledTitle = styled(Title)`
  font-size: 14px;
  color: #888;
  margin-top: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Sidebar: React.FC = () => {
    const [profileData, setProfileData] = useState<any>(null);
    const toggleState = useSelector((state: { navigation: any }) => state.navigation);
    const dispatch = useDispatch();
    const { userProfile } = useUserContext();
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const sidebarRef = useRef(null);
    const contentRef = useRef(null);

    const closeMenu = (e: { target: any }) => {
        if (e.target == sidebarRef.current) {
            dispatch(toggleMenu());
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProfileData(userProfile);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const menuItems = [
        { path: '/dashboard', icon: <AiOutlineHome />, title: 'Home' },
        { path: '/transactions', icon: <BsCashStack />, title: 'Transactions', category: 'Transfers' },
        { path: '/users', icon: <FaUsers />, title: 'Users', category: 'All Users' }, 
        { path: '/subscribers', icon: <RiUserShared2Fill />, title: 'Subscribers', category: 'All Users' },
        { path: '/drivers', icon: <FaTruck />, title: 'Drivers', category: 'All Users' },
        { path: '/subscription', icon: <MdOutlinePriceChange />, title: 'Manage Price', category: 'Subscription' },
        { path: '/settings', icon: <IoMdSettings />, title: 'Settings', category: 'Settings' },
        { path: '/support', icon: <BiSupport />, title: 'Support', category: 'Support' },
        { path: '/user/profile', icon: <CgProfile />, title: 'Profile', category: 'Account' },
        { path: '/', icon: <CgLogOut />, title: 'Logout', category: 'Account' },
    ];

    return (
        <SidebarWrapper ref={sidebarRef} onClick={closeMenu} navigationState={toggleState}>
            <StyledSidebarContent navigationState={toggleState}>
                <Head>
                    <HeadContent>
                        <img src="/img/dropryde.png" alt="" style={{ height: "50px", width: "100px" }} />
                        <h4>{profileData?.firstname || 'Admin'} {profileData?.lastname || 'Admin'}</h4>
                    </HeadContent>
                </Head>
                <Content>
                    {['Transfers', 'All Users', 'Subscription', 'Settings', 'Support', 'Account'].map((category) => (
                        <React.Fragment key={category}>
                            <StyledTitle>{category}</StyledTitle>
                            <ul>
                                {menuItems
                                    .filter(item => item.category === category || (category === 'Transfers' && item.path === '/dashboard'))
                                    .map((item) => (
                                        <MenuItems key={item.path}>
                                            <StyledLink
                                                to={item.path}
                                                onClick={() => dispatch(toggleMenu())}
                                                className={location.pathname === item.path ? 'active' : ''}
                                            >
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </StyledLink>
                                        </MenuItems>
                                    ))}
                            </ul>
                        </React.Fragment>
                    ))}
                </Content>
            </StyledSidebarContent>
        </SidebarWrapper>
    );
};

export default Sidebar;