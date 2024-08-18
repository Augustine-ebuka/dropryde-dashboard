import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './views/screens/home/HomeScreen';
import { ThemeProvider } from "styled-components";
import { lightTheme } from './views/styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from './views/components/layouts/mainLayout/MainLayout';
import BankTransferScreen from './views/screens/transfer/bankTransfer/BankTransferScreen';
import TellerTransferScreen from './views/screens/transfer/tellerTransfer/TellerTransferScreen';
import TransactionsScreen from './views/screens/transactions/TransactionsScreen';
import CableScreen from './views/screens/bills/cable/CableScreen';
import InternetScreen from './views/screens/bills/internet/InternetScreen';
import AirtimeScreen from './views/screens/bills/airtime/AirtimeScreen';
import ProfileScreen from './views/screens/profile/ProfileScreen';
import UsersScreen from './views/screens/users/UsersScreen';

function App() {

  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<MainLayout title={"Dashboard"}><HomeScreen/></MainLayout>}/>
          {/* <Route path="/transfer/bank" element={<MainLayout title={"Bank Transfers"}><BankTransferScreen/></MainLayout>}/> */}
          {/* <Route path="/transfer/teller" element={<MainLayout title={"Teller Transfers"}><TellerTransferScreen/></MainLayout>}/> */}
          <Route path="/transactions" element={<MainLayout title={"Transactions"}><TransactionsScreen/></MainLayout>}/>
          <Route path="/users" element={<MainLayout title={"Users"}><UsersScreen /></MainLayout>}/>
          
          {/* <Route path="/bills/airtime" element={<MainLayout title={"Airtime"}><AirtimeScreen/></MainLayout>}/> */}
          {/* <Route path="/bills/internet" element={<MainLayout title={"Internet"}><InternetScreen/></MainLayout>}/> */}
          {/* <Route path="/bills/cable" element={<MainLayout title={"Cable"}><CableScreen/></MainLayout>}/>  */}
          <Route path="/user/profile" element={<MainLayout title={"Profile"}><ProfileScreen/></MainLayout>}/>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
