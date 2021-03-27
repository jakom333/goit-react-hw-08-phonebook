import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from '../authNav/AuthNav';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import { header } from './AppBar.module.css';
import { authSelectors } from '../../redux/auth';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
