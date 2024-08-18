import React from 'react';
import Header from '../../components/header/Header';
import MainLayout from '../../components/layouts/mainLayout/MainLayout';
import { BalanceCard, BalanceCardContent, Content, PageHeader, TableBody, TableHead, TableItems, TableWrapper, CardContainer } from './styles';

const HomeScreen: React.FC = () => {
    return (
        <Content>
            <PageHeader>
                <h2>Hello , Dare Onaopemipo</h2>
            </PageHeader>
            <CardContainer>
                <BalanceCard>
                    <BalanceCardContent>
                        <h4>Subscribers</h4>
                        <h2>6,600</h2>
                    </BalanceCardContent>
                </BalanceCard>
                <BalanceCard>
                    <BalanceCardContent>
                        <h4>Free plan Users</h4>
                        <h2>4,890</h2>
                    </BalanceCardContent>
                </BalanceCard>
                <BalanceCard>
                    <BalanceCardContent>
                        <h4>Premuim plan users</h4>
                        <h2>1,600</h2>
                    </BalanceCardContent>
                </BalanceCard>

            </CardContainer>
            <PageHeader>
                <h2 style={{marginTop:"40px"}}>Latest Subscriptions</h2>
            </PageHeader>
            <TableWrapper>
                <TableHead>
                    <li>Details</li>
                    <li>Transaction</li>
                    <li>Amount</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Status</li>
                </TableHead>
                <TableBody>
                    <TableItems status="success">
                        <li>Destiny Victor ( Kuda Microfinance Bank)</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Completed</li>
                    </TableItems>
                    <TableItems status="failed">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Failed</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Destiny Gabriel ( First Bank of Nigeria)</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Completed</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Service Provider ( MTN )</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Completed</li>
                    </TableItems>
                    <TableItems status="failed">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Failed</li>
                    </TableItems>
                    <TableItems status="pending">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Pending</li>
                    </TableItems>
                    <TableItems status="failed">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Failed</li>
                    </TableItems>
                    <TableItems status="pending">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Pending</li>
                    </TableItems>
                    <TableItems status="failed">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Failed</li>
                    </TableItems>
                    <TableItems status="pending">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Pending</li>
                    </TableItems>
                    <TableItems status="failed">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Failed</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Completed</li>
                    </TableItems>
                    <TableItems status="failed">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Failed</li>
                    </TableItems>
                    <TableItems status="success">
                        <li>Dstv Subcription</li>
                        <li>Transfer</li>
                        <li>₦ 10,000.00</li>
                        <li>10th Jan, 2022</li>
                        <li>12:01.00 pm</li>
                        <li>Completed</li>
                    </TableItems>
                </TableBody>
            </TableWrapper>
        </Content>
    );
}
 
export default HomeScreen;