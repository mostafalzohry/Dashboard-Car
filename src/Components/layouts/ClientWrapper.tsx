'use client';

import { Provider } from 'react-redux';
import MainLayout from './MainLayout';
import { store } from '@/app/store';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <MainLayout>
        {children}
      </MainLayout>
    </Provider>
  );
}