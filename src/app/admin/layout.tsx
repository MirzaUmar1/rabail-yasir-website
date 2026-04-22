import { Inter } from "next/font/google";
import Link from "next/link";
import { LayoutDashboard, Store, Package } from "lucide-react";

export const metadata = {
  title: "Dashboard - Store Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex fixed h-full">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="font-serif font-bold text-lg hidden md:block">Admin Console</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-gray-100 text-gray-900 font-medium text-sm">
            <LayoutDashboard className="w-4 h-4" />
            Products
          </Link>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-600 font-medium text-sm mt-8 border border-gray-200">
            <Store className="w-4 h-4" />
            Back to Store
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-64 flex flex-col h-screen overflow-y-auto w-full">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 md:px-8">
          <h1 className="font-semibold text-gray-800">Dashboard</h1>
        </header>
        <div className="p-6 md:p-8 w-full max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
