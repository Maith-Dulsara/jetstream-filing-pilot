
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navigation/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '../Navigation/AppSidebar';

export function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
