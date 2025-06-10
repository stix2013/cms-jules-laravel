import { Link } from '@inertiajs/react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex space-x-4">
        <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
        <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
        <Link href="/products" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
      </div>
    </nav>
  );
}
