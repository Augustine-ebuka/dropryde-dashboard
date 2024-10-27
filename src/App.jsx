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
import Signin from './views/screens/signin/Signin';
import ForgotPassword from './views/screens/forgetPassword/ForgetPassword'
import VerifyOTP from './views/screens/forgetPassword/verifyOtp'
import NewPasswordPage from './views/screens/forgetPassword/resetPassword'
import SubscriptionScreen from './views/screens/subscription/subscription';
import AdminSupportScreen from './views/screens/support/support';
import ViewProfile from './views/screens/viewProfile/viewProfile';
import SettingsPage from './views/screens/settings/settings';
import OrderAndSubscriptionPage from './views/screens/orders/orderSubscriptionPage';
import { UserProvider } from './context/userContext';
import Drivers from './views/screens/drivers/drivers';

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
      <UserProvider>
        <Routes>
          <Route path="/dashboard" element={<MainLayout title={"Dashboard"}><HomeScreen/></MainLayout>}/>
          <Route path="/transactions" element={<MainLayout title={"Transactions"}><TransactionsScreen/></MainLayout>}/>
          <Route path="/users" element={<MainLayout title={"Users"}><UsersScreen /></MainLayout>}/>
          <Route path="/user/profile" element={<MainLayout title={"Profile"}><ProfileScreen/></MainLayout>}/>
          <Route path="/" element={<Signin />}/>
          <Route path="/forget-password" element={<ForgotPassword />}/>
          <Route path="/verify-otp" element={<VerifyOTP />}/>
          <Route path="/reset-password" element={<NewPasswordPage />}/>
          <Route path="/subscription"  element={<MainLayout title={"Users"}><SubscriptionScreen /></MainLayout>}/>
          <Route path="/support"  element={<MainLayout title={"Users"}><AdminSupportScreen /></MainLayout>}/>
          <Route path="/view-profile/:id"  element={<MainLayout title={"Profile"}><ViewProfile /></MainLayout>}/>
          <Route path="/settings"  element={<MainLayout title={"settings"}><SettingsPage /></MainLayout>}/>
          <Route path="/subscribers"  element={<MainLayout title={"subscribers"}><OrderAndSubscriptionPage /></MainLayout>}/>
          <Route path="/drivers"  element={<MainLayout title={"Drivers"}><Drivers /></MainLayout>}/>

        </Routes>
    </UserProvider>
      </ThemeProvider>
    </Router> 
  );
}

export default App;
