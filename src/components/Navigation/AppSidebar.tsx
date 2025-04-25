
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { 
  Home, 
  FileText, 
  Folder,
  Search,
  File,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function AppSidebar() {
  const mainMenuItems = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: Home,
    },
    {
      title: 'File a Document',
      path: '/filing',
      icon: FileText,
    },
    {
      title: 'My Cases',
      path: '/cases',
      icon: Folder,
    },
  ];

  const utilityMenuItems = [
    {
      title: 'Search EAMS',
      path: '/search',
      icon: Search,
    },
    {
      title: 'Form Library',
      path: '/forms',
      icon: File,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-6 pt-4 pb-2">
          <h3 className="font-bold text-lg text-jetblue-600 dark:text-jetblue-400 flex items-center gap-1">
            <span>JetStream</span>
            <span className="text-sm bg-jetblue-500 text-white px-1.5 py-0.5 rounded">PILOT</span>
          </h3>
          <p className="text-xs text-muted-foreground mt-1">EAMS JET Filing System</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => cn(
                        "nav-link",
                        isActive && "nav-link-active"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {utilityMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => cn(
                        "nav-link",
                        isActive && "nav-link-active"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-3 py-2">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 JetStream Filing Pilot
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
