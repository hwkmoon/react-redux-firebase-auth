import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';

export default function UserRoute({children, ...rest}) {
  const {currentUser} = useSelector(state => state.user);
  console.log(currentUser)
  return currentUser ? children : <LoadingToRedirect />;
}
