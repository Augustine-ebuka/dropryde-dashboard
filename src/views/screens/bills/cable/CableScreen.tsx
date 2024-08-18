import React from 'react';
import { ActionSection, Content, FilterSection, PageTitle, StatsCard, StatsContent, StatsWrapper, TableBody, TableHead, TableItems, TableWrapper } from './styles';

const CableScreen: React.FC = () => {
    return (
        <Content>
            <PageTitle>Cable</PageTitle>
            <ActionSection>
                <button>New Subscription</button>
            </ActionSection>
            <FilterSection>
                <div className="input-sec">
                    <input type="date" name="date" id="" value="2022-07-22" />
                </div>
                <select name="" id="">
                    <option value="all">All</option>
                    <option value="glo">Glo</option>
                    <option value="mtn">Mtn</option>
                    <option value="airtel">Airtel</option>
                    <option value="9mobile">9mobile</option>
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
 
export default CableScreen;