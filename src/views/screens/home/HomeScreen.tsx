import React, { useState, useEffect } from 'react';
import { BalanceCard, BalanceCardContent, Content, PageHeader, TableBody, TableHead, TableItems, TableWrapper, CardContainer, PaginationControls, FilterSection, SearchInput } from './styles'; // Assuming these are already defined styles
import TickPlacementBars from '../../components/chart/chart';
import { profile } from '../../../apis/auth';
import { getTransactions } from '../../../apis/transactions';
import { TransactionData } from '../../../apis/transactions';
import { useUserContext } from '../../../context/userContext';
const HomeScreen: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionData[]>([]);
    const [profileData, setProfileData] = useState<any>(null); // Assuming the profile structure is simple
    const [loading, setLoading] = useState(true); // Add a loading state
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage, setTransactionsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Pagination calculation
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const { userProfile} = useUserContext();
    
    useEffect(() => {
        // Fetch the profile and transactions data when the component mounts
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                // const profileResponse = await profile();
                setProfileData(userProfile)
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

    console.log(userProfile, "profile check from homse")

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
        const matchesSearch =
            transaction.reference.toLowerCase().includes(searchTerm) ||
            transaction.user.firstname.toLowerCase().includes(searchTerm);

        const matchesDateRange =
            (!startDate || new Date(transaction.date_created) >= new Date(startDate)) &&
            (!endDate || new Date(transaction.date_created) <= new Date(endDate));

        return matchesSearch && matchesDateRange;
    });

    // If loading, show the loader
    if (loading) {
        return (
            <Content>
                <h2>Loading...</h2> {/* Customize this with a proper loading spinner */}
            </Content>
        );
    }

    return (
        <Content>
            <PageHeader>
                <h2>Hello, {profileData?.firstname || 'Admin'}</h2>
                <p>{profileData?.email || 'email'}</p>
            </PageHeader>

            <CardContainer>
                <BalanceCard>
                    <BalanceCardContent>
                        <h4>Free Plan Users</h4>
                        <h2>6,600</h2>
                    </BalanceCardContent>
                </BalanceCard>
                <BalanceCard>
                    <BalanceCardContent>
                        <h4>Monthly Plan Users</h4>
                        <h2>4,890</h2>
                    </BalanceCardContent>
                </BalanceCard>
                <BalanceCard>
                    <BalanceCardContent>
                        <h4>Yearly Plan Users</h4>
                        <h2>1,600</h2>
                    </BalanceCardContent>
                </BalanceCard>
                <BalanceCard>
                    <BalanceCardContent>
                        <h4>Total Sales</h4>
                        <h2>$1,600</h2>
                    </BalanceCardContent>
                </BalanceCard>
            </CardContainer>

            {/* Insert the graph here */}
            <TickPlacementBars />

            <PageHeader>
                <h2 style={{ marginTop: '40px', fontSize: '30px' }}>Transactions</h2>
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
                    <li>Transaction Ref.</li>
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
