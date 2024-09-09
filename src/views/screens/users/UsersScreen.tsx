import React, { useState } from 'react';
import { ActionSection, Content, FilterSection, PageTitle, TableBody, TableHead, TableItems, TableWrapper } from './styles';
import ActionMenu from '../../components/actionMenu/actionMenu';

const initialUsers = [
  { name: 'Destiny Victor', email: 'destiny@gmail.com', phone: '+234 090364763', business: 'Heritage Company', address: 'No 2, adegbola street', role: 'user', verification: 'pending', id: 1 },
  { name: 'John Doe', email: 'john@gmail.com', phone: '+234 090364763', business: 'a12 Company', address: 'No 2, collins street', role: 'user', verification: 'verified', id: 2 },
  { name: 'Blake Charles', email: 'blake@gmail.com', phone: '+123 090364763', business: 'Heritage Company', address: 'No 2, kelv street', role: 'user', verification: 'verified', id: 3 },
];

const TransactionsScreen: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(initialUsers);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.phone.includes(searchTerm);

    if (filter === 'all') return matchesSearch;
    if (filter === 'pending') return matchesSearch && user.verification === 'pending';
    if (filter === 'verified') return matchesSearch && user.verification === 'verified';

    return matchesSearch;
  });

  return (
    <Content>
      <PageTitle>All Users</PageTitle>
      <ActionSection>
        <button>Download</button>
      </ActionSection>
      <FilterSection>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="verified">Verified</option>
        </select>
        <div className="input-sec" style={{ marginLeft: '20px' }}>
          <input type="text" placeholder="Search for users" value={searchTerm} onChange={handleSearchChange} />
        </div>
      </FilterSection>
      <TableWrapper>
        <TableHead>
          <li>Full Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Business</li>
          <li>Address</li>
          <li>Role</li>
          <li>Verification</li>
          <li>Action</li>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableItems key={user.id} status="success">
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li>{user.business}</li>
              <li>{user.address}</li>
              <li>{user.role}</li>
              <li>{user.verification}</li>
              <li>
                <ActionMenu userId={user.id} users={initialUsers} />
              </li>
            </TableItems>
          ))}
        </TableBody>
      </TableWrapper>
    </Content>
  );
}

export default TransactionsScreen;
