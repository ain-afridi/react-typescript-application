import React, { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from './store';

const PrivateOutlet: FC = () => {
  const isLoggedIn = window.localStorage.getItem("token") //useSelector((state: RootState) => state.Login.login._accessToken);

  if (!isLoggedIn) return <Navigate to='/' replace={true} />;
  return <Outlet />
};

export default PrivateOutlet;