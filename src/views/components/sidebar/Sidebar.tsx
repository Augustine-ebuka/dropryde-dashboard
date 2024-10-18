import React, {useRef, useEffect, useState} from 'react'
import { Content, Head, HeadContent, Home, MenuItems, SidebarContent, SidebarWrapper, Title } from './styles'
import { AiOutlineHome, AiOutlineWallet, AiOutlineBank } from 'react-icons/ai'
import { BsCashStack, BsCreditCard2Back } from 'react-icons/bs'
import { MdPhoneIphone, MdPhoneAndroid } from 'react-icons/md'
import { FaSatelliteDish, FaUsers } from 'react-icons/fa'
import { RiUserShared2Fill } from "react-icons/ri";
import { MdOutlineChangeHistory } from "react-icons/md";
import { CgProfile, CgLogOut } from 'react-icons/cg'
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from "../../../actions";
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../context/userContext';


const Sidebar: React.FC = () => {
    const [profileData, setProfileData] = useState<any>(null); 
    const toggleState = useSelector((state: {navigation: any}) => state.navigation);
    const dispatch = useDispatch();
    const { userProfile} = useUserContext();
    const [loading, setLoading] = useState(true); 

    const sidebarRef = useRef(null)
    const contentRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target == sidebarRef.current) {
            dispatch(toggleMenu());
        }

    }
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
    }, []);

    return (
        <SidebarWrapper ref={sidebarRef} onClick={e => closeMenu(e)} navigationState={toggleState}>
            <SidebarContent navigationState={toggleState}>
                <Head>
                    <HeadContent>
                        <img src="/img/dropryde.png" alt="" style={{height:"50px", width:"100px"}} />
                        <h4> {profileData?.firstname || 'Admin'} {profileData?.lastname || 'Admin'}</h4>
                    </HeadContent>
                </Head>
                <Content>
                    <ul>
                        <Home><Link onClick={() => dispatch(toggleMenu())} to="/dashboard"><AiOutlineHome /><span>Home</span></Link></Home>
                        <Title>Transfers</Title>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/transactions"><BsCashStack /> <span>Transactions</span></Link></MenuItems>
                    </ul>
                    <ul>
                        <Title>All Users</Title>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/users"><FaUsers /> <span>Users</span></Link></MenuItems>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/subscribers"><RiUserShared2Fill /><span>subscribers</span></Link></MenuItems>
                    </ul>
                    <ul>
                        <Title>Subscription Settings</Title>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/subscription"><MdOutlineChangeHistory />
                        <span>Manage subscription</span></Link></MenuItems>
                    </ul>
                    <ul>
                        <Title>Settings</Title>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/settings"><IoMdSettings /> <span>Settings</span></Link></MenuItems>
                    </ul>
                    <ul>
                        <Title>Support</Title>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/support"><BiSupport /> <span>Customer support</span></Link></MenuItems>
                    </ul>
                    <ul>
                        <Title>Account</Title>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/user/profile"><CgProfile /> <span>Profile</span></Link></MenuItems>
                        <MenuItems><Link onClick={() => dispatch(toggleMenu())} to="/"><CgLogOut /> <span>Logout</span></Link></MenuItems>
                    </ul>
                </Content>
            </SidebarContent>
        </SidebarWrapper>
    )
}

export default Sidebar