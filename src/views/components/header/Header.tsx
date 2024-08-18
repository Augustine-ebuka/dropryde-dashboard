import React from 'react';
import { Content, HeaderWrapper, HeadMeta, Title } from './styles';
import { RiSearch2Line } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoMenuOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { MdArrowDropDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, logoutUser} from '../../../actions'
import { isPropertySignature } from 'typescript';
import { Link } from 'react-router-dom';

const  Header: React.FC<{title: String}> = ({title}) => {
    const dispatch = useDispatch();
    return (
        <HeaderWrapper>
            <Content>
                <div className="toggle-menu" onClick={() => dispatch(toggleMenu())}>
                    <IoMenuOutline />
                </div>
                <Title>
                    {/* {title} */}
                    <Link to="/">
                        <img  src="/img/dropryde.png" alt="" />
                    </Link>
                </Title>
                <HeadMeta>
                    <div className="notify-sec">
                        <IoMdNotificationsOutline />
                    </div>
                    <div className="profile-sec">
                        <CgProfile />
                        <MdArrowDropDown />
                    </div>
                </HeadMeta>
            </Content>
        </HeaderWrapper>
    )
}

export default Header