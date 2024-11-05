// components/AuthInitializer.tsx
"use client";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../store/authSlice';
import { AppDispatch } from '../store/store';

export default function AuthInitializer() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return null;
}
