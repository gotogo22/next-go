"use client"

import { create } from 'zustand'

interface SidebarStore {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const useSidebar = create<SidebarStore>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
})) 
