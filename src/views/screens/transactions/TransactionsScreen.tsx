import React, { useState, useEffect } from 'react';
import { BalanceCard, BalanceCardContent, Content, PageHeader, TableBody, TableHead, TableItems, TableWrapper, CardContainer, PaginationControls, FilterSection, SearchInput } from './styles'; // Assuming these are already defined styles
// import SubscriptionChart from '../../components/chart/chart';
import TickPlacementBars from '../../components/chart/chart';

const transactionsData = [
    {
        transaction_reference: "TX123456",
        name: "John Doe",
        plan: "Monthly",
        amount: "$20.00",
        date: "2024-08-21",
        transaction_status: "Success",
        id: "1"
    },
    {
        transaction_reference: "TX123457",
        name: "Jane Smith",
        plan: "Free",
        amount: "$0.00",
        date: "2024-08-20",
        transaction_status: "Pending",
        id: "2"
    },
    {
        transaction_reference: "TX123458",
        name: "Alice Johnson",
        plan: "Annual",
        amount: "$200.00",
        date: "2024-08-19",
        transaction_status: "Success",
        id: "3"
    },
    {
        transaction_reference: "TX123459",
        name: "Bob Williams",
        plan: "Quarterly",
        amount: "$55.00",
        date: "2024-08-18",
        transaction_status: "Failed",
        id: "4"
    },
    {
        transaction_reference: "TX123460",
        name: "Emma Brown",
        plan: "Monthly",
        amount: "$20.00",
        date: "2024-08-17",
        transaction_status: "Success",
        id: "5"
    },
    {
        transaction_reference: "TX123461",
        name: "Michael Davis",
        plan: "Annual",
        amount: "$200.00",
        date: "2024-08-16",
        transaction_status: "Pending",
        id: "6"
    },
    {
        transaction_reference: "TX123462",
        name: "Olivia Wilson",
        plan: "Free",
        amount: "$0.00",
        date: "2024-08-15",
        transaction_status: "Success",
        id: "7"
    },
    {
        transaction_reference: "TX123463",
        name: "James Taylor",
        plan: "Quarterly",
        amount: "$55.00",
        date: "2024-08-14",
        transaction_status: "Success",
        id: "8"
    },
    {
        transaction_reference: "TX123464",
        name: "Sophia Anderson",
        plan: "Monthly",
        amount: "$20.00",
        date: "2024-08-13",
        transaction_status: "Failed",
        id: "9"
    },
    {
        transaction_reference: "TX123465",
        name: "William Martinez",
        plan: "Annual",
        amount: "$200.00",
        date: "2024-08-12",
        transaction_status: "Success",
        id: "10"
    }
];

const HomeScreen: React.FC = () => {
    const [transactions, setTransactions] = useState(transactionsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage, setTransactionsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Pagination calculation
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Handle pagination controls
    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(transactions.length / transactionsPerPage)));
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleTransactionsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTransactionsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    // Handle search
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filter transactions by search and date range
    const filteredTransactions = transactions.filter((transaction) => {
        const matchesSearch = transaction.transaction_reference.toLowerCase().includes(searchTerm) ||
            transaction.name.toLowerCase().includes(searchTerm);

        const matchesDateRange =
            (!startDate || new Date(transaction.date) >= new Date(startDate)) &&
            (!endDate || new Date(transaction.date) <= new Date(endDate));

        return matchesSearch && matchesDateRange;
    });

    return (
        <Content>
            <PageHeader>
                <h2 style={{ marginTop: "40px", fontSize:"30px" }}>Transactions</h2>
            </PageHeader>

            <FilterSection>
                <SearchInput
                    type="text"
                    placeholder="Search transactions"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label>End Date:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </FilterSection>

            <TableWrapper>
                <TableHead>
                    <li>Transaction Reference</li>
                    <li>Name</li>
                    <li>Plan</li>
                    <li>Amount</li>
                    <li>Date</li>
                    <li>Status</li>
                </TableHead>
                <TableBody>
                    {filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction).map((transaction) => (
                        <TableItems status={transaction.transaction_status.toLowerCase()} key={transaction.id}>
                            <li>{transaction.transaction_reference}</li>
                            <li>{transaction.name}</li>
                            <li>{transaction.plan}</li>
                            <li>{transaction.amount}</li>
                            <li>{transaction.date}</li>
                            <li>{transaction.transaction_status}</li>
                        </TableItems>
                    ))}
                </TableBody>
            </TableWrapper>

            <PaginationControls>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredTransactions.length / transactionsPerPage)}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredTransactions.length / transactionsPerPage)}>Next</button>
                <select value={transactionsPerPage} onChange={handleTransactionsPerPageChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </PaginationControls>
        </Content>
    );
};

export default HomeScreen;
