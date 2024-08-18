import React from 'react';
import { ActionSection, Content, FilterSection, PageTitle, StatsCard, StatsContent, StatsWrapper, TableBody, TableHead, TableItems, TableWrapper } from './styles';

const TellerTransferScreen: React.FC = () => {
    return (
        <Content>
            <PageTitle>Teller Transfers</PageTitle>
            <StatsWrapper>
                <StatsContent>
                    <StatsCard>
                        <h4>Number of Transfers Done</h4>
                        <h2>10</h2>
                    </StatsCard>
                    <StatsCard>
                        <h4>Available Balance</h4>
                        <h2>₦35,000</h2>
                    </StatsCard>
                    <StatsCard>
                        <h4>Total Amount Transferred</h4>
                        <h2>₦180,000</h2>
                    </StatsCard>
                </StatsContent>
            </StatsWrapper>
            <ActionSection>
                <button>New Transfer</button>
            </ActionSection>
            <FilterSection>
                <div className="input-sec">
                    <input type="date" name="date" id="" value="2022-07-22" />
                </div>
                <select name="" id="">
                    <option value="all">All</option>
                    <option value="debits">Debits</option>
                    <option value="credits">Credits</option>
                </select>
                <button>filter</button>
            </FilterSection>
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
 
export default TellerTransferScreen;