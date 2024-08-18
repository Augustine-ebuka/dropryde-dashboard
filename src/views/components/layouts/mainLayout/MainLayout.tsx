import React from 'react'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import { Content, MainLayoutWrapper } from './styles'

const MainLayout: React.FC<{title: String}> = ({title, children}) => {
    return (
        <MainLayoutWrapper>
            <Sidebar />
            <Content>
                <Header title={title} />
                {children}
            </Content>
        </MainLayoutWrapper>
    )
}

export default MainLayout