import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Layout({ children }) {
  return (
    <div id="persistent-layout" className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-xl font-bold">My Inertia App</h1>
        </div>
      </header>

      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3 flex space-x-4">
          <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
          <Link href="/products" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
