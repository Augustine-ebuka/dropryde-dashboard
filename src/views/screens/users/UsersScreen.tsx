
import React from 'react';
import Header from '../../components/header/Header';
import MainLayout from '../../components/layouts/mainLayout/MainLayout';
import { ActionSection, Content, FilterSection, PageTitle, StatsCard, StatsContent, StatsWrapper, TableBody, TableHead, TableItems, TableWrapper, SearchInput } from './styles';

const TransactionsScreen: React.FC = () => {
    return (
        <Content>
            <PageTitle>All Users</PageTitle>
            <ActionSection>
                <button>Download</button>
            </ActionSection>
            <FilterSection>
                <select name="" id="">
                    <option value="all">All</option>
                    <option value="debits">Latest</option>
                    <option value="credits">Current</option>
                </select>
                <button>filter</button>
                {/* search for users */}
                <div className="input-sec" style={{marginLeft:"20px"}}>
                    <input type="text" placeholder="Search for users" />
                </div>
            </FilterSection>
            <TableWrapper>
                <TableHead>
                    <li>Full name</li>
                    <li>Email</li>
                    <li>Phone</li>
                    <li>Business</li>
                    <li>Address</li>
                    <li>Role</li>
                </TableHead>
                <TableBody>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Victor</li>
                        <li>destiny@gmail.com</li>
                        <li>+234 090364763</li>
                        <li>Heritage Company</li>
                        <li>No 2, adegbola street</li>
                        <li>user</li>
                    </TableItems>
                </TableBody>    
            </TableWrapper>
        </Content>
    );
}
 
export default TransactionsScreen;