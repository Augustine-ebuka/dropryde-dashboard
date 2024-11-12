import React, { useState, useEffect } from 'react';
import { BalanceCard, BalanceCardContent, Content, PageHeader, TableBody, TableHead, TableItems, TableWrapper, CardContainer, PaginationControls, FilterSection, SearchInput } from './styles'; // Assuming these are already defined styles
// import SubscriptionChart from '../../components/chart/chart';
import TickPlacementBars from '../../components/chart/chart';
import { getTransactions } from '../../../apis/transactions';
import { TransactionData } from '../../../apis/transactions';

const HomeScreen: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage, setTransactionsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [loading, setLoading] = useState(true); 

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

    useEffect(() => {
        // Fetch the profile and transactions data when the component mounts
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                const transactionsResponse = await getTransactions();
                // setProfileData(profileResponse.data); // Set profile data
                setTransactions(transactionsResponse?.data); // Set transactions data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Stop loading once the data is fetched
            }
        };
        fetchData();
    }, []);

    // Filter transactions by search and date range
    const filteredTransactions = transactions.filter((transaction) => {
        const matchesSearch =
            transaction.reference.toLowerCase().includes(searchTerm) ||
            transaction.user.firstname.toLowerCase().includes(searchTerm);

        const matchesDateRange =
            (!startDate || new Date(transaction.date_created) >= new Date(startDate)) &&
            (!endDate || new Date(transaction.date_created) <= new Date(endDate));

        return matchesSearch && matchesDateRange;
    });

    // Function to download CSV
    const downloadCSV = () => {
        const headers = ["Transaction Reference", "Name", "Plan", "Amount", "Date", "Status"];
        const csvContent = [
            headers.join(","),
            ...filteredTransactions.map(transaction => [
                transaction.reference,
                transaction.user.firstname,
                transaction.type,
                transaction.amount,
                transaction.date_created,
                transaction.status
            ].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "transactions.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Content>
            <PageHeader>
                <h2 style={{ marginTop: "40px", fontSize:"30px" }}>Transactions</h2>
            </PageHeader>

            <FilterSection>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SearchInput
                        type="text"
                        placeholder="Search transactions"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button onClick={downloadCSV} style={{
                        padding: '10px 15px',
                        backgroundColor: '#F5AC38',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        Download CSV
                    </button>
                </div>
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
                        <TableItems status={transaction.status.toLowerCase()} key={transaction.id}>
                            <li>{transaction.reference}</li>
                            <li>{transaction.user.firstname} {transaction.user.lastname}</li>
                            <li>{transaction.type}</li>
                            <li>{transaction.amount}$</li>
                            <li>{transaction.date_created}</li>
                            <li>{transaction.status}</li>
                        </TableItems>
                    ))}
                </TableBody>
            </TableWrapper>

            <PaginationControls>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>
                    Page {currentPage} of {Math.ceil(filteredTransactions.length / transactionsPerPage)}
                </span>
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