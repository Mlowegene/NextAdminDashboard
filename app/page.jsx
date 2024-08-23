"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from './dashboard/page';

const Homepage = () => {

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.replace('/dashboard');
    }
  }, [router]);

  return (
    <Dashboard />
  )
}

export default Homepage