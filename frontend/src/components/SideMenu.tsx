"use client";
import Link from "next/link";
import { Home, Video, Upload, History, Settings } from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
}

export default function SideMenu({ isOpen }: SideMenuProps) {
  const menuItems = [
    { icon: Home, label: "ホーム", href: "/" },
    { icon: Video, label: "動画", href: "/videos" },
    { icon: Upload, label: "アップロード", href: "/upload" },
    { icon: History, label: "履歴", href: "/history" },
    { icon: Settings, label: "設定", href: "/settings" },
  ];

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 
